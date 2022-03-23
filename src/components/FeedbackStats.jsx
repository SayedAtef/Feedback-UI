import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate Average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // to make sure that we have only one decimel & if it is 0 we replace it with empty string using regex
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{`${feedback.length} Reviews`}</h4>
      <h4>{`Average Rating: ${isNaN(average) ? 0 : average}`}</h4>
    </div>
  );
}

export default FeedbackStats;
