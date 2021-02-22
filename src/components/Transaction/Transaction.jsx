import React from 'react';
import TransactionElement from './components/TransactionElement';
import s from './table.module.scss';
import PropTypes from 'prop-types';

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
      <TransactionElement data={data} />
    </tbody>
  </table>
);

export default Transaction;
