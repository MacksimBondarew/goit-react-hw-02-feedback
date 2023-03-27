import ProtoTypes from 'prop-types';
import { StatisticsButton, StatisticsListButton } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <StatisticsListButton>
            {options.map(reaction => (
                <StatisticsButton
                    type="button"
                    key={reaction}
                    name={reaction}
                    onClick={onLeaveFeedback}
                >
                    {reaction}
                </StatisticsButton>
            ))}
        </StatisticsListButton>
    );
};

FeedbackOptions.prototype = {
    options: ProtoTypes.arrayOf(ProtoTypes.string).isRequired,
    onLeaveFeedback: ProtoTypes.func.isRequired,
};

export default FeedbackOptions;
