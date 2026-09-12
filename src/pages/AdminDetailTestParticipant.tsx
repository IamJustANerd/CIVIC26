import { useNavigate, useParams } from 'react-router-dom'
import { AdminHeader } from '../components/AdminHeader'
import { dummyParticipants, dummyTests } from '../data/examData'

export const AdminDetailTestParticipant = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  
  const testInfo = dummyTests.find(t => t.id === id)

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col font-oxanium pb-20">
      <AdminHeader />

      <div className="flex-grow flex flex-col items-center w-full max-w-5xl mx-auto pt-8">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 animate-in slide-in-from-left duration-500">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/admin/detail-test')}
              className="p-2 bg-white rounded-full shadow-md text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer border-2 border-primary/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <div>
              <h1 className="font-slant text-3xl md:text-4xl text-dark uppercase">{testInfo ? testInfo.name : 'DETAIL PESERTA UJIAN'}</h1>
              {testInfo && (
                <p className="text-neutral-500 font-bold text-sm mt-1">Data Peserta</p>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => alert('Fitur Export Excel akan segera hadir!')}
            className="flex items-center gap-2 bg-[#21A366] text-white font-bold px-5 py-2.5 rounded-xl shadow-md border-2 border-[#107C41] hover:bg-[#107C41] transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            Export to Excel
          </button>
        </div>

        <div className="bg-white w-full rounded-3xl shadow-xl p-6 md:p-10 border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
          
          <div className="overflow-x-hidden w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Nama Peserta</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Waktu Mulai</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Waktu Selesai</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase">Durasi</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase whitespace-nowrap">Keluar Halaman</th>
                  <th className="py-4 px-4 font-bold text-neutral-500 text-sm uppercase text-center">Skor Akhir</th>
                </tr>
              </thead>
              <tbody>
                {dummyParticipants.map((participant) => (
                  <tr key={participant.id} className="border-b-2 border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-dark">{participant.name}</td>
                    <td className="py-4 px-4 font-bold text-primary">{participant.startTime}</td>
                    <td className="py-4 px-4 font-bold text-danger">{participant.endTime}</td>
                    <td className="py-4 px-4 font-bold text-neutral-600">{participant.duration}</td>
                    <td className="py-4 px-4">
                      <span className={`font-bold px-3 py-1 rounded-full text-xs ${participant.leaveCount > 0 ? 'bg-danger/10 text-danger' : 'bg-primary/10 text-primary'}`}>
                        {participant.leaveCount} kali
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      {participant.finalScore !== null ? (
                        <span className="font-bold text-lg text-dark">{participant.finalScore}</span>
                      ) : (
                        <span className="font-bold text-xs text-warning bg-warning/10 px-3 py-1 rounded-full">Proses</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {dummyParticipants.length === 0 && (
            <div className="w-full py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neutral-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-dark mb-2">Belum ada Peserta</h3>
              <p className="text-neutral-500">Belum ada peserta yang mengambil ujian ini.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
