export type CoverageTech = '3g' | '4g' | '5g';

export interface Region {
  id: string;
  name: string;
  x: number;
  y: number;
  coverage: Record<CoverageTech, number>;
}

export const COVERAGE_TECHS: { id: CoverageTech; label: string }[] = [
  { id: '3g', label: '3G' },
  { id: '4g', label: '4G LTE' },
  { id: '5g', label: '5G' },
];

export const REGIONS: Region[] = [
  { id: 'qr', name: "Qoraqalpog'iston", x: 12, y: 20, coverage: { '3g': 88, '4g': 71, '5g': 12 } },
  { id: 'xo', name: 'Xorazm', x: 20, y: 36, coverage: { '3g': 92, '4g': 78, '5g': 18 } },
  { id: 'bu', name: 'Buxoro', x: 30, y: 50, coverage: { '3g': 90, '4g': 74, '5g': 22 } },
  { id: 'na', name: 'Navoiy', x: 42, y: 40, coverage: { '3g': 85, '4g': 66, '5g': 9 } },
  { id: 'qa', name: 'Qashqadaryo', x: 42, y: 66, coverage: { '3g': 81, '4g': 59, '5g': 14 } },
  { id: 'su', name: 'Surxondaryo', x: 58, y: 84, coverage: { '3g': 76, '4g': 52, '5g': 6 } },
  { id: 'sa', name: 'Samarqand', x: 56, y: 56, coverage: { '3g': 96, '4g': 88, '5g': 41 } },
  { id: 'jz', name: 'Jizzax', x: 64, y: 44, coverage: { '3g': 90, '4g': 72, '5g': 16 } },
  { id: 'si', name: 'Sirdaryo', x: 68, y: 34, coverage: { '3g': 94, '4g': 84, '5g': 27 } },
  { id: 'tv', name: "Toshkent viloyati", x: 78, y: 26, coverage: { '3g': 98, '4g': 93, '5g': 58 } },
  { id: 'ts', name: 'Toshkent shahri', x: 72, y: 20, coverage: { '3g': 100, '4g': 99, '5g': 92 } },
  { id: 'fa', name: "Farg'ona", x: 84, y: 44, coverage: { '3g': 93, '4g': 80, '5g': 24 } },
  { id: 'nm', name: 'Namangan', x: 88, y: 32, coverage: { '3g': 95, '4g': 82, '5g': 30 } },
  { id: 'an', name: 'Andijon', x: 92, y: 44, coverage: { '3g': 97, '4g': 89, '5g': 46 } },
];
