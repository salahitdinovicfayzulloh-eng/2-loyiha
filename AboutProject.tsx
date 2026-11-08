import { AlertTriangle, UserRound } from 'lucide-react';

export default function AboutProject() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl border-2 border-warning-500/60 bg-warning-50 p-6 shadow-card sm:p-10 dark:border-warning-500/50 dark:bg-warning-700/10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-warning-500 text-white shadow-md">
            <AlertTriangle className="h-7 w-7" />
          </span>
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-navy-900 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white dark:bg-brand-500">
              PORTFOLIO / TEST PROJECT
            </span>
            <p className="text-base font-bold leading-relaxed text-warning-700 sm:text-lg dark:text-warning-100">
              DIQQAT: Ushbu veb-sayt rasmiy Uztelecom (O'zbektelekom AK) sayti emas! Sayt shunchaki web-dasturlash
              hamda UI/UX dizayn bo'yicha tajriba va amaliyot o'tash uchun yaratilgan shaxsiy portfolio namunasi
              (konsept proyekt) hisoblanadi. Undagi narxlar va xizmatlar ko'rgazmali xarakterga ega.
            </p>
          </div>
        </div>
      </div>

      <div className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-navy-700 text-white">
            <UserRound className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">Muallif</p>
            <p className="text-base font-semibold text-navy-900 sm:text-lg dark:text-white">
              Ushbu loyiha g'oyasi muallifi va yaratuvchisi: G'ulomjonov Fayzulloh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
