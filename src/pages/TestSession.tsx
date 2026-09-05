import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyTryOuts, dummyTests } from '../data/examData'
import type { TestType } from '../components/DashboardTable'

// Generate 50 dummy questions
const testQuestions = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  text: `Ini adalah soal nomor ${i + 1}. Jawablah dengan memilih salah satu opsi yang tersedia dengan benar. Jika kamu merasa kesulitan, kamu bisa melewatinya dan menjawabnya nanti.`,
  options: ['Pilihan Jawaban A', 'Pilihan Jawaban B', 'Pilihan Jawaban C', 'Pilihan Jawaban D', 'Pilihan Jawaban E']
}))

export const TestSession = () => {
  const { type, id } = useParams<{ type: string; id: string }>()
  const navigate = useNavigate()
  const examType = type as TestType
  
  const allData = examType === 'tryout' ? dummyTryOuts : dummyTests
  const examData = allData.find(i => i.id === id)

  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState('02:00:00')
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false)

  const total = testQuestions.length
  const q = testQuestions[currentIdx]

  useEffect(() => {
    // Simple 2 hour countdown for demonstration
    let totalSeconds = 7200
    const timer = setInterval(() => {
      if (totalSeconds <= 0) return clearInterval(timer)
      totalSeconds--
      const h = Math.floor(totalSeconds / 3600)
      const m = Math.floor((totalSeconds % 3600) / 60)
      const s = totalSeconds % 60
      setTimeLeft(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSelect = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }))
  }

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === total

  const handleFinalSubmit = () => {
    setIsSubmitModalOpen(false)
    // Mark as finished logic would go here
    navigate(`/thank-you/${examType}/${id}`)
  }

  if (!examData) return <div className="p-8 text-center font-oxanium text-dark">Exam not found.</div>

  return (
    <div className="h-screen w-screen overflow-hidden bg-white flex flex-col font-oxanium text-dark relative">
      
      {/* Header Bar */}
      <div className="h-16 shrink-0 border-b border-primary/20 flex items-center justify-between px-6 bg-light shadow-sm z-10">
        <h1 className="font-slant text-2xl text-primary">{examData.name.toUpperCase()}</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-400 hidden sm:inline">Sisa Waktu</span>
          <span className={`font-slant text-2xl ${timeLeft.startsWith('00:0') ? 'text-danger animate-pulse' : 'text-dark'}`}>
            {timeLeft}
          </span>
        </div>
      </div>

      {/* Main Test Layout */}
      <div className="flex-grow flex min-h-0">
        
        {/* Left Side: Question Area (75%) */}
        <div className="flex-1 flex flex-col min-w-0 bg-primary/5">
          <div className="flex-grow p-6 md:p-12 overflow-y-auto">
            
            <div className="mb-8 flex justify-between items-start">
              <span className="inline-block bg-primary text-light font-bold text-sm px-3 py-1 rounded-lg mb-4">
                Soal No. {currentIdx + 1}
              </span>
              <button
                className="text-neutral-400 hover:text-danger text-sm font-bold transition-colors cursor-pointer"
                onClick={() => {
                  const newAnswers = { ...answers }
                  delete newAnswers[currentIdx]
                  setAnswers(newAnswers)
                }}
              >
                Hapus Jawaban
              </button>
            </div>

            <p className="text-lg md:text-xl leading-relaxed font-medium mb-8">
              {q.text}
            </p>

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
              className="px-6 py-2.5 rounded-xl font-bold text-dark border-2 border-neutral-200 hover:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Kembali
            </button>
            
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="lg:hidden px-6 py-2.5 rounded-xl font-bold text-light bg-danger border-2 border-danger hover:bg-danger/80 transition-all cursor-pointer"
            >
              Kumpulkan
            </button>

            <button
              onClick={() => setCurrentIdx(prev => Math.min(total - 1, prev + 1))}
              disabled={currentIdx === total - 1}
              className="px-6 py-2.5 rounded-xl font-bold text-light bg-primary border-2 border-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Selanjutnya
            </button>
          </div>
        </div>

        {/* Right Side: Navigation Grid (25%) */}
        <div className="w-80 shrink-0 border-l border-primary/20 bg-light flex flex-col hidden lg:flex">
          
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
              {testQuestions.map((_, i) => {
                const isAnswered = answers[i] !== undefined
                const isCurrent = currentIdx === i

                let style = "bg-white border-neutral-300 text-neutral-500 hover:bg-neutral-50"
                if (isAnswered) style = "bg-primary border-primary text-white"
                
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`aspect-square rounded-lg border flex items-center justify-center font-bold text-sm transition-all cursor-pointer ${style} ${isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                  >
                    {i + 1}
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
              onClick={() => setIsSubmitModalOpen(true)}
              className="w-full py-3 rounded-xl font-bold border-2 bg-danger border-danger text-light hover:bg-danger/80 transition-all cursor-pointer shadow-sm"
            >
              Kumpulkan Jawaban
            </button>
          </div>
        </div>
      </div>

      {/* Submit Modal Overlay */}
      {isSubmitModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center">
            
            {!allAnswered ? (
              <>
                <div className="w-16 h-16 bg-danger/10 text-danger rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
                  </svg>
                </div>
                <h3 className="font-slant text-2xl text-dark mb-2">Belum Selesai!</h3>
                <p className="text-neutral-500 mb-6 text-sm">
                  Masih ada <span className="font-bold text-danger">{total - answeredCount} soal</span> yang belum terisi. Kamu yakin ingin mengumpulkan jawaban?
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-slant text-2xl text-dark mb-2">Sudah Yakin?</h3>
                <p className="text-neutral-500 mb-6 text-sm">
                  Semua soal telah terjawab. Jawabanmu akan disimpan dan ujian ini tidak dapat diulang.
                </p>
              </>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="flex-1 py-3 rounded-xl font-bold text-dark border-2 border-neutral-200 hover:bg-neutral-100 transition-all cursor-pointer"
              >
                Kembali
              </button>
              <button
                onClick={handleFinalSubmit}
                className="flex-1 py-3 rounded-xl font-bold text-light bg-primary border-2 border-primary hover:bg-primary/90 transition-all cursor-pointer shadow-sm"
              >
                Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
