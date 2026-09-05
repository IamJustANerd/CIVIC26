import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-primary-100 flex flex-col items-center justify-center relative p-6">
      <Header />

      {/* Login Card */}
      <div className="w-full max-w-lg bg-light border border-primary rounded-2xl p-8 md:p-12 shadow-xl">
        <h2 className="text-4xl md:text-[42px] font-slant text-dark mb-2">Selamat Datang!</h2>
        <p className="font-oxanium text-neutral-600 text-lg md:text-xl mb-10">Tolong masukkan informasi akunmu</p>

        <form onSubmit={handleLogin} className="flex flex-col">
          {/* Email Field */}
          <div className="mb-5">
            <label className={`block font-oxanium text-xs md:text-sm mb-1 ml-1 ${isError ? 'text-danger' : 'text-primary'}`}>
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (isError) setIsError(false)
              }}
              placeholder="dummy@example.com"
              className={`w-full font-oxanium text-dark px-4 py-3 rounded-lg border focus:outline-none transition-colors placeholder:text-neutral-400 ${isError
                ? 'border-danger focus:ring-1 focus:ring-danger/50 focus:border-danger'
                : 'border-primary focus:ring-1 focus:ring-primary/50 focus:border-primary'
                }`}
            />
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label className={`block font-oxanium text-xs md:text-sm mb-1 ml-1 ${isError ? 'text-danger' : 'text-primary'}`}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (isError) setIsError(false)
              }}
              placeholder="********"
              className={`w-full font-oxanium text-dark px-4 py-3 rounded-lg border focus:outline-none transition-colors placeholder:text-neutral-400 tracking-widest ${isError
                ? 'border-danger focus:ring-1 focus:ring-danger/50 focus:border-danger'
                : 'border-primary focus:ring-1 focus:ring-primary/50 focus:border-primary'
                }`}
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <a href="#" className="font-oxanium text-[10px] md:text-xs text-primary-300 hover:text-primary transition-colors underline-offset-4 hover:underline">
              Lupa Password
            </a>
          </div>

          {/* Error Message */}
          <div className="h-6 mb-2">
            {isError && (
              <p className="font-oxanium text-danger text-[10px] md:text-xs font-bold transition-opacity">
                E-mail atau password salah!
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-600 text-light font-oxanium text-lg py-3 rounded-xl transition-all duration-300 border border-primary-600 shadow-sm hover:shadow-md cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="font-oxanium text-[10px] text-dark font-bold">
            ©2026 CIVIC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
