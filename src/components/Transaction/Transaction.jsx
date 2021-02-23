import React from 'react';
import TransactionElement from './components/TransactionElement';
import s from './table.module.scss';
import PropTypes from 'prop-types';

const Transaction = ({ amount, currency, type, data }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>{type}</th>
          <th>{amount}</th>
          <th>{currency}</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ amount, currency, type, id }) => (
          <TransactionElement
            amount={amount}
            currency={currency}
            type={type}
            id={id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Transaction;
