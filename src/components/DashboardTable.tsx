export interface TableItem {
  name: string;
  start: string;
  end: string;
  status: string;
}

interface DashboardTableProps {
  title: string;
  data: TableItem[];
}

export const DashboardTable = ({ title, data }: DashboardTableProps) => (
  <div className="bg-light border-2 border-primary rounded-3xl p-5 md:p-6 shadow-md flex flex-col min-h-0">
    <div className="flex justify-between items-end mb-4 shrink-0">
      <h3 className="text-3xl md:text-4xl font-slant text-dark">{title}</h3>
      <a href="#" className="font-oxanium text-sm font-bold text-dark hover:text-primary transition-colors">Selengkapnya</a>
    </div>
    
    <div className="overflow-y-auto overflow-x-auto flex-grow rounded-lg">
      <table className="w-full table-fixed text-left font-oxanium text-sm md:text-base border-collapse text-black">
        <thead className="sticky top-0 bg-light z-10">
          <tr className="text-dark">
            <th className="pb-3 px-2 md:px-3 font-normal w-1/4">{title}</th>
            <th className="pb-3 px-2 md:px-3 font-normal text-center w-1/4">Waktu Mulai</th>
            <th className="pb-3 px-2 md:px-3 font-normal text-center w-1/4">Waktu Berakhir</th>
            <th className="pb-3 px-2 md:px-3 font-normal text-right w-1/4">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className={`border-t border-primary/20 ${i % 2 === 0 ? 'bg-primary/5' : 'bg-transparent'}`}>
              <td className="py-3 px-2 md:px-3 truncate">{item.name}</td>
              <td className="py-3 px-2 md:px-3 text-center whitespace-pre-line leading-tight">{item.start}</td>
              <td className="py-3 px-2 md:px-3 text-center whitespace-pre-line leading-tight">{item.end}</td>
              <td className="py-3 px-2 md:px-3 text-right break-words">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
