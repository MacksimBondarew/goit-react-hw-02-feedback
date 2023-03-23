import PropTypes from 'prop-types';
import { ListStatic, ItemStatic, SpanItemStatic } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ListStatic>
            <ItemStatic>
                <SpanItemStatic>Good: </SpanItemStatic> {good}
            </ItemStatic>
            <ItemStatic>
                <SpanItemStatic>Neutral: </SpanItemStatic> {neutral}
            </ItemStatic>
            <ItemStatic>
                <SpanItemStatic>Bad: </SpanItemStatic> {bad}
            </ItemStatic>
            <ItemStatic>
                <SpanItemStatic>Total: </SpanItemStatic> {total}
            </ItemStatic>
            <ItemStatic>
                <SpanItemStatic>Positive feeadback: </SpanItemStatic>{' '}
                {positivePercentage}%
            </ItemStatic>
        </ListStatic>
    );
};

export default Statistics;

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
