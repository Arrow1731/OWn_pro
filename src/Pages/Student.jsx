// // import React, { Component } from 'react'

// // export default class Student extends Component {
// //   render() {
// //     return (
// //       <div className='container'>Student</div>
// //     )
// //   }
// // }















// // src/Pages/Student.jsx
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Student = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const testId = 'YOUR_TEST_ID_HERE'; // Replace with actual test ID from Firebase
//     navigate(`/student/take/${testId}`);
//   }, [navigate]);

//   return null; // or show a loading spinner/message
// };

// export default Student;





































import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Student = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to test list when student visits this page
    navigate('/tests');
  }, [navigate]);

  return <p className="p-4">Test qismiga qayta kirish...</p>;
};

export default Student;