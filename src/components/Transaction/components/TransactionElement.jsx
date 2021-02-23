import React from 'react';
import PropTypes from 'prop-types';
// import TransactionElementComponent from './TransactionElementComponent.jsx';

const TransactionElement = ({ amount, currency, type, id }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
export default TransactionElement;

TransactionElement.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
