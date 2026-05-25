import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 flex flex-col items-center justify-center p-6 transition-colors duration-500">
      <div className="max-w-3xl w-full bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 dark:border-slate-700/50 p-10 text-center transform transition-all hover:scale-[1.01] duration-300">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-8 shadow-inner">
          <svg className="w-10 h-10 text-primary dark:text-primary-dark animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 mb-6 drop-shadow-sm font-heading">
          Welcome to CIVIC26
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the next generation of web development with React, TypeScript, and Tailwind CSS v4. Fast, beautiful, and completely dynamic.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-dark hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative flex items-center gap-2">
              <span>Interactive Count</span>
              <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">{count}</span>
            </span>
          </button>
          
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary dark:hover:text-primary-dark shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            Explore Docs
          </a>
        </div>
      </div>
      
      <p className="mt-12 text-sm text-slate-500 dark:text-slate-400 font-medium tracking-wide">
        Designed with precision • Built for the modern web
      </p>
    </div>
  )
}

export default App
