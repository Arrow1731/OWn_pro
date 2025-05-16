import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Tests = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const snapshot = await getDocs(collection(db, 'tests'));
      const testsList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTests(testsList);
    };
    fetchTests();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Tests</h1>
      {tests.length === 0 ? (
        <p>No tests found.</p>
      ) : (
        tests.map(test => (
          <div key={test.id} className="mb-4 border p-4 rounded">
            <p className="font-semibold">{test.title}</p>
            <Link
              to={`/take-test/${test.id}`}
              className="text-blue-600 hover:underline"
            >
              Take This Test
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Tests;