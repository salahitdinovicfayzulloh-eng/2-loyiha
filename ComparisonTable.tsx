import { formatUZS } from '@/lib/format';
import type { TariffBreakdown } from '@/data/pricing';

interface ComparisonTableProps {
  breakdown: TariffBreakdown;
}

export default function ComparisonTable({ breakdown }: ComparisonTableProps) {
  const savingsPercent =
    breakdown.standardTotal > 0 ? Math.round((breakdown.savings / breakdown.standardTotal) * 100) : 0;

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-navy-100 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-navy-800">
        <div>
          <h3 className="text-xl font-bold text-navy-900 dark:text-white">Solishtirish: kombo va alohida tarif</h3>
          <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">
            Internet va IP-telefoniya paketda olinganda, IP-telefoniya to'lovi alohida to'lanmaydi.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-xl bg-success-50 px-4 py-2 text-success-700 dark:bg-success-700/20 dark:text-success-100">
          <span className="text-sm font-semibold">Tejov: {formatUZS(breakdown.savings)}</span>
          <span className="rounded-md bg-success-600 px-2 py-0.5 text-xs font-bold text-white">-{savingsPercent}%</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead className="bg-navy-50 text-navy-600 dark:bg-navy-800 dark:text-navy-200">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">Xizmat</th>
              <th scope="col" className="px-6 py-4 font-semibold text-brand-700 dark:text-brand-300">GSM + FTTH kombo</th>
              <th scope="col" className="px-6 py-4 font-semibold">Alohida tarif</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100 dark:divide-navy-800">
            {breakdown.rows.map((row) => (
              <tr key={row.key} className="transition hover:bg-brand-50/60 dark:hover:bg-navy-800/60">
                <td className="px-6 py-4 font-medium text-navy-800 dark:text-navy-100">{row.label}</td>
                <td className="px-6 py-4 font-semibold text-brand-700 dark:text-brand-300">
                  {row.combo > 0 ? formatUZS(row.combo) : 'Paketga kiritilgan'}
                </td>
                <td className="px-6 py-4 text-navy-600 dark:text-navy-300">{formatUZS(row.standard)}</td>
              </tr>
            ))}
            <tr className="bg-navy-50/70 font-bold text-navy-900 dark:bg-navy-800/70 dark:text-white">
              <td className="px-6 py-4">Jami</td>
              <td className="px-6 py-4 text-brand-700 dark:text-brand-300">{formatUZS(breakdown.comboTotal)}</td>
              <td className="px-6 py-4">{formatUZS(breakdown.standardTotal)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
