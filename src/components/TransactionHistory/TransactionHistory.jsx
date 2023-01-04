import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
<table className={s.table}>
  <thead>
    <tr className={s.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, amount, type, currency}, index) => {
        let bgColor = index%2 === 0 ? s.light: s.dark;
        return (
            <tr key={id} className={`${s.row} ${bgColor}`}>
                <td className={s.col}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        );
    })}
  </tbody>

</table>
    );
}

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(
       PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
       }) 
    ),
};