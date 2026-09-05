import Logo from '../assets/fonts/Logo.svg'

interface HeaderProps {
  showProfile?: boolean;
}

export const Header = ({ showProfile = false }: HeaderProps) => (
  <>
    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-3">
      <img src={Logo} alt="CIVIC EXPO Logo" className="w-8 h-8 md:w-10 md:h-10" />
      <h1 className="text-danger font-slant text-2xl md:text-3xl tracking-wide">CIVIC26</h1>
    </div>
    
    {showProfile && (
      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-4 md:gap-6">
        <div className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-neutral-600 shadow-sm cursor-pointer hover:bg-neutral-500 transition-colors"></div>
        <button className="text-dark hover:text-primary transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>
      </div>
    )}
  </>
)
