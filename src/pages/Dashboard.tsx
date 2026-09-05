import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { DigitBox } from '../components/DigitBox'
import { DashboardTable } from '../components/DashboardTable'

const dummyTryOuts = [
  { name: 'Try Out X', start: '24 Agustus 2026\n08:00', end: '24 Agustus 2026\n12:00', status: 'Belum Dimulai' },
  { name: 'Try Out Z', start: '23 Agustus 2026\n16:00', end: '23 Agustus 2026\n20:00', status: 'Belum Dikerjakan' },
  { name: 'Try Out Y', start: '22 Agustus 2026\n12:00', end: '22 Agustus 2026\n13:00', status: 'Sudah Dikerjakan' },
]

const dummyTests = [
  { name: 'Test X', start: '24 Agustus 2026\n08:00', end: '24 Agustus 2026\n12:00', status: 'Belum Dimulai' },
  { name: 'Test Z', start: '23 Agustus 2026\n16:00', end: '23 Agustus 2026\n20:00', status: 'Belum Dikerjakan' },
  { name: 'Test Y', start: '22 Agustus 2026\n12:00', end: '22 Agustus 2026\n13:00', status: 'Sudah Dikerjakan' },
]

export const Dashboard = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return { hours, minutes, seconds }
  }

  const formatDate = (date: Date) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  const { hours, minutes, seconds } = formatTime(time)

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col">
      <Header showProfile />

      {/* Dashboard Content Grid (Refactored to Flex for exact 3:7 ratio) */}
      <div className="w-full max-w-7xl mx-auto flex-grow flex flex-col gap-4 md:gap-6 min-h-0">

        {/* Top Section (Greeting & Clock) - 30% height on desktop */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:flex-[3] min-h-0">
          {/* Greeting Card */}
          <div className="bg-light border-2 border-primary rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-center h-full w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-slant text-dark">Halo, Peserta!</h2>
            <p className="font-oxanium text-neutral-600 text-base md:text-lg leading-relaxed">
              Kamu masih punya 2 Try Out dan 2 Test yang belum dikerjakan. Jangan sampai kelewatan ya~
            </p>
          </div>

          {/* Live Clock Section */}
          <div className="flex flex-col justify-center pr-4 md:pr-8 py-2 md:py-0 w-full lg:w-1/2 min-h-0">
            <p className="font-oxanium text-dark text-xl md:text-2xl mb-2 lg:mb-4 shrink-0">{formatDate(time)}</p>
            <div className="flex items-center gap-1 md:gap-3 flex-1 min-h-0 max-h-16 md:max-h-20">
              <DigitBox digit={hours[0]} />
              <DigitBox digit={hours[1]} />
              <span className="text-primary font-bold text-3xl md:text-5xl mx-1 md:mx-2 flex items-center h-full pb-1">:</span>
              <DigitBox digit={minutes[0]} />
              <DigitBox digit={minutes[1]} />
              <span className="text-primary font-bold text-3xl md:text-5xl mx-1 md:mx-2 flex items-center h-full pb-1">:</span>
              <DigitBox digit={seconds[0]} />
              <DigitBox digit={seconds[1]} />
            </div>
          </div>
        </div>

        {/* Bottom Section (Tables) - 70% height on desktop */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:flex-[7] min-h-0">
          <div className="w-full lg:w-1/2 flex flex-col min-h-0">
            <DashboardTable title="Try Out" data={dummyTryOuts} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col min-h-0">
            <DashboardTable title="Test" data={dummyTests} />
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
