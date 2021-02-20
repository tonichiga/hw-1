import Type from "./transaction/index";
import "./table.scss";
import PropTypes from "prop-types";

const Transaction = ({ amount, currency, type, data }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </thead>
    <tbody>
      <Type data={data} />
    </tbody>
  </table>
);

export default Transaction;
