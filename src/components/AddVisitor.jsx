"use client"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const AddVisitor = () => {
  const [nama, setNama] = useState("")
  const [kelas, setKelas] = useState("")
  const [keperluan, setKeperluan] = useState("Belajar");
  const router = useRouter()
  const handleAdd = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/visitor", { nama, kelas, keperluan })
      console.log(res.data)
      toast.success('Pengunjung berhasil ditambahkan');
      router.push("/")
    }
    catch (err) {
      console.log(err)
      toast.error('Gagal menambahkan pengunjung');
    }
  }
  return (
    <div className='max-w-7xl p-8 mx-auto flex flex-col items-center'>
      <h1 className='text-2xl fon-bold text-center my-4'>Tambah Pengunjung</h1>
      <input value={nama} onChange={(e) => setNama(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2' type="text" placeholder='Masukkan nama pengunjung' />
      <input value={kelas} onChange={(e) => setKelas(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2' rows={10} placeholder='Masukan asal kelas pengunjung' />
      <select value={keperluan} onChange={(e) => setKeperluan(e.target.value)} className='w-full focus:outline-none border border-gray-300 p-2 my-2'>
        <option value="Belajar">Belajar</option>
        <option value="Meminjam Buku">Meminjam Buku</option>
      </select>

      <button onClick={handleAdd} className='text-white font-bold bg-green-500 px-8 py-2 text-lg my-2 w-full md:w-fit'>Tambah</button>
      <Toaster />
    </div>
  )
}
