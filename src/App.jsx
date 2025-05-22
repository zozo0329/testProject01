import AppStyle from "./App.module.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Main/Form/Form";
import Table from "./Components/Main//Table/Table";
import { useState } from "react";
function App() {
  const [data, setData] = useState(null);
  const calculateHandler = (userData) => {
    setData(userData);
  };
  const yearlyData = []; // per-year results

  if (data) {
    let currentSavings = +data.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +data.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +data.expectedInterest / 100;
    const duration = +data.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div className={AppStyle.App_HERO}>
      <Header />
      <Form calculateHandler={calculateHandler} />
      {!data && <p>No investment calculated yet.</p>}
      {data && (
        <Table yearlyData={yearlyData} initialInvesment={data.currentSavings} />
      )}
    </div>
  );
}

export default App;
