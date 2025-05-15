import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth } from '../Firebase/firebase';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';

const TakeTest = () => {
  const { testId } = useParams();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchTest = async () => {
      const docRef = doc(db, 'tests', testId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setTest(docSnap.data());
    };
    fetchTest();
  }, [testId]);

  const handleSelect = (qIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    const correct = test.questions.filter(
      (q, i) => q.answer === answers[i]
    ).length;

    await addDoc(collection(db, 'results'), {
      studentId: auth.currentUser.uid,
      testId,
      answers,
      score: correct,
      total: test.questions.length,
    });

    alert(`Test completed! Score: ${correct}/${test.questions.length}`);
  };

  if (!test) return <p>Loading test...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{test.title}</h1>
      {test.questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className="font-semibold">{i + 1}. {q.question}</p>
          {q.options.map((option, j) => (
            <div key={j}>
              <label>
                <input
                  type="radio"
                  name={`question-${i}`}
                  value={option}
                  onChange={() => handleSelect(i, option)}
                  checked={answers[i] === option}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
};

export default TakeTest;