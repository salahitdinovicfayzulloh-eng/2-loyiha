import { useState } from 'react';
import { COVERAGE_TECHS, REGIONS, type CoverageTech, type Region } from '@/data/coverage';

function coverageTone(value: number) {
  if (value >= 85) return { dot: 'bg-brand-500', label: 'Yuqori' };
  if (value >= 60) return { dot: 'bg-brand-300', label: "O'rtacha" };
  if (value >= 30) return { dot: 'bg-warning-500', label: 'Past' };
  return { dot: 'bg-error-500', label: "Juda past" };
}

export default function CoverageMap() {
  const [tech, setTech] = useState<CoverageTech>('4g');
  const [selectedId, setSelectedId] = useState<string>('ts');
  const selected: Region | undefined = REGIONS.find((region) => region.id === selectedId);

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="card p-6 sm:p-8 lg:col-span-3">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Aloqa turi" className="inline-flex rounded-xl bg-navy-50 p-1 dark:bg-navy-800">
            {COVERAGE_TECHS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={tech === item.id}
                onClick={() => setTech(item.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition duration-200 ${
                  tech === item.id
                    ? 'bg-white text-brand-700 shadow-sm dark:bg-brand-500 dark:text-white'
                    : 'text-navy-600 hover:text-navy-900 dark:text-navy-200 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <ul className="flex flex-wrap gap-3 text-xs text-navy-600 dark:text-navy-300">
            {[
              { dot: 'bg-brand-500', label: '85%+' },
              { dot: 'bg-brand-300', label: '60-84%' },
              { dot: 'bg-warning-500', label: '30-59%' },
              { dot: 'bg-error-500', label: '<30%' },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-brand-50 to-navy-50 dark:border-navy-700 dark:from-navy-900 dark:to-navy-800">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,43,73,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {REGIONS.map((region) => {
            const value = region.coverage[tech];
            const tone = coverageTone(value);
            const isSelected = region.id === selectedId;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedId(region.id)}
                aria-label={`${region.name}: ${value}%`}
                style={{ left: `${region.x}%`, top: `${region.y}%` }}
                className="group absolute -translate-x-1/2 -translate-y-1/2 p-1.5 focus:outline-none"
              >
                <span
                  className={`block h-4 w-4 rounded-full border-2 border-white shadow-md transition duration-300 group-hover:scale-125 group-focus-visible:ring-4 group-focus-visible:ring-brand-500/40 ${tone.dot} ${
                    isSelected ? 'scale-125 ring-4 ring-navy-900/20' : ''
                  }`}
                />
                <span
                  className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy-900/85 px-2 py-0.5 text-[10px] font-medium text-white transition ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {region.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <aside className="card flex flex-col p-6 sm:p-8 lg:col-span-2">
        {selected ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
              Tanlangan hudud
            </p>
            <h3 className="mt-2 text-2xl font-bold text-navy-900 dark:text-white">{selected.name}</h3>
            <div className="mt-6 space-y-5">
              {COVERAGE_TECHS.map((item) => {
                const value = selected.coverage[item.id];
                const tone = coverageTone(value);
                return (
                  <div key={item.id}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-navy-800 dark:text-navy-100">{item.label}</span>
                      <span className="text-navy-600 dark:text-navy-300">
                        {value}% <span className="text-xs">({tone.label})</span>
                      </span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${tone.dot}`}
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
        <p className="mt-auto pt-8 text-xs leading-relaxed text-navy-500 dark:text-navy-400">
          Xaritadagi ko'rsatkichlar namoyish uchun taxminiy qiymatlar hisoblanadi.
        </p>
      </aside>
    </div>
  );
}
