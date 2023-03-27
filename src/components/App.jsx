import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    onLeaveFeedback = evt => {
        const { name } = evt.target;
        // this.setState({ [name]: this.state[name] + 1 });
        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    };
    countTotalFeedback() {
        const { good, bad, neutral } = this.state;
        return good + bad + neutral;
    }
    countPositiveFeedbackPercentage() {
        const { good, bad, neutral } = this.state;
        const procentPositive = (good / (good + bad + neutral)) * 100;
        return Math.round(procentPositive) || 0;
    }

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </>
        );
    }
}

export default App;
