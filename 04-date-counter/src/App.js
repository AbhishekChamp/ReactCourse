import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("June 24 2023");
    date.setDate(date.getDate() + count);

    return (
        <>
            <div>
                <button onClick={() => setStep((c) => c - 1)}> - </button>
                <span> Step: {step} </span>
                <button onClick={() => setStep((c) => c + 1)}> + </button>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}> - </button>
                <span> Count: {count} </span>
                <button onClick={() => setCount((c) => c + step)}> + </button>
            </div>
            <p style={{ textAlign: "center" }}>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
        </>
    );
}

export default App;
