import React, { useState } from "react";
import FormStyle from "./Form.module.css";
const Form = ({ calculateHandler }) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [duration, setDuration] = useState("");

  // HANDLERS
  const currentSavingsHandler = (e) => {
    setCurrentSavings(e.target.value);
    console.log("CURRENT SAVINGS: ", currentSavings);
  };
  const yearlySavingsHandler = (e) => {
    setYearlySavings(e.target.value);
    console.log("YEARLY SAVINGS : ", yearlySavings);
  };
  const expectedInterestHandler = (e) => {
    setExpectedInterest(e.target.value);
    console.log("EXPECTED INTEREST", expectedInterest);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
    console.log("DURATION: ", duration);
  };

  // Submit
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      currentSavings,
      yearlySavings,
      expectedInterest,
      duration,
    };
    calculateHandler(userData);
  };
  // Reset
  const resetHandler = () => {
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setDuration("");
  };
  return (
    <div className={FormStyle.Form_HERO}>
      <form onSubmit={submitHandler}>
        <div className={FormStyle.inputHero}>
          <div className={FormStyle.inputs}>
            <input
              type="number"
              placeholder="Current Savings"
              onChange={currentSavingsHandler}
              value={currentSavings}
            />
            <input
              type="number"
              placeholder="Yearly Savings"
              onChange={yearlySavingsHandler}
              value={yearlySavings}
            />
          </div>
          <div className={FormStyle.inputs}>
            <input
              type="number"
              placeholder="Expected Interest (%, per year)"
              onChange={expectedInterestHandler}
              value={expectedInterest}
            />
            <input
              type="number"
              placeholder="Investment Duration (years)"
              onChange={durationHandler}
              value={duration}
            />
          </div>
        </div>
        <div className={FormStyle.btns}>
          <button type="reset" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
