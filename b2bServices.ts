import type { LucideIcon } from 'lucide-react';
import { Cable, Cloud, PhoneCall, ShieldCheck } from 'lucide-react';

export type B2BServiceId = 'cloud' | 'fiber' | 'pbx' | 'security';

export interface B2BService {
  id: B2BServiceId;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export const B2B_SERVICES: B2BService[] = [
  {
    id: 'cloud',
    title: 'Ma\'lumotlar markazi: bulut hosting',
    description: "Biznes ilovalaringiz uchun xavfsiz va kengayuvchan bulut infratuzilmasi.",
    features: ["Virtual serverlar 24/7", "Zaxira nusxalash", "99.95% kafolatlangan ish vaqti"],
    icon: Cloud,
  },
  {
    id: 'fiber',
    title: 'Ajratilgan optik tolali liniyalar',
    description: "Ofis va filiallaringizni simmetrik, past kechikishli optik tolali kanal bilan ulang.",
    features: ["Simmetrik tezlik", "Shaxsiy IP manzillar", "Ulanish monitoringi"],
    icon: Cable,
  },
  {
    id: 'pbx',
    title: 'Virtual telefon markazi (PBX)',
    description: "Bulutdagi telefon markazi: qo'ng'iroqlarni yo'naltirish, ovozli menyu va hisobotlar.",
    features: ["Ichki raqamlar", "Ovozli menyu (IVR)", "Qo'ng'iroq statistikasi"],
    icon: PhoneCall,
  },
  {
    id: 'security',
    title: 'Kiberxavfsizlik',
    description: "Tarmoq va ma'lumotlaringizni himoya qilish uchun ko'p qatlamli xavfsizlik yechimlari.",
    features: ["Firewall va DDoS himoya", "Zaifliklar tahlili", "Xodimlar uchun o'quv kurslari"],
    icon: ShieldCheck,
  },
];
