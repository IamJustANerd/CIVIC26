import { useNavigate } from 'react-router-dom'
import Logo from '../assets/fonts/Logo.svg'
import { useAuth } from '../context/AuthContext'

export const AdminHeader = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3 bg-primary border-2 border-primary-700 rounded-xl px-4 py-2 shadow-md">
        <img src={Logo} alt="CIVIC EXPO Logo" className="w-8 h-8 md:w-10 md:h-10" />
        <h1 className="text-danger font-slant text-2xl md:text-3xl tracking-wide">CESC 2026</h1>
      </div>

      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-4 md:gap-6">
        <button
          onClick={() => navigate('/admin/master')}
          className="flex items-center gap-2 bg-primary text-light font-oxanium font-bold px-4 py-2 rounded-xl shadow-md border-2 border-primary hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.039.43.342a6.002 6.002 0 10-6.195-6.2M7.5 8.25h.008v.008H7.5V8.25z" />
          </svg>
          <span className="hidden sm:inline">Admin Tools</span>
        </button>

        {user && (
          <div className="flex items-center gap-4 bg-white/80 backdrop-blur px-4 py-2 rounded-xl shadow-sm border border-neutral-200">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="font-oxanium font-bold text-dark text-sm">{user.name || user.username}</span>
              <span className="font-oxanium text-xs text-primary font-bold">Admin</span>
            </div>
            <div className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-danger/10 text-danger flex items-center justify-center font-bold shadow-sm">
              {(user.name || user.username).charAt(0).toUpperCase()}
            </div>
            
            <button 
              onClick={handleLogout}
              className="text-danger hover:text-danger/80 transition-colors cursor-pointer ml-2"
              title="Logout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  )
}
