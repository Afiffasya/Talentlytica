import React, { useState } from 'react';
import './App.css';

const Mahasiswa = ({ index, onChange }) => {
  const [nilai1, setNilai1] = useState(1);
  const [nilai2, setNilai2] = useState(2);
  const [nilai3, setNilai3] = useState(6);
  const [nilai4, setNilai4] = useState(10);

  const handleNilai1Change = (event) => {
    const nilai = parseInt(event.target.value);
    setNilai1(nilai);
    onChange(index, 1, nilai);
  };

  const handleNilai2Change = (event) => {
    const nilai = parseInt(event.target.value);
    setNilai2(nilai);
    onChange(index, 2, nilai);
  };

  const handleNilai3Change = (event) => {
    const nilai = parseInt(event.target.value);
    setNilai3(nilai);
    onChange(index, 3, nilai);
  };

  const handleNilai4Change = (event) => {
    const nilai = parseInt(event.target.value);
    setNilai4(nilai);
    onChange(index, 4, nilai);
  };

  return (
    <tr className='tbody'>
      <td>Mahasiswa {index + 1}</td>
      <td>
        <select value={nilai1} onChange={handleNilai1Change}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
            <option key={nilai} value={nilai}>
              {nilai}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select value={nilai2} onChange={handleNilai2Change}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
            <option key={nilai} value={nilai}>
              {nilai}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select value={nilai3} onChange={handleNilai3Change}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
            <option key={nilai} value={nilai}>
              {nilai}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select value={nilai4} onChange={handleNilai4Change}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((nilai) => (
            <option key={nilai} value={nilai}>
              {nilai}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

const App = () => {
  const [nilaiMahasiswa, setNilaiMahasiswa] = useState({});

  const handleNilaiChange = (mahasiswaIndex, aspekIndex, nilai) => {
    setNilaiMahasiswa((prevNilaiMahasiswa) => ({
      ...prevNilaiMahasiswa,
      [`aspek_penilaian_${aspekIndex}`]: {
        ...(prevNilaiMahasiswa[`aspek_penilaian_${aspekIndex}`] || {}),
        [`mahasiswa_${mahasiswaIndex + 1}`]: nilai,
      },
    }));
  };

  const handleSimpanClick = () => {
    console.log(JSON.stringify(nilaiMahasiswa));
  };

  return (
    <div className='container table'>
      <h2>Aplikasi Penilaian Mahasiswa</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, i) => i).map((index) => (
            <Mahasiswa key={index} index={index} onChange={handleNilaiChange} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handleSimpanClick}>Simpan</button>
      </div>
    </div>
  );
};

export default App;
