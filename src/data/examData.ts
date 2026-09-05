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

export interface PaketSoal {
  id: string;
  name: string;
  description: string;
  questionCount: number;
}

export const dummyPaketSoal: PaketSoal[] = [
  {
    id: 'paket-1',
    name: 'Paket Soal TWK',
    description: 'Tes Wawasan Kebangsaan untuk persiapan CPNS',
    questionCount: 30,
  },
  {
    id: 'paket-2',
    name: 'Paket Soal TIU',
    description: 'Tes Intelegensia Umum untuk mengasah logika',
    questionCount: 35,
  },
  {
    id: 'paket-3',
    name: 'Paket Soal TKP',
    description: 'Tes Karakteristik Pribadi',
    questionCount: 45,
  },
];

export interface Participant {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
  duration: string;
  leaveCount: number;
  finalScore: number | null; // null if not finished yet
}

export const dummyParticipants: Participant[] = [
  {
    id: 'p-1',
    name: 'Budi Santoso',
    startTime: '08:00:12',
    endTime: '10:45:30',
    duration: '2j 45m',
    leaveCount: 2,
    finalScore: 85,
  },
  {
    id: 'p-2',
    name: 'Siti Aminah',
    startTime: '08:05:00',
    endTime: '11:00:00',
    duration: '2j 55m',
    leaveCount: 0,
    finalScore: 92,
  },
  {
    id: 'p-3',
    name: 'Joko Widodo',
    startTime: '08:15:20',
    endTime: '10:20:10',
    duration: '2j 4m',
    leaveCount: 5,
    finalScore: 78,
  },
  {
    id: 'p-4',
    name: 'Ahmad Dahlan',
    startTime: '08:00:00',
    endTime: '-',
    duration: '-',
    leaveCount: 1,
    finalScore: null,
  }
];

export interface AccountHistory {
  id: string;
  testName: string;
  startTime: string;
  endTime: string;
  duration: string;
  leaveCount: number;
  finalScore: number | null;
}

export interface Account {
  id: string;
  username: string;
  name: string;
  history: AccountHistory[];
}

export const dummyAccounts: Account[] = [
  {
    id: 'acc-1',
    username: 'budi.santoso',
    name: 'Budi Santoso',
    history: [
      {
        id: 'hist-1',
        testName: 'Test SKD CPNS 2026 Gelombang 1',
        startTime: '05 September 2026 08:00:12',
        endTime: '05 September 2026 10:45:30',
        duration: '2j 45m',
        leaveCount: 2,
        finalScore: 85,
      },
      {
        id: 'hist-2',
        testName: 'Try Out Akbar Nasional 2026',
        startTime: '01 September 2026 09:00:00',
        endTime: '01 September 2026 11:30:00',
        duration: '2j 30m',
        leaveCount: 0,
        finalScore: 79,
      }
    ]
  },
  {
    id: 'acc-2',
    username: 'siti_aminah',
    name: 'Siti Aminah',
    history: [
      {
        id: 'hist-3',
        testName: 'Test SKD CPNS 2026 Gelombang 1',
        startTime: '05 September 2026 08:05:00',
        endTime: '05 September 2026 11:00:00',
        duration: '2j 55m',
        leaveCount: 0,
        finalScore: 92,
      }
    ]
  },
  {
    id: 'acc-3',
    username: 'ahmad.d',
    name: '', // Optional name left empty
    history: []
  }
];

