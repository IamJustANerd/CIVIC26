import type { TableItem } from '../components/DashboardTable'

export const dummyTryOuts: TableItem[] = [
  {
    id: 'to-1',
    name: 'Try Out 1',
    start: '24 Agustus 2026\n08:00',
    end: '24 Agustus 2026\n12:00',
    status: 'Belum Dikerjakan',
    totalQuestions: 100,
    duration: 240,
  },
  {
    id: 'to-2',
    name: 'Try Out 2',
    start: '25 Agustus 2026\n08:00',
    end: '25 Agustus 2026\n12:00',
    status: 'Sedang Dikerjakan',
    totalQuestions: 100,
    duration: 240,
  },
  {
    id: 'to-3',
    name: 'Try Out 3',
    start: '22 Agustus 2026\n08:00',
    end: '22 Agustus 2026\n12:00',
    status: 'Sudah Dikerjakan',
    totalQuestions: 100,
    duration: 240,
  },
]

export const dummyTests: TableItem[] = [
  {
    id: 'test-1',
    name: 'Test Sesi 1',
    start: '5 September 2026\n08:00',
    end: '5 September 2026\n11:00',
    status: 'Belum Dimulai',
    totalQuestions: 150,
    duration: 180,
  },
  {
    id: 'test-2',
    name: 'Test Sesi 2',
    start: '6 September 2026\n08:00',
    end: '6 September 2026\n11:00',
    status: 'Belum Dikerjakan',
    totalQuestions: 150,
    duration: 180,
  },
  {
    id: 'test-3',
    name: 'Test Sesi 3',
    start: '4 September 2026\n08:00',
    end: '4 September 2026\n11:00',
    status: 'Sudah Dikerjakan',
    totalQuestions: 150,
    duration: 180,
  },
]
