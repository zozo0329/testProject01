import React from "react";
import TableStyle from "./Table.module.css";
const Table = ({ yearlyData, initialInversment }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className={TableStyle}>
      <table className={TableStyle.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((value) => {
            return (
              <tr key={value.year}>
                <td>{value.year}</td>
                <td>{formatter.format(value.savingsEndOfYear)}</td>
                <td>{formatter.format(value.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    value.savingsEndOfYear -
                      initialInversment -
                      value.yearlyContribution * value.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    initialInversment + value.yearlyContribution * value.year
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
