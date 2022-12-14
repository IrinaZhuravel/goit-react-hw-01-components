import PropTypes from 'prop-types';
import { Statistic, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export const Statistics  = ({title, stats}) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title >}
      <StatList>
        {stats.map(({id, label, percentage}) => (
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor()}}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        )
        )}
      </StatList>
    </Statistic>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
