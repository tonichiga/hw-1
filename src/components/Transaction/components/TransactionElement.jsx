import React from 'react';
import PropTypes from 'prop-types';
import TransactionElementComponent from './TransactionElementComponent.jsx';

const TransactionElement = ({ data }) => {
  return (
    <>
      {data.map(el => (
        <TransactionElementComponent
          key={el.id}
          type={el.type}
          amount={el.amount}
          currency={el.currency}
        />
      ))}
    </>
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
