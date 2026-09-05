import { useNavigate, useParams } from 'react-router-dom'
import { AdminHeader } from '../components/AdminHeader'
import { dummyAccounts } from '../data/examData'

export const AdminDetailAkun = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  
  const account = dummyAccounts.find(acc => acc.id === id)

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col font-oxanium pb-20">
      <AdminHeader />

      <div className="flex-grow flex flex-col items-center w-full max-w-5xl mx-auto pt-8">
        <div className="w-full flex items-center gap-4 mb-8 animate-in slide-in-from-left duration-500">
          <button 
            onClick={() => navigate('/admin/list-akun')}
            className="p-2 bg-white rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer border-2 border-primary/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <div>
            <h1 className="font-slant text-3xl md:text-4xl text-dark uppercase">
              {account ? (account.name || 'TANPA NAMA') : 'DETAIL HISTORY AKUN'}
            </h1>
            {account && (
              <p className="text-neutral-500 font-bold text-sm mt-1">@{account.username}</p>
            )}
          </div>
        </div>

        <div className="bg-white w-full rounded-3xl shadow-xl p-6 md:p-10 border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
          
          <h2 className="text-2xl font-bold text-dark mb-6 border-b-2 border-neutral-100 pb-4">History Ujian</h2>

          <div className="overflow-x-hidden w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Nama Test / Try Out</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Waktu Mulai</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Waktu Selesai</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Durasi</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase whitespace-nowrap">Keluar Halaman</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase text-center">Skor Akhir</th>
                </tr>
              </thead>
              <tbody>
                {account && account.history.map((hist) => (
                  <tr key={hist.id} className="border-b-2 border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-dark">{hist.testName}</td>
                    <td className="py-4 px-4 font-bold text-primary text-sm max-w-[150px]">{hist.startTime}</td>
                    <td className="py-4 px-4 font-bold text-danger text-sm max-w-[150px]">{hist.endTime}</td>
                    <td className="py-4 px-4 font-bold text-neutral-600">{hist.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`font-bold px-3 py-1 rounded-full text-xs ${hist.leaveCount > 0 ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary'}`}>
                        {hist.leaveCount} kali
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {hist.finalScore !== null ? (
                        <span className="font-bold text-lg text-dark">{hist.finalScore}</span>
                      ) : (
                        <span className="font-bold text-xs text-warning bg-warning/10 px-3 py-1 rounded-full">Proses</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {account && account.history.length === 0 && (
            <div className="w-full py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neutral-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-dark mb-2">Belum ada History</h3>
              <p className="text-neutral-500">Akun ini belum pernah mengerjakan ujian apapun.</p>
            </div>
          )}

          {!account && (
            <div className="w-full py-12 text-center text-danger font-bold">
              Akun tidak ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
