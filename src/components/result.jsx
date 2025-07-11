import "./result.css";
import { formatter } from "../util/investment";

const result = (result) => {
  const data = result.showResult;
  console.log("output result:", data);
  const initialInvestment = 0;
  // data[0].valueEndOfYear - data[0].annualInvestment - data[0].interest;

  return (
    <div className="result-container">
      <table className="result-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(row.annualInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default result;
