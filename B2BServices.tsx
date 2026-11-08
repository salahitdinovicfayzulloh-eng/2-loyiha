import { ArrowRight, Check } from 'lucide-react';
import { B2B_SERVICES, type B2BServiceId } from '@/data/b2bServices';

interface B2BServicesProps {
  onRequestQuote: (service: B2BServiceId) => void;
}

export default function B2BServices({ onRequestQuote }: B2BServicesProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {B2B_SERVICES.map((service) => (
        <article
          key={service.id}
          className="card group flex flex-col p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl dark:hover:border-brand-500/60"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition duration-300 group-hover:bg-brand-500 group-hover:text-white dark:bg-navy-800 dark:text-brand-300">
            <service.icon className="h-7 w-7" />
          </span>
          <h3 className="mt-5 text-lg font-bold text-navy-900 dark:text-white">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">{service.description}</p>
          <ul className="mt-5 space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-navy-700 dark:text-navy-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onRequestQuote(service.id)}
            className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600 transition hover:gap-3 hover:text-brand-700 dark:text-brand-300"
          >
            Taklif so'rash
            <ArrowRight className="h-4 w-4" />
          </button>
        </article>
      ))}
    </div>
  );
}
