import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const CounterApp = () => {
  const [incCounter, setIncCounter] = useState(0);
  const [deCounter, setDeCounter] = useState(0);
  const [multiple, setMultiple] = useState(2);
  const [bgColor, setBgColor] = useState("black");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const multipleNumber = 2;

  const IncreamentCount = () => {
    setIncCounter((prev) => prev + 1);
  };
  const DecrementCount = () => {
    setDeCounter((prev) => prev - 1);
  };

  const resetInc = () => {
    setIncCounter(0);
  };
  const resetDec = () => {
    setDeCounter(0);
  };

  const toggleolor = () => {
    setBgColor((bgColor) => (bgColor === "black" ? "red" : "black"));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-full my-20 flex flex-col justify-center items-center">
      <div className="counter-app flex flex-col gap-y-3 max-w-lg w-full">
        <h2 className="font-semibold text-2xl">1. Counter</h2>
        <div className="flex justify-between">
          <button
            className="bg-green-900 text-white w-fit px-10 py-1"
            onClick={IncreamentCount}
          >
            Increase: {incCounter}
          </button>
          <span onClick={resetInc}>Reset</span>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-green-900 text-white px-10 py-1 w-fit"
            onClick={DecrementCount}
          >
            Decrease: {deCounter}
          </button>
          <span onClick={resetDec}>Reset</span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-xl text-green-500 mb-5">
            Multiple of 2
          </h3>
          <button
            className="bg-green-900 text-white w-fit px-10 py-1"
            onClick={() => {
              setMultiple(multiple * multipleNumber);
            }}
          >
            Multiple : {multiple}
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl mt-10 mb-5">
          2. Background change by Onclick
        </h3>
        <button
          className={`${
            bgColor === "red" ? "bg-red-600" : "bg-black"
          } text-white px-10 py-2 transition-all duration-200 rounded-md
          `}
          onClick={toggleolor}
        >
          Change Bg Color
        </button>
      </div>
      <div>
        <h3 className="font-semibold text-2xl mt-10 mb-5">
          3. Toggle Password to Show/Hide
        </h3>
        <div className="relative w-full ">
          <input
            type={showPassword ? "text" : "password"}
            className="border relative pl-3 text-sm h-7 max-w-80 w-full border-gray-200"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            {showPassword ? (
              <BsEyeSlash
                className="absolute right-8 inset-y-1.5"
                onClick={togglePassword}
              />
            ) : (
              <BsEye
                className="absolute right-8 inset-y-1.5"
                onClick={togglePassword}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
