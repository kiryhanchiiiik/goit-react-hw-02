import styles from "./Feedback.module.css";

const Feedback = ({ clicks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={styles.feedbackList}>
      <li>Good: {clicks.good}</li>
      <li>Neutral: {clicks.neutral}</li>
      <li>Bad: {clicks.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
