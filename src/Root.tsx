import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Selection } from './pages/Selection'
import { PreTest } from './pages/PreTest'

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tryout" element={<Selection />} />
        <Route path="/test" element={<Selection />} />
        <Route path="/pre-test/:type/:id" element={<PreTest />} />
      </Routes>
    </BrowserRouter>
  )
}
