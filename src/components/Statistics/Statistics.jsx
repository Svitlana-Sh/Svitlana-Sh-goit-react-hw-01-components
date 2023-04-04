import PropTypes from "prop-types";
import { SectionStatistics, StatisticsList, StatisticItem, StatisticLabel } from "./Statistics-style";

export const Statistics = ({ title, stats}) => {
  return (
    <SectionStatistics>
      {title && <h2>{title}</h2>}

      <StatisticsList>
      {stats.map(stat => (
        <StatisticItem
          key={stat.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <StatisticLabel>{stat.label}</StatisticLabel>
          <span>{stat.percentage}%</span>
        </StatisticItem>
        ))}
    </StatisticsList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}62`;
}