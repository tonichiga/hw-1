const TransactionElement = ({ amountTitle, currencyTitle, typeTitle, data }) =>
  data.map(({ type, currency, amount, id }) => {
    return (
      <div key={id}>
        <p>{typeTitle}</p>
        <span>{type}</span>

        <p>{amountTitle}</p>
        <span>{amount}</span>

        <p>{currencyTitle}</p>
        <span>{currency}</span>
      </div>
    );
  });

export default TransactionElement;
