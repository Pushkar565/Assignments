// src/components/QuizResult.jsx
import { useSelector } from 'react-redux';

const QuizResult = () => {
  const score = useSelector((state) => state.quiz.score);

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score}</p>
    </div>
  );
};

export default QuizResult;
