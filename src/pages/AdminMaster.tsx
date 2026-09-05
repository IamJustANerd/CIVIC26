import { useNavigate } from 'react-router-dom'
import { AdminHeader } from '../components/AdminHeader'

export const AdminMaster = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-r from-white via-white via-[70%] to-danger/30 p-4 pt-20 md:p-6 md:pt-24 relative flex flex-col font-oxanium">
      <AdminHeader />

      <div className="flex-grow flex items-center justify-center p-6 w-full max-w-4xl mx-auto">
        <div className="bg-white w-full rounded-3xl shadow-xl p-6 md:p-14 flex flex-col items-center text-center border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
          
          <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.039.43.342a6.002 6.002 0 10-6.195-6.2M7.5 8.25h.008v.008H7.5V8.25z" />
            </svg>
          </div>

          <h1 className="font-slant text-4xl text-dark mb-4">MASTER ADMIN</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
            <button className="flex flex-col items-center justify-center gap-2 bg-neutral-50 border-2 border-neutral-200 hover:border-primary/50 hover:bg-primary/5 rounded-2xl p-6 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="font-bold text-dark text-sm">Tambah Soal</span>
            </button>
            
            <button className="flex flex-col items-center justify-center gap-2 bg-neutral-50 border-2 border-neutral-200 hover:border-primary/50 hover:bg-primary/5 rounded-2xl p-6 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <span className="font-bold text-dark text-sm text-center">Tambah Test /<br/>Try Out</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 bg-neutral-50 border-2 border-neutral-200 hover:border-primary/50 hover:bg-primary/5 rounded-2xl p-6 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
              <span className="font-bold text-dark text-sm">Buat Akun Peserta</span>
            </button>

            <button className="flex flex-col items-center justify-center gap-2 bg-neutral-50 border-2 border-neutral-200 hover:border-primary/50 hover:bg-primary/5 rounded-2xl p-6 transition-all cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span className="font-bold text-dark text-sm">Detail Akun Peserta</span>
            </button>
          </div>

          <button
            onClick={() => navigate('/admin-dashboard')}
            className="w-full font-bold text-light bg-primary py-3.5 rounded-xl border-2 border-primary hover:bg-primary/90 transition-all shadow-md cursor-pointer"
          >
            Kembali ke Dashboard Admin
          </button>

        </div>
      </div>
    </div>
  )
}
