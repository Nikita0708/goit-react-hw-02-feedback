import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map(option => {
                return (
                    <li><button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button></li>
                )
            })}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};