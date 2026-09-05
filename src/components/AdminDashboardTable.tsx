import { useNavigate } from 'react-router-dom'
import type { TableItem, TestType } from './DashboardTable'

interface AdminDashboardTableProps {
  title: string;
  type: TestType;
  data: TableItem[];
  compact?: boolean;
  hideSeeAll?: boolean;
}

export const AdminDashboardTable = ({ title, type, data, compact = false, hideSeeAll = false }: AdminDashboardTableProps) => {
  const navigate = useNavigate()

  return (
    <div className="bg-light border-2 border-primary rounded-3xl p-5 md:p-6 shadow-md flex flex-col min-h-0 h-full">
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h3 className="text-3xl md:text-4xl font-slant text-dark">{title}</h3>
        {!hideSeeAll && (
          <button
            onClick={() => navigate(`/admin/${type}`)}
            className="font-oxanium text-xs md:text-sm font-bold text-dark border-2 border-primary rounded-xl px-4 py-1.5 md:px-5 md:py-2 hover:bg-primary hover:text-light transition-all shadow-sm cursor-pointer"
          >
            Lihat Semua
          </button>
        )}
      </div>

      <div className="overflow-y-auto overflow-x-auto flex-grow rounded-lg">
        <table className="w-full table-fixed text-left font-oxanium text-sm md:text-base border-collapse text-black">
          <thead className="sticky top-0 bg-light z-10">
            <tr className="text-dark">
              <th className="pb-3 px-2 md:px-3 font-normal w-[30%]">{title}</th>
              <th className="pb-3 px-2 md:px-3 font-normal text-center w-[25%]">Waktu Mulai</th>
              {!compact && <th className="pb-3 px-2 md:px-3 font-normal text-center w-[25%]">Waktu Berakhir</th>}
              <th className="pb-3 px-2 md:px-3 font-normal text-right w-[20%]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item.id} className={`border-t border-primary/20 ${i % 2 === 0 ? 'bg-primary/5' : 'bg-transparent'}`}>
                <td className="py-3 px-2 md:px-3 truncate">{item.name}</td>
                <td className="py-3 px-2 md:px-3 text-center whitespace-pre-line leading-tight">{item.start}</td>
                {!compact && <td className="py-3 px-2 md:px-3 text-center whitespace-pre-line leading-tight">{item.end}</td>}
                <td className="py-3 px-2 md:px-3 text-right">
                  <button
                    onClick={() => alert(`Edit ${type} with id: ${item.id} is not implemented yet.`)}
                    className="font-oxanium text-xs font-bold text-dark bg-white border-2 border-neutral-300 rounded-xl px-4 py-1.5 hover:border-primary hover:text-primary transition-all shadow-sm cursor-pointer"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
