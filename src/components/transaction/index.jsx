import PropTypes from "prop-types";
import TransactionElement from "./TransactionElement.jsx";
// const Type = ({ data }) =>
//   data.map(({ type, amount, currency, id }) => {
//     return (
//       <tr key={id}>
//         <td>{type}</td>
//         <td>{amount}</td>
//         <td>{currency}</td>
//       </tr>
//     );
//   });

const Type = ({ data }) => {
  return (
    <>
      {data.map((el) => (
        <TransactionElement
          key={el.id}
          type={el.type}
          amount={el.amount}
          currency={el.currency}
        />
      ))}
    </>
  );
};
export default Type;

Type.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
