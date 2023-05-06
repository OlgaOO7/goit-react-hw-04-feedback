import { useState } from 'react';
import { FeedbackOption } from './FeedbackOption/FeedbackOption';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch(option) {
      case "good": 
      setGood(prevState => prevState + 1);
      break;
      case "neutral": 
      setNeutral(prevState => prevState + 1);
      break;
      case "bad": 
      setBad(prevState => prevState + 1);
      break;
      default: return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return;
    }
    return ((good * 100) / total).toFixed(0);
  };

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          handleFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

// або так:
//   const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

// const handleFeedback = option => {
//   setFeedback(prevState => ({
//     ...prevState,
//     [option]: prevState[option] + 1,
//   }));
// };

// const countTotalFeedback = () => {
//   return Object.values(feedback).reduce((previousValue, number) => previousValue + number, 0);
// };

// const countPositiveFeedbackPercentage = () => {
//   const total = countTotalFeedback();
//   if (total === 0) {
//     return 0;
//   }
//   return ((feedback.good * 100) / total).toFixed(0);
// };



// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = option => {
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return (good * 100 / (good + neutral + bad)).toFixed(0);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div className={css.wrapper}>
//         <Section title="Please leave feedback">
//           <FeedbackOption
//             options={['good', 'neutral', 'bad']}
//             handleFeedback={this.handleFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
