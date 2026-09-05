import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Selection } from './pages/Selection'
import { PreTest } from './pages/PreTest'
import { PreTutorial } from './pages/PreTutorial'
import { Tutorial } from './pages/Tutorial'
import { TestSession } from './pages/TestSession'
import { ThankYou } from './pages/ThankYou'
import { AdminDashboard } from './pages/AdminDashboard'
import { AdminMaster } from './pages/AdminMaster'
import { AdminSelection } from './pages/AdminSelection'
import { AdminTambahPaketSoal } from './pages/AdminTambahPaketSoal'
import { AdminEditPaketSoal } from './pages/AdminEditPaketSoal'
import { AdminTambahTest } from './pages/AdminTambahTest'
import { AdminEditTest } from './pages/AdminEditTest'
import { AdminDetailTest } from './pages/AdminDetailTest'
import { AdminDetailTestParticipant } from './pages/AdminDetailTestParticipant'
import { AdminBuatAkun } from './pages/AdminBuatAkun'
import { AdminListAkun } from './pages/AdminListAkun'
import { AdminDetailAkun } from './pages/AdminDetailAkun'

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tryout" element={<Selection />} />
        <Route path="/test" element={<Selection />} />
        <Route path="/pre-tutorial/:type/:id" element={<PreTutorial />} />
        <Route path="/tutorial/:type/:id" element={<Tutorial />} />
        <Route path="/pre-test/:type/:id" element={<PreTest />} />
        <Route path="/test-session/:type/:id" element={<TestSession />} />
        <Route path="/thank-you/:type/:id" element={<ThankYou />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/master" element={<AdminMaster />} />
        <Route path="/admin/tambah-paket-soal" element={<AdminTambahPaketSoal />} />
        <Route path="/admin/edit-paket-soal" element={<AdminEditPaketSoal />} />
        <Route path="/admin/tambah-test" element={<AdminTambahTest />} />
        <Route path="/admin/edit-test" element={<AdminEditTest />} />
        <Route path="/admin/detail-test" element={<AdminDetailTest />} />
        <Route path="/admin/detail-test/:id" element={<AdminDetailTestParticipant />} />
        <Route path="/admin/buat-akun" element={<AdminBuatAkun />} />
        <Route path="/admin/list-akun" element={<AdminListAkun />} />
        <Route path="/admin/detail-akun/:id" element={<AdminDetailAkun />} />
        <Route path="/admin/tryout" element={<AdminSelection />} />
        <Route path="/admin/test" element={<AdminSelection />} />
      </Routes>
    </BrowserRouter>
  )
}
