import { useNavigate, useLocation } from 'react-router-dom'
import { AdminHeader } from '../components/AdminHeader'
import { AdminDashboardTable } from '../components/AdminDashboardTable'
import { dummyTryOuts, dummyTests } from '../data/examData'
import type { TestType } from '../components/DashboardTable'

export const AdminSelection = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const examType: TestType = pathname.includes('tryout') ? 'tryout' : 'test'

  const isTryOut = examType === 'tryout'
  const data = isTryOut ? dummyTryOuts : dummyTests
  const title = isTryOut ? 'Try Out' : 'Test'

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col">
      <AdminHeader />

      <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col gap-4 min-h-0">

        {/* Page heading & back button */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => navigate('/admin-dashboard')}
            className="flex items-center gap-2 font-oxanium text-sm text-dark hover:text-primary transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Kembali
          </button>
          <h1 className="font-slant text-3xl md:text-4xl text-dark">Daftar {title} (Admin)</h1>
        </div>

        {/* Full table */}
        <div className="flex-grow min-h-0">
          <AdminDashboardTable title={title} type={examType} data={data} hideSeeAll={true} />
        </div>

      </div>

      {/* Footer */}
      <div className="shrink-0 mt-4 text-center w-full">
        <p className="font-oxanium text-[10px] md:text-xs text-dark font-bold">
          Ac2026 CIVIC. All rights reserved.
        </p>
      </div>
    </div>
  )
}
