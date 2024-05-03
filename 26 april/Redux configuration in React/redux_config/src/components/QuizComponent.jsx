// src/components/QuizComponent.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizSuccess } from '../redux/actions/quizActions';

const QuizComponent = () => {
  const dispatch = useDispatch();
  const quizData = useSelector((state) => state.quiz.quizData);

  useEffect(() => {
    // Fetch quiz data from API
    // Mock API call for example
    const mockQuizData = [{ question: 'Question 1' }, { question: 'Question 2' }];
    dispatch(fetchQuizSuccess(mockQuizData));
  }, [dispatch]);

  return (
    <div>
      {quizData &&
        quizData.map((question, index) => (
          <QuizQuestion key={index} question={question} />
        ))}
    </div>
  );
};

export default QuizComponent;
