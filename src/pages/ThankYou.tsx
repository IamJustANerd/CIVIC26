import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../components/Header'

export const ThankYou = () => {
  const navigate = useNavigate()
  const { type, id } = useParams<{ type: string; id: string }>()

  // In a real app, you might want to fetch the exam name or score here based on type and id
  
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-white to-primary/10 flex flex-col font-oxanium text-dark">
      <Header showProfile />

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white max-w-lg w-full rounded-3xl shadow-xl p-10 md:p-14 flex flex-col items-center text-center border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
          
          {/* Checkmark icon */}
          <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="font-slant text-4xl text-dark mb-4">UJIAN SELESAI</h1>
          
          <p className="text-neutral-500 mb-8 leading-relaxed">
            Terima kasih telah berpartisipasi. Jawaban kamu telah berhasil disimpan di dalam sistem kami. Semoga mendapatkan hasil yang terbaik!
          </p>

          <button
            onClick={() => navigate('/dashboard')}
            className="w-full font-bold text-light bg-primary py-3.5 rounded-xl border-2 border-primary hover:bg-primary/90 transition-all shadow-md cursor-pointer"
          >
            Kembali ke Dashboard
          </button>

        </div>
      </div>
    </div>
  )
}
