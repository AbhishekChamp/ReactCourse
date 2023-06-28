import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date("June 24 2023");
    date.setDate(date.getDate() + count);

    function handleClick() {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <div>
                <input
                    type='range'
                    min='0'
                    max='10'
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span> Step: {step} </span>
            </div>
            <div>
                <button onClick={() => setCount((c) => c - step)}> - </button>
                <input
                    type='text'
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
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
            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleClick}>Reset</button>
                </div>
            ) : null}
        </>
    );
}

export default App;
