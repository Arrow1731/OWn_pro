// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { db, auth } from '../Firebase/firebase';
// import { doc, getDoc, collection, addDoc } from 'firebase/firestore';

// const TakeTest = () => {
//   const { testId } = useParams();
//   const [test, setTest] = useState(null);
//   const [answers, setAnswers] = useState([]);

//   useEffect(() => {
//     const fetchTest = async () => {
//       const docRef = doc(db, 'tests', testId);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) setTest(docSnap.data());
//     };
//     fetchTest();
//   }, [testId]);

//   const handleSelect = (qIndex, option) => {
//     const newAnswers = [...answers];
//     newAnswers[qIndex] = option;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = async () => {
//     const correct = test.questions.filter(
//       (q, i) => q.answer === answers[i]
//     ).length;

//     await addDoc(collection(db, 'results'), {
//       studentId: auth.currentUser.uid,
//       testId,
//       answers,
//       score: correct,
//       total: test.questions.length,
//     });

//     alert(`Test completed! Score: ${correct}/${test.questions.length}`);
//   };

//   if (!test) return <p>Loading test...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{test.title}</h1>
//       {test.questions.map((q, i) => (
//         <div key={i} className="mb-6">
//           <p className="font-semibold">{i + 1}. {q.question}</p>
//           {q.options.map((option, j) => (
//             <div key={j}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${i}`}
//                   value={option}
//                   onChange={() => handleSelect(i, option)}
//                   checked={answers[i] === option}
//                 />
//                 {option}
//               </label>
//             </div>
//           ))}
//         </div>
//       ))}
//       <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
//         Submit
//       </button>
//     </div>
//   );
// };

// export default TakeTest;






































import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, addDoc } from 'firebase/firestore';
import { db, auth } from '../Firebase/firebase';

const TakeTest = () => {
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchTests = async () => {
      const snapshot = await getDocs(collection(db, 'tests'));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTests(list);
    };
    fetchTests();
  }, []);

  const handleSelectTest = (id) => {
    const test = tests.find(t => t.id === id);
    setSelectedTest(test);
    setAnswers({});
    setSubmitted(false);
  };

  const handleChange = (questionIndex, value) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = async () => {
    const total = selectedTest.questions.length;
    let score = 0;

    selectedTest.questions.forEach((q, index) => {
      if (answers[index] && answers[index].trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()) {
        score++;
      }
    });

    await addDoc(collection(db, 'results'), {
      studentId: auth.currentUser.uid,
      testId: selectedTest.id,
      answers,
      score,
      total,
    });

    setSubmitted(true);
    alert(`Test submitted! You scored ${score} out of ${total}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Take a Test</h1>

      {!selectedTest ? (
        <div className="space-y-4">
          <h2 className="text-xl">Choose a Test:</h2>
          {tests.map((test) => (
            <button
              key={test.id}
              onClick={() => handleSelectTest(test.id)}
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {test.title}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">{selectedTest.title}</h2>
          {selectedTest.questions.map((q, index) => (
            <div key={index} className="mb-6 border p-4 rounded">
              <p className="font-semibold">{index + 1}. {q.question}</p>
              {q.options.map((opt, i) => (
                <label key={i} className="block">
                  <input
                    type="radio"
                    name={`q-${index}`}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleChange(index, opt)}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}

          {!submitted && (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Submit Test
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TakeTest;