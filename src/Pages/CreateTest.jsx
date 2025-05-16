// // // import React, { useState } from 'react';
// // // import { db } from '../Firebase/firebase';
// // // import { collection, addDoc } from 'firebase/firestore';

// // // const CreateTest = () => {
// // //   const [title, setTitle] = useState('');
// // //   const [questions, setQuestions] = useState([
// // //     {
// // //       question: '',
// // //       options: ['', '', '', ''],
// // //       correctAnswer: '',
// // //     },
// // //   ]);

// // //   const handleQuestionChange = (index, field, value) => {
// // //     const updated = [...questions];
// // //     if (field === 'question') {
// // //       updated[index].question = value;
// // //     } else if (field.startsWith('option')) {
// // //       const optionIndex = parseInt(field.split('-')[1]);
// // //       updated[index].options[optionIndex] = value;
// // //     } else if (field === 'correctAnswer') {
// // //       updated[index].correctAnswer = value;
// // //     }
// // //     setQuestions(updated);
// // //   };

// // //   const addQuestion = () => {
// // //     setQuestions([...questions, {
// // //       question: '',
// // //       options: ['', '', '', ''],
// // //       correctAnswer: '',
// // //     }]);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await addDoc(collection(db, 'tests'), {
// // //         title,
// // //         questions,
// // //       });
// // //       alert('Test created successfully!');
// // //       setTitle('');
// // //       setQuestions([{
// // //         question: '',
// // //         options: ['', '', '', ''],
// // //         correctAnswer: '',
// // //       }]);
// // //     } catch (error) {
// // //       console.error('Error creating test:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
// // //       <h1 className="text-2xl font-bold mb-4">Create a New Test</h1>
// // //       <form onSubmit={handleSubmit}>
// // //         <label className="block mb-4">
// // //           <span className="text-gray-700">Test Title</span>
// // //           <input
// // //             type="text"
// // //             className="mt-1 block w-full border p-2 rounded"
// // //             value={title}
// // //             onChange={(e) => setTitle(e.target.value)}
// // //             required
// // //           />
// // //         </label>

// // //         {questions.map((q, index) => (
// // //           <div key={index} className="mb-6 border p-4 rounded">
// // //             <h3 className="font-semibold mb-2">Question {index + 1}</h3>
// // //             <input
// // //               type="text"
// // //               placeholder="Enter question"
// // //               className="block w-full mb-2 p-2 border rounded"
// // //               value={q.question}
// // //               onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
// // //               required
// // //             />
// // //             {q.options.map((opt, i) => (
// // //               <input
// // //                 key={i}
// // //                 type="text"
// // //                 placeholder={`Option ${i + 1}`}
// // //                 className="block w-full mb-2 p-2 border rounded"
// // //                 value={opt}
// // //                 onChange={(e) => handleQuestionChange(index, `option-${i}`, e.target.value)}
// // //                 required
// // //               />
// // //             ))}
// // //             <input
// // //               type="text"
// // //               placeholder="Correct answer (must match one option)"
// // //               className="block w-full mb-2 p-2 border rounded"
// // //               value={q.correctAnswer}
// // //               onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
// // //               required
// // //             />
// // //           </div>
// // //         ))}

// // //         <button
// // //           type="button"
// // //           className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
// // //           onClick={addQuestion}
// // //         >
// // //           Add Another Question
// // //         </button>

// // //         <button
// // //           type="submit"
// // //           className="bg-green-600 text-white px-6 py-2 rounded"
// // //         >
// // //           Save Test
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default CreateTest;




























import React, { useState } from 'react';
import { db } from '../Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateTest = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
    },
  ]);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    if (field === 'question') {
      updated[index].question = value;
    } else if (field.startsWith('option')) {
      const optionIndex = parseInt(field.split('-')[1]);
      updated[index].options[optionIndex] = value;
    } else if (field === 'correctAnswer') {
      updated[index].correctAnswer = value;
    }
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
      },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    try {
      await addDoc(collection(db, 'tests'), {
        title,
        questions,
      });
      setSuccessMsg('✅ Test created successfully!');
      setTitle('');
      setQuestions([
        {
          question: '',
          options: ['', '', '', ''],
          correctAnswer: '',
        },
      ]);
    } catch (error) {
      console.error('Error creating test:', error);
      setErrorMsg('❌ Failed to create test. Please try again.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create a New Test</h1>

      {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
      {successMsg && <p className="text-green-600 mb-4">{successMsg}</p>}

      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Test Title</span>
          <input
            type="text"
            className="mt-1 block w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        {questions.map((q, index) => (
          <div key={index} className="mb-6 border p-4 rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Question {index + 1}</h3>
            <input
              type="text"
              placeholder="Enter question"
              className="block w-full mb-2 p-2 border rounded"
              value={q.question}
              onChange={(e) =>
                handleQuestionChange(index, 'question', e.target.value)
              }
              required
            />

            {q.options.map((opt, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Option ${i + 1}`}
                className="block w-full mb-2 p-2 border rounded"
                value={opt}
                onChange={(e) =>
                  handleQuestionChange(index, `option-${i}`, e.target.value)
                }
                required
              />
            ))}

            <label className="block mb-2 font-medium text-gray-700">
              Correct Answer
            </label>
            <select
              className="block w-full mb-2 p-2 border rounded"
              value={q.correctAnswer}
              onChange={(e) =>
                handleQuestionChange(index, 'correctAnswer', e.target.value)
              }
              required
            >
              <option value="">Select correct answer</option>
              {q.options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt || `Option ${i + 1}`}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={addQuestion}
        >
          ➕ Add Another Question
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          ✅ Save Test
        </button>
      </form>
    </div>
  );
};

export default CreateTest;


































// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../Firebase/firebase";
// import { getDoc, doc, getFirestore } from "firebase/firestore";

// const db = getFirestore();

// function CreateTest() {
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUserRole = async () => {
//       const currentUser = auth.currentUser;
//       if (!currentUser) {
//         navigate("/login");
//         return;
//       }

//       const userDoc = await getDoc(doc(db, "users", currentUser.uid));
//       if (userDoc.exists()) {
//         const userData = userDoc.data();
//         if (userData.role !== "teacher") {
//           navigate("/"); // redirect students to home
//         }
//       } else {
//         navigate("/login");
//       }
//       setLoading(false);
//     };

//     checkUserRole();
//   }, [navigate]);

//   if (loading) return <div>Yuklanmoqda...</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Test yaratish</h1>
//       {/* your form to create a test */}
//     </div>
//   );
// }

// export default CreateTest;





















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../Firebase/firebase";
// import { getDoc, doc } from "firebase/firestore";

// function CreateTest() {
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkUserRole = async () => {
//       try {
//         const currentUser = auth.currentUser;
//         if (!currentUser) {
//           navigate("/login");
//           return;
//         }

//         const userDocRef = doc(db, "users", currentUser.uid);
//         const userDocSnap = await getDoc(userDocRef);

//         if (userDocSnap.exists()) {
//           const userData = userDocSnap.data();
//           if (userData.role !== "teacher") {
//             navigate("/");
//           }
//         } else {
//           navigate("/login");
//         }
//       } catch {
//         navigate("/login");
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkUserRole();
//   }, [navigate]);

//   if (loading) return <div>Yuklanmoqda...</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Test yaratish</h1>
//     </div>
//   );
// }

// export default CreateTest;