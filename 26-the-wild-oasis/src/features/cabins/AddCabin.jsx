import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
    return (
        <Modal>
            <Modal.Open opens='cabin-form'>
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name='cabin-form'>
                <CreateCabinForm />
            </Modal.Window>
            {/* <Modal.Open opens='table'>
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name='table'>
                <CreateCabinForm />
            </Modal.Window> */}
        </Modal>
    );
}

// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//     return (
//         <>
//             <Button onClick={() => setIsOpenModal((show) => !show)}>
//                 Add new Cabin
//             </Button>
//             {isOpenModal && (
//                 <Modal onClose={() => setIsOpenModal(false)}>
//                     <CreateCabinForm
//                         onCloseModal={() => setIsOpenModal(false)}
//                     />
//                 </Modal>
//             )}
//         </>
//     );
// }

export default AddCabin;
