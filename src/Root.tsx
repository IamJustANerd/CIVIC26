import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { RouteGuard } from './components/RouteGuard'
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
        
        {/* Protected User Routes */}
        <Route path="/dashboard" element={<RouteGuard><Dashboard /></RouteGuard>} />
        <Route path="/tryout" element={<RouteGuard><Selection /></RouteGuard>} />
        <Route path="/test" element={<RouteGuard><Selection /></RouteGuard>} />
        <Route path="/pre-tutorial/:type/:id" element={<RouteGuard><PreTutorial /></RouteGuard>} />
        <Route path="/tutorial/:type/:id" element={<RouteGuard><Tutorial /></RouteGuard>} />
        <Route path="/pre-test/:type/:id" element={<RouteGuard><PreTest /></RouteGuard>} />
        <Route path="/test-session/:type/:id" element={<RouteGuard><TestSession /></RouteGuard>} />
        <Route path="/thank-you/:type/:id" element={<RouteGuard><ThankYou /></RouteGuard>} />
        
        {/* Protected Admin Routes */}
        <Route path="/admin-dashboard" element={<RouteGuard requireAdmin><AdminDashboard /></RouteGuard>} />
        <Route path="/admin/master" element={<RouteGuard requireAdmin><AdminMaster /></RouteGuard>} />
        <Route path="/admin/tambah-paket-soal" element={<RouteGuard requireAdmin><AdminTambahPaketSoal /></RouteGuard>} />
        <Route path="/admin/edit-paket-soal" element={<RouteGuard requireAdmin><AdminEditPaketSoal /></RouteGuard>} />
        <Route path="/admin/tambah-test" element={<RouteGuard requireAdmin><AdminTambahTest /></RouteGuard>} />
        <Route path="/admin/edit-test" element={<RouteGuard requireAdmin><AdminEditTest /></RouteGuard>} />
        <Route path="/admin/detail-test" element={<RouteGuard requireAdmin><AdminDetailTest /></RouteGuard>} />
        <Route path="/admin/detail-test/:id" element={<RouteGuard requireAdmin><AdminDetailTestParticipant /></RouteGuard>} />
        <Route path="/admin/buat-akun" element={<RouteGuard requireAdmin><AdminBuatAkun /></RouteGuard>} />
        <Route path="/admin/list-akun" element={<RouteGuard requireAdmin><AdminListAkun /></RouteGuard>} />
        <Route path="/admin/detail-akun/:id" element={<RouteGuard requireAdmin><AdminDetailAkun /></RouteGuard>} />
        <Route path="/admin/tryout" element={<RouteGuard requireAdmin><AdminSelection /></RouteGuard>} />
        <Route path="/admin/test" element={<RouteGuard requireAdmin><AdminSelection /></RouteGuard>} />
      </Routes>
    </BrowserRouter>
  )
}
