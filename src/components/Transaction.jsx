import TransactionElement from "./transaction/index";

const Transaction = ({ amount, currency, type, data }) => (
  <div>
    <TransactionElement
      amountTitle={amount}
      currencyTitle={currency}
      typeTitle={type}
      data={data}
    />
  </div>
);

export default Transaction;
