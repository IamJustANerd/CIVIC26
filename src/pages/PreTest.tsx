import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { dummyTryOuts, dummyTests } from '../data/examData'
import type { TestType } from '../components/DashboardTable'

export const PreTest = () => {
  const { type, id } = useParams<{ type: string; id: string }>()
  const navigate = useNavigate()
  const examType = type as TestType
  const [timeLeft, setTimeLeft] = useState<string>('')

  const allData = examType === 'tryout' ? dummyTryOuts : dummyTests
  const item = allData.find(i => i.id === id)

  useEffect(() => {
    if (!item) return
    const tick = () => {
      const now = new Date()
      // const end = new Date()
      // Parse end time from item.end string (format: "DD Month YYYY\nHH:mm")
      const parts = item.end.split('\n')
      if (parts.length === 2) {
        const [datePart, timePart] = parts
        const endDate = new Date(`${datePart} ${timePart}`)
        const diff = endDate.getTime() - now.getTime()
        if (diff <= 0) {
          setTimeLeft('Waktu Habis')
          return
        }
        const h = Math.floor(diff / 3_600_000)
        const m = Math.floor((diff % 3_600_000) / 60_000)
        const s = Math.floor((diff % 60_000) / 1_000)
        setTimeLeft(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`)
      }
    }
    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [item])

  if (!item) {
    return (
      <div className="h-screen flex items-center justify-center font-oxanium text-dark">
        <p>Ujian tidak ditemukan.</p>
      </div>
    )
  }

  const title = examType === 'tryout' ? 'Try Out' : 'Test'

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col">
      <Header showProfile />

      <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col gap-4 min-h-0">

        {/* Back button & title */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => navigate(`/${examType}`)}
            className="flex items-center gap-2 font-oxanium text-sm text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Kembali
          </button>
          <h1 className="font-slant text-3xl md:text-4xl text-dark">{item.name}</h1>
        </div>

        {/* Main two-column card area */}
        <div className="flex-grow flex flex-col lg:flex-row gap-4 md:gap-6 min-h-0">

          {/* Left: Info */}
          <div className="bg-light border-2 border-primary rounded-3xl p-6 md:p-8 shadow-md flex flex-col w-full lg:w-1/2 overflow-y-auto justify-center">
            <h2 className="font-slant text-2xl md:text-3xl text-dark mb-6 text-center">Informasi Ujian</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-2xl p-4">
                <p className="font-oxanium text-xs text-neutral-400 mb-1">Jenis</p>
                <p className="font-oxanium font-bold text-dark text-lg">{title}</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-4">
                <p className="font-oxanium text-xs text-neutral-400 mb-1">Total Soal</p>
                <p className="font-oxanium font-bold text-dark text-lg">{item.totalQuestions ?? '-'} soal</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-4">
                <p className="font-oxanium text-xs text-neutral-400 mb-1">Durasi</p>
                <p className="font-oxanium font-bold text-dark text-lg">{item.duration ?? '-'} menit</p>
              </div>
              <div className="bg-primary/5 rounded-2xl p-4">
                <p className="font-oxanium text-xs text-neutral-400 mb-1">Waktu Mulai</p>
                <p className="font-oxanium font-bold text-dark text-sm">{item.start.replace('\n', ' ')}</p>
              </div>
            </div>
          </div>

          {/* Right: Countdown & CTA */}
          <div className="bg-light border-2 border-primary rounded-3xl p-6 md:p-8 shadow-md flex flex-col items-center justify-center w-full lg:w-1/2 gap-6">
            <div className="text-center">
              <p className="font-oxanium text-neutral-400 text-sm mb-2">Sisa Waktu Mulai Ujian</p>
              <p className="font-slant text-5xl md:text-6xl text-danger tracking-widest">
                {timeLeft || '--:--:--'}
              </p>
            </div>

            <div className="w-full border-t border-primary/20 pt-6 flex flex-col gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full font-oxanium text-base font-bold text-dark py-3 rounded-xl border-2 border-primary hover:bg-primary/10 transition-all cursor-pointer"
              >
                Kembali ke Dashboard
              </button>
              <button
                onClick={() => navigate(`/test-session/${examType}/${id}`)}
                className="w-full font-oxanium text-base font-bold text-light bg-danger py-3 rounded-xl border-2 border-danger hover:bg-danger/80 transition-all shadow-md cursor-pointer"
              >
                Mulai Ujian
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 mt-4 text-center w-full">
        <p className="font-oxanium text-[10px] md:text-xs text-dark font-bold">
          ©2026 CIVIC. All rights reserved.
        </p>
      </div>
    </div>
  )
}
