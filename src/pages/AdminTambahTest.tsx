import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminHeader } from '../components/AdminHeader'
import { dummyPaketSoal } from '../data/examData'

export const AdminTambahTest = () => {
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [type, setType] = useState<'TEST' | 'TRYOUT'>('TEST')
  const [description, setDescription] = useState('')
  
  // Date states
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')
  
  // Paket Soal Selection states
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPaketId, setSelectedPaketId] = useState<string | null>(null)

  const filteredPaketSoal = dummyPaketSoal.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      name, type, description, startDate, startTime, endDate, endTime, selectedPaketId
    })
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col font-oxanium pb-20">
      <AdminHeader />

      <div className="flex-grow flex flex-col items-center w-full max-w-5xl mx-auto pt-8">
        <div className="w-full flex items-center gap-4 mb-8 animate-in slide-in-from-left duration-500">
          <button 
            onClick={() => navigate('/admin/master')}
            className="p-2 bg-white rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer border-2 border-primary/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h1 className="font-slant text-4xl text-dark uppercase">TAMBAH TEST / TRY OUT</h1>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
            <h2 className="text-2xl font-bold text-dark mb-6 border-b-2 border-neutral-100 pb-4">Informasi Dasar</h2>
            
            <div className="space-y-6">
              
              {/* Type Toggle */}
              <div>
                <label className="block text-sm font-bold text-dark mb-2">Jenis Ujian</label>
                <div className="flex p-1 bg-neutral-100 rounded-xl border-2 border-neutral-200 w-full md:w-fit">
                  <button
                    type="button"
                    onClick={() => setType('TEST')}
                    className={`flex-1 md:flex-none md:w-32 py-2 px-4 rounded-lg font-bold text-sm transition-all ${type === 'TEST' ? 'bg-white text-primary shadow-sm border-2 border-primary/20' : 'text-neutral-500 hover:bg-neutral-200 border-2 border-transparent'}`}
                  >
                    Test
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('TRYOUT')}
                    className={`flex-1 md:flex-none md:w-32 py-2 px-4 rounded-lg font-bold text-sm transition-all ${type === 'TRYOUT' ? 'bg-white text-primary shadow-sm border-2 border-primary/20' : 'text-neutral-500 hover:bg-neutral-200 border-2 border-transparent'}`}
                  >
                    Try Out
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-dark mb-1">Nama {type === 'TEST' ? 'Test' : 'Try Out'}</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={`Misal: ${type === 'TEST' ? 'Test SKD CPNS 2026 Gelombang 1' : 'Try Out Akbar Nasional 2026'}`}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark"
                  required
                />
              </div>
              
              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-dark mb-1">Deskripsi</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Deskripsi singkat mengenai ujian ini..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark min-h-[100px] resize-y"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-2 border-primary/20 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-dark mb-6 border-b-2 border-neutral-100 pb-4">Waktu Pelaksanaan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Start Time */}
              <div className="space-y-4">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Waktu Mulai
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 mb-1">Tanggal</label>
                    <input 
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 mb-1">Jam</label>
                    <input 
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* End Time */}
              <div className="space-y-4">
                <h3 className="font-bold text-danger flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Waktu Selesai
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 mb-1">Tanggal</label>
                    <input 
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-500 mb-1">Jam</label>
                    <input 
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark"
                      required
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-2 border-primary/20 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-dark mb-6 border-b-2 border-neutral-100 pb-4">Pilih Paket Soal</h2>
            
            <div className="space-y-6">
              
              {/* Search Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-neutral-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama atau deskripsi paket soal..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all text-dark"
                />
              </div>

              {/* List of Paket Soal */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredPaketSoal.map((paket) => (
                  <div 
                    key={paket.id}
                    onClick={() => setSelectedPaketId(paket.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col ${selectedPaketId === paket.id ? 'border-primary bg-primary/5' : 'border-neutral-200 hover:border-primary/40 hover:bg-neutral-50'}`}
                  >
                    {selectedPaketId === paket.id && (
                      <div className="absolute top-4 right-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    <h4 className="font-bold text-dark mb-1 pr-8">{paket.name}</h4>
                    <p className="text-xs text-neutral-500 mb-3 flex-grow">{paket.description}</p>
                    <span className="text-xs font-bold text-primary bg-primary/10 py-1 px-3 rounded-lg w-fit">
                      {paket.questionCount} Soal
                    </span>
                  </div>
                ))}

                {filteredPaketSoal.length === 0 && (
                  <div className="col-span-full py-8 text-center text-neutral-500">
                    Tidak ditemukan paket soal yang cocok dengan pencarian.
                  </div>
                )}
              </div>
              
              {!selectedPaketId && (
                <p className="text-sm font-bold text-danger">Anda wajib memilih satu paket soal.</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-6 pt-4">
            <button 
              type="submit"
              disabled={!selectedPaketId}
              className={`w-full font-bold text-light py-4 rounded-xl border-2 transition-all shadow-xl cursor-pointer text-lg tracking-wide ${!selectedPaketId ? 'bg-neutral-300 border-neutral-300 cursor-not-allowed' : 'bg-primary border-primary hover:bg-primary/90'}`}
            >
              TAMBAHKAN {type === 'TEST' ? 'TEST' : 'TRY OUT'}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
