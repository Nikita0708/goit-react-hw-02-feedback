import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul>
        <li><span>Good: {good }</span></li>
        <li><span>Neutral: {neutral }</span></li>
        <li><span>Bad: {bad }</span></li>
        <li><span>Total: {total }</span></li>
        <li><span>Positive feedback: {positivePercentage }%</span></li>
    </ul>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};