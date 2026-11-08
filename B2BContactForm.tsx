import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, AlertCircle } from 'lucide-react';
import { B2B_SERVICES, type B2BServiceId } from '@/data/b2bServices';
import { supabase } from '@/lib/supabase';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

interface FormValues {
  fullName: string;
  company: string;
  phone: string;
  service: B2BServiceId;
}

const PHONE_PATTERN = /^\+?[0-9\s()-]{7,20}$/;

interface B2BContactFormProps {
  selectedService: B2BServiceId;
  onServiceChange: (service: B2BServiceId) => void;
}

export default function B2BContactForm({ selectedService, onServiceChange }: B2BContactFormProps) {
  const [values, setValues] = useState<Omit<FormValues, 'service'>>({ fullName: '', company: '', phone: '' });
  const [status, setStatus] = useState<SubmitState>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const updateField = (field: keyof typeof values) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullName = values.fullName.trim();
    const company = values.company.trim();
    const phone = values.phone.trim();

    if (!fullName || !company || !phone) {
      setValidationError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }
    if (!PHONE_PATTERN.test(phone)) {
      setValidationError("Telefon raqamini to'g'ri kiriting, masalan: +998 90 123 45 67.");
      return;
    }

    setValidationError(null);
    setStatus('submitting');

    const { data, error } = await supabase.functions.invoke('b2b-lead', {
      body: { fullName, company, phone, service: selectedService },
    });

    if (error || data?.ok !== true) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues({ fullName: '', company: '', phone: '' });
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-600 dark:bg-success-700/20">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy-900 dark:text-white">So'rovingiz qabul qilindi</h3>
        <p className="mt-2 max-w-sm text-sm text-navy-600 dark:text-navy-300">
          Mutaxassislarimiz siz bilan tez orada bog'lanadi.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Yangi so'rov yuborish
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="b2b-name" className="mb-2 block text-sm font-semibold text-navy-800 dark:text-navy-100">
          Ism va familiya
        </label>
        <input id="b2b-name" className="field" autoComplete="name" value={values.fullName} onChange={updateField('fullName')} />
      </div>
      <div>
        <label htmlFor="b2b-company" className="mb-2 block text-sm font-semibold text-navy-800 dark:text-navy-100">
          Kompaniya nomi
        </label>
        <input id="b2b-company" className="field" autoComplete="organization" value={values.company} onChange={updateField('company')} />
      </div>
      <div>
        <label htmlFor="b2b-phone" className="mb-2 block text-sm font-semibold text-navy-800 dark:text-navy-100">
          Telefon raqami
        </label>
        <input id="b2b-phone" type="tel" className="field" autoComplete="tel" placeholder="+998 90 123 45 67" value={values.phone} onChange={updateField('phone')} />
      </div>
      <div>
        <label htmlFor="b2b-service" className="mb-2 block text-sm font-semibold text-navy-800 dark:text-navy-100">
          Qiziqqan xizmat
        </label>
        <select id="b2b-service" className="field" value={selectedService} onChange={(event) => onServiceChange(event.target.value as B2BServiceId)}>
          {B2B_SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {validationError || status === 'error' ? (
          <p role="alert" className="flex items-center gap-2 text-sm font-medium text-error-600 dark:text-error-100">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {validationError ?? "So'rovni yuborib bo'lmadi. Iltimos, keyinroq qayta urinib ko'ring."}
          </p>
        ) : (
          <p className="text-xs text-navy-500 dark:text-navy-400">Ma'lumotlaringiz faqat taklif tayyorlash uchun ishlatiladi.</p>
        )}
        <button type="submit" disabled={status === 'submitting'} className="btn-primary sm:w-auto">
          {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === 'submitting' ? 'Yuborilmoqda...' : 'Taklif so\'rash'}
        </button>
      </div>
    </form>
  );
}
