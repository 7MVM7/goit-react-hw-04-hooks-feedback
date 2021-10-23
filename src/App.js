// import "./App.css";
import React, { useState } from "react";
import Section from "./components/Section/Section.jsx";
import Notification from "./components/Notification/Notification";
import FeedBackOptions from "./components/FeedBackOptions/FeedBackOptions";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onHandleClick = (name) => {
    switch (name) {
      case "good":
        setGood((good) => good + 1);
        break;
      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;
      case "bad":
        setBad((bad) => bad + 1);
        break;
      default:
        return;
    }
  };

  const arrFeedback = [`good`, `neutral`, `bad`];

  function totalAmount() {
    return good + neutral + bad;
  }

  function positivePercentage() {
    return Math.round((good / totalAmount()) * 100);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedBackOptions onFeedback={onHandleClick} btnNames={arrFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {totalAmount() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalAmount()}
            positive={positivePercentage()}
          />
        ) : (
          <Notification notice="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;

// const initialState = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// // };
// export default class App extends Component {
//   state = initialState;

//   onHandleClick = (e) => {
//     const name = e.target.name;
//     this.setState(() => ({
//       [name]: this.state[name] + 1,
//     }));
//   };

//   totalAmount = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   positivePercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.totalAmount()) * 100);
//   };
