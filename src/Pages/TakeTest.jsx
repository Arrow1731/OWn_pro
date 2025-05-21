import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth } from '../Firebase/firebase';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';

const TakeTest = () => {
  const { testId } = useParams();
  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [expired, setExpired] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchTest = async () => {
      const docRef = doc(db, 'tests', testId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const testData = docSnap.data();
        const now = new Date();
        if (testData.endDate?.toDate && now > testData.endDate.toDate()) {
          setExpired(true);
        }
        setTest({ id: docSnap.id, ...testData });
      }
    };
    fetchTest();
  }, [testId]);

  const handleChange = (index, value) => {
    setAnswers(prev => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async () => {
    const total = test.questions.length;
    let score = 0;
    test.questions.forEach((q, i) => {
      if (answers[i]?.trim().toLowerCase() === q.correctAnswer?.trim().toLowerCase()) {
        score++;
      }
    });

    await addDoc(collection(db, 'results'), {
      studentId: auth.currentUser.uid,
      testId: test.id,
      answers,
      score,
      total,
    });

    setSubmitted(true);
    alert(`Test yuborildi! Sizning natijangiz ${score} shunda ${total}`);
  };

  if (!test) return <p>Testlar yuklanmoqda...</p>;
  if (expired) return <p className="text-red-500 text-lg">Kechirasiz, testni muddati tugagan</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{test.title}</h1>
      {test.questions.map((q, index) => (
        <div key={index} className="mb-6 border p-4 rounded">
          <p className="font-semibold">{index + 1}. {q.question}</p>
          {q.options.map((opt, i) => (
            <label key={i} className="block">
              <input type="radio" name={`q-${index}`} value={opt} checked={answers[index] === opt} onChange={() => handleChange(index, opt)} className="mr-2"/>
              {opt}
            </label>
          ))}
        </div>
      ))}
      {!submitted && (
        <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Testni yuborish</button>
      )}
    </div>
  );
};

export default TakeTest;