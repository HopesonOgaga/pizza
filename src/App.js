import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // state creation
  const [steps, setSteps] = useState(1); // default value
  const [isOpen, setIsOPen] = useState(true);
  // update state in event handler
  function handle_next() {
    if (steps < 3) {
      setSteps((s) => s + 1);
    }
  }
  function handle_previous() {
    if (steps > 1) {
      setSteps((s) => s -1);
    }
  }
  return (
    <>
      <button
        className="close"
        onClick={function () {
          return setIsOPen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {steps}: {messages[steps - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handle_previous}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handle_next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
