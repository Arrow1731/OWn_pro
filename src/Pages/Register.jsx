import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    nickname: '',
    sex: '',
    age: '',
    grade: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'role' && value === 'teacher') {
      setForm((prev) => ({
        ...prev,
        role: value,
        age: '',
        grade: '',
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      const user = userCredential.user;

      const userData = {
        fullName: form.fullName,
        nickname: form.nickname,
        sex: form.sex,
        email: form.email,
        role: form.role,
        uid: user.uid,
        createdAt: serverTimestamp(),
      };

      if (form.role === 'student') {
        userData.age = form.age;
        userData.grade = form.grade;
      }

      await setDoc(doc(db, 'users', user.uid), userData);

      navigate('/profile');
    } catch (err) {
      setError('Xatolik: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          Ro'yxatdan o'tish
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-medium">To‘liq ism</label>
            <input name="fullName" type="text" value={form.fullName} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
          </div>

          <div>
            <label className="block font-medium">Taxallus</label>
            <input name="nickname" type="text" value={form.nickname} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
          </div>

          <div>
            <label className="block font-medium">Jinsi</label>
            <select name="sex" value={form.sex} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="">Tanlang</option>
              <option value="erkak">Erkak</option>
              <option value="ayol">Ayol</option>
            </select>
          </div>

          {form.role === 'student' && (
            <>
              <div>
                <label className="block font-medium">Yosh</label>
                <input name="age" type="number" value={form.age} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" required/>
              </div>

              <div>
                <label className="block font-medium">Sinf</label>
                <input name="grade" type="text" value={form.grade} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" required/>
              </div>
            </>
          )}

          <div>
            <label className="block font-medium">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
          </div>

          <div>
            <label className="block font-medium">Parol</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"/>
          </div>

          <div>
            <label className="block font-medium">Rol</label>
            <select name="role" value={form.role} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
              <option value="student">O'quvchi</option>
              <option value="teacher">O'qituvchi</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">Ro'yxatdan o'tish</button>
        </form>
      </div>
    </div>
  );
};

export default Register;