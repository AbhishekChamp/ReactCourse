import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.log(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}

export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        "",
    );
    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    console.log(newCabin.image.name);
    console.log(newCabin);

    // 1. Create Cabin
    const { data, error } = await supabase
        .from("cabins")
        .insert([{ ...newCabin, image: imagePath }]);

    if (error) {
        throw new Error("Cabin could not be created");
    }

    // 2. Upload Image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    // 3. Delete the cabin IF there was an error uploading image
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        throw new Error(
            "Cabin image could not be uploaded and the cabin was not created",
        );
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        throw new Error("Cabin could not be deleted");
    }

    return data;
}
