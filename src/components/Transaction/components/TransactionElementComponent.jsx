import React from 'react';

const TransactionElementComponent = ({ type, amount, currency, id }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionElementComponent;
