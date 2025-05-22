import React from "react";
import FormStyle from "./Form.module.css";
const Form = () => {
  return (
    <div className={FormStyle.Form_HERO}>
      <form>
        <div className={FormStyle.inputHero}>
          <div className={FormStyle.inputs}>
            <input type="number" placeholder="Current Savings" />
            <input type="number" placeholder="Yearly Savings" />
          </div>
          <div className={FormStyle.inputs}>
            <input
              type="number"
              placeholder="Expected Interest (%, per year)"
            />
            <input type="number" placeholder="Investment Duration (years)" />
          </div>
        </div>
        <div className={FormStyle.btns}>
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
