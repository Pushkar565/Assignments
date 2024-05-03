// src/components/QuizQuestion.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateScore } from '../redux/actions/quizActions';

const QuizQuestion = ({ question, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Calculate score based on selectedOption
    const isCorrect = selectedOption === question.correctOption;
    dispatch(updateScore(isCorrect ? 1 : 0));

    // Move to next question or result page
    onNextQuestion();
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz-option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizQuestion;
