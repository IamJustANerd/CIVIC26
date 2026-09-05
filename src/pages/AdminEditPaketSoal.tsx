import { useNavigate } from 'react-router-dom'
import { AdminHeader } from '../components/AdminHeader'
import { dummyPaketSoal } from '../data/examData'

export const AdminEditPaketSoal = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col font-oxanium">
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
          <h1 className="font-slant text-4xl text-dark">EDIT PAKET SOAL</h1>
        </div>

        <div className="bg-white w-full rounded-3xl shadow-xl p-6 md:p-10 border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyPaketSoal.map((paket) => (
              <div key={paket.id} className="bg-neutral-50 rounded-2xl p-6 border-2 border-neutral-200 hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col h-full group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                
                <h3 className="font-bold text-xl text-dark mb-2">{paket.name}</h3>
                <p className="text-neutral-500 text-sm mb-4 flex-grow">{paket.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-neutral-200">
                  <span className="text-xs font-bold text-neutral-400 bg-neutral-200 py-1 px-3 rounded-full">
                    {paket.questionCount} Soal
                  </span>
                  
                  <button className="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 cursor-pointer">
                    Edit
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {dummyPaketSoal.length === 0 && (
            <div className="w-full py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-neutral-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-dark mb-2">Belum ada Paket Soal</h3>
              <p className="text-neutral-500">Silakan tambahkan paket soal baru melalui menu Tambah Paket Soal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
