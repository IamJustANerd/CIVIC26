import { useNavigate } from 'react-router-dom'

export type TestStatus = 'Belum Dimulai' | 'Belum Dikerjakan' | 'Sedang Dikerjakan' | 'Sudah Dikerjakan'
export type TestType = 'tryout' | 'test'

export interface TableItem {
  id: string;
  name: string;
  start: string;
  end: string;
  status: TestStatus;
  totalQuestions?: number;
  duration?: number; // minutes
}

interface StatusBadgeProps {
  status: TestStatus;
  itemId: string;
  type: TestType;
}

export const StatusBadge = ({ status, itemId, type }: StatusBadgeProps) => {
  const navigate = useNavigate()

  if (status === 'Belum Dimulai') {
    return <span className="font-oxanium text-neutral-400 text-sm">Belum Dimulai</span>
  }
  if (status === 'Sudah Dikerjakan') {
    return (
      <span className="inline-flex items-center gap-1.5 font-oxanium text-success text-sm font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        </svg>
        Selesai
      </span>
    )
  }
  if (status === 'Sedang Dikerjakan') {
    return (
      <button
        onClick={() => navigate(`/pre-tutorial/${type}/${itemId}`)}
        className="font-oxanium text-xs font-bold text-light bg-warning border-2 border-warning rounded-xl px-3 py-1.5 hover:bg-warning/80 transition-all shadow-sm cursor-pointer"
      >
        Lanjutkan
      </button>
    )
  }
  // Belum Dikerjakan
  return (
    <button
      onClick={() => navigate(`/pre-tutorial/${type}/${itemId}`)}
      className="font-oxanium text-xs font-bold text-light bg-danger border-2 border-danger rounded-xl px-3 py-1.5 hover:bg-danger/80 transition-all shadow-sm cursor-pointer"
    >
      Kerjakan
    </button>
  )
}

interface DashboardTableProps {
  title: string;
  type: TestType;
  data: TableItem[];
  compact?: boolean;
}

export const DashboardTable = ({ title, type, data, compact = false }: DashboardTableProps) => {
  const navigate = useNavigate()

  return (
    <div className="bg-light border-2 border-primary rounded-3xl p-5 md:p-6 shadow-md flex flex-col min-h-0 h-full">
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="text-3xl md:text-4xl font-slant text-dark">{title}</h3>
        <button
          onClick={() => navigate(`/${type}`)}
          className="font-oxanium text-xs md:text-sm font-bold text-dark border-2 border-primary rounded-xl px-4 py-1.5 md:px-5 md:py-2 hover:bg-primary hover:text-light transition-all shadow-sm cursor-pointer"
        >
          Selengkapnya
        </button>
      </div>

      <div className="overflow-y-auto overflow-x-auto flex-grow rounded-lg">
        <table className="w-full table-fixed text-left font-oxanium text-sm md:text-base border-collapse text-black">
          <thead className="sticky top-0 bg-light z-10">
            <tr className="text-dark">
              <th className="pb-3 px-2 md:px-3 font-normal w-[30%]">{title}</th>
              <th className="pb-3 px-2 md:px-3 font-normal text-center w-[25%]">Waktu Mulai</th>
              {!compact && <th className="pb-3 px-2 md:px-3 font-normal text-center w-[25%]">Waktu Berakhir</th>}
              <th className="pb-3 px-2 md:px-3 font-normal text-right w-[20%]">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item.id} className={`border-t border-primary/20 ${i % 2 === 0 ? 'bg-primary/5' : 'bg-transparent'}`}>
                <td className="py-3 px-2 md:px-3 truncate">{item.name}</td>
                <td className="py-3 px-2 md:px-3 text-center whitespace-pre-line leading-tight">{item.start}</td>
                {!compact && <td className="py-3 px-2 md:px-3 text-center whitespace-pre-line leading-tight">{item.end}</td>}
                <td className="py-3 px-2 md:px-3 text-right">
                  <StatusBadge status={item.status} itemId={item.id} type={type} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
