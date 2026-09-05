import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const tutorialQuestions = [
  {
    id: 1,
    text: "Selamat datang di Tutorial! Ini adalah contoh tampilan soal. Untuk menjawab, pilih salah satu opsi di bawah ini. Coba klik opsi A.",
    options: ['Ini opsi A (Klik aku)', 'Ini opsi B', 'Ini opsi C', 'Ini opsi D', 'Ini opsi E'],
    hasHint: false
  },
  {
    id: 2,
    text: "Terkadang, sebuah soal memiliki petunjuk visual atau gambar. Coba lihat tombol 'Hint' berwarna kuning di bagian bawah. Tombol itu sekarang aktif! Klik tombol 'Hint' untuk memunculkan gambar di sisi kiri.",
    options: ['Wah, keren!', 'Gambarnya muncul!', 'Sangat interaktif', 'Paham', 'Luar Biasa'],
    hasHint: true,
    hintImage: 'Gambar Ilustrasi/Grafik'
  },
  {
    id: 3,
    text: "Bagus! Di sisi kanan, kamu bisa melihat navigasi soal. Nomor soal yang sudah dijawab akan berwarna biru.",
    options: ['Pilihan A', 'Pilihan B', 'Pilihan C', 'Pilihan D', 'Pilihan E'],
    hasHint: false
  },
  {
    id: 4,
    text: "Kamu juga bisa melompat ke soal mana pun mengeklik nomor di panel kanan. Jika sudah paham, pilih salah satu opsi dan klik 'Selesaikan Tutorial'.",
    options: ['Saya Paham', 'Jelas', 'Sangat Jelas', 'Mengerti', 'Siap Ujian'],
    hasHint: false
  }
]

export const Tutorial = () => {
  const { type, id } = useParams<{ type: string; id: string }>()
  const navigate = useNavigate()
  
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showHint, setShowHint] = useState(false)

  const total = tutorialQuestions.length
  const q = tutorialQuestions[currentIdx]

  // Reset hint when changing questions
  useEffect(() => {
    setShowHint(false)
  }, [currentIdx])

  const handleSelect = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }))
  }

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === total

  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex flex-col font-oxanium text-dark">
      
      {/* Header Bar */}
      <div className="h-16 shrink-0 border-b border-primary/20 flex items-center justify-between px-6 bg-light shadow-sm z-10">
        <h1 className="font-slant text-2xl text-primary">TUTORIAL UJIAN</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-400">Sisa Waktu</span>
          <span className="font-slant text-2xl text-dark">--:--:--</span>
        </div>
      </div>

      {/* Main Test Layout */}
      <div className="flex-grow flex min-h-0 relative overflow-hidden">
        
        {/* Animated Hint Panel (Left) */}
        <div 
          className={`transition-all duration-500 ease-out border-primary/20 bg-neutral-50 flex flex-col shrink-0 overflow-hidden ${
            showHint ? 'w-full md:w-[400px] border-r opacity-100' : 'w-0 border-r-0 opacity-0'
          }`}
        >
          <div className="p-6 w-full h-full flex flex-col min-w-[300px]">
            <div className="flex justify-between items-center mb-4 shrink-0">
              <h3 className="font-bold text-dark text-lg">Petunjuk Gambar</h3>
              <button onClick={() => setShowHint(false)} className="text-neutral-400 hover:text-danger transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow rounded-2xl overflow-hidden border-2 border-neutral-200 bg-white shadow-inner flex items-center justify-center p-4">
              {/* Dummy Image Box */}
              <div className="w-full h-full bg-neutral-100 rounded-xl flex flex-col items-center justify-center text-neutral-400 border-2 border-dashed border-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="font-bold text-sm text-center px-4">{q.hintImage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Question Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-primary/5 transition-all duration-500">
          <div className="flex-grow p-6 md:p-12 overflow-y-auto">
            
            {/* Tutorial Banner */}
            <div className="mb-6 bg-warning/20 border-2 border-warning text-warning-800 p-4 rounded-xl flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 shrink-0 mt-0.5 text-warning">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <div>
                <h3 className="font-bold mb-1">Ini hanya Tutorial</h3>
                <p className="text-sm opacity-90">Jawabanmu di sini tidak akan disimpan atau dinilai. Ikuti petunjuk di setiap soal untuk berlatih menggunakan sistem CBT ini.</p>
              </div>
            </div>

            <div className="mb-8">
              <span className="inline-block bg-primary text-light font-bold text-sm px-3 py-1 rounded-lg mb-4">
                Soal No. {currentIdx + 1}
              </span>
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                {q.text}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {q.options.map((opt, i) => {
                const isSelected = answers[currentIdx] === i
                const letter = String.fromCharCode(65 + i)

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer text-left ${
                      isSelected 
                        ? 'border-primary bg-primary/10 shadow-sm' 
                        : 'border-neutral-200 bg-white hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 font-bold ${
                      isSelected 
                        ? 'bg-primary border-primary text-white' 
                        : 'border-neutral-300 text-neutral-500'
                    }`}>
                      {letter}
                    </div>
                    <span className="text-base">{opt}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Bottom Bar: Navigation */}
          <div className="shrink-0 bg-white border-t border-primary/20 p-4 md:px-8 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-6 py-2.5 rounded-xl font-bold text-dark border-2 border-neutral-200 hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer w-[140px]"
            >
              Kembali
            </button>
            
            {/* HINT BUTTON */}
            <button
              onClick={() => setShowHint(!showHint)}
              disabled={!q.hasHint}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold border-2 transition-all ${
                q.hasHint
                  ? showHint 
                    ? 'bg-warning/20 border-warning text-warning-800 hover:bg-warning/30 cursor-pointer'
                    : 'bg-warning text-warning-900 border-warning hover:bg-warning/90 cursor-pointer shadow-sm'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed opacity-60'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              {showHint ? 'Tutup Hint' : 'Buka Hint'}
            </button>

            <button
              onClick={() => setCurrentIdx(prev => Math.min(total - 1, prev + 1))}
              disabled={currentIdx === total - 1}
              className="px-6 py-2.5 rounded-xl font-bold text-light bg-primary border-2 border-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer w-[140px]"
            >
              Selanjutnya
            </button>
          </div>
        </div>

        {/* Right Side: Navigation Grid (25%) */}
        <div className="w-80 shrink-0 border-l border-primary/20 bg-light flex flex-col hidden lg:flex transition-all duration-500">
          
          <div className="p-6 shrink-0 border-b border-primary/10">
            <h3 className="font-bold text-lg mb-2">Navigasi Soal</h3>
            <div className="flex gap-4 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-primary rounded-sm" /> Dijawab
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 border border-neutral-300 rounded-sm" /> Belum
              </div>
            </div>
          </div>

          <div className="flex-grow p-6 overflow-y-auto">
            <div className="grid grid-cols-5 gap-2">
              {tutorialQuestions.map((qItem, i) => {
                const isAnswered = answers[i] !== undefined
                const isCurrent = currentIdx === i

                let style = "bg-white border-neutral-300 text-neutral-500 hover:bg-neutral-50"
                if (isAnswered) {
                  style = "bg-primary border-primary text-white"
                }
                
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`aspect-square rounded-lg border flex items-center justify-center font-bold text-sm transition-all cursor-pointer relative ${style} ${isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                  >
                    {i + 1}
                    {/* Tiny dot to indicate it has a hint */}
                    {qItem.hasHint && <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-warning rounded-full" />}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="p-6 shrink-0 border-t border-primary/20 bg-white">
            <div className="flex justify-between items-center text-sm mb-4">
              <span className="text-neutral-500">Terjawab</span>
              <span className="font-bold"><span className="text-primary">{answeredCount}</span> / {total}</span>
            </div>
            
            <button
              onClick={() => navigate(`/pre-test/${type}/${id}`)}
              className={`w-full py-3 rounded-xl font-bold border-2 transition-all cursor-pointer shadow-sm ${
                allAnswered 
                  ? 'bg-danger border-danger text-light hover:bg-danger/80' 
                  : 'bg-white border-danger text-danger hover:bg-danger/10'
              }`}
            >
              Selesaikan Tutorial
            </button>
            {!allAnswered && (
              <p className="text-[10px] text-center text-neutral-400 mt-2">
                Jawab semua soal tutorial untuk melanjutkan.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
