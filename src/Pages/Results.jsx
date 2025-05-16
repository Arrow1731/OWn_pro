import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const snapshot = await getDocs(collection(db, 'results'));
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResults(list);
    };
    fetchResults();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test Results</h1>
      {results.map((result, i) => (
        <div key={i} className="mb-4 border p-4 rounded">
          <p><strong>Student ID:</strong> {result.studentId}</p>
          <p><strong>Test ID:</strong> {result.testId}</p>
          <p><strong>Natijasi:</strong> {result.score}/{result.total}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;