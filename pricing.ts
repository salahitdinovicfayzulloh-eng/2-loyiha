export const INTERNET_TIERS = [
  { mbps: 150, price: 175_000 },
  { mbps: 250, price: 215_000 },
  { mbps: 350, price: 350_000 },
  { mbps: 500, price: 500_000 },
  { mbps: 1000, price: 1_000_000 },
] as const;

export const MOBILE_PLANS = [
  { name: 'Optimal', gb: 15, minutes: '700 daqiqa', price: 55_000 },
  { name: 'Balance', gb: 20, minutes: '800 daqiqa', price: 65_000 },
  { name: 'Ideal Plus', gb: 150, minutes: 'Cheksiz', price: 85_000 },
  { name: 'Mobile Lux', gb: 200, minutes: 'Cheksiz', price: 101_000 },
] as const;

export const IP_TELEPHONY_FEE = 25_000;

export interface TariffSelection {
  internetIndex: number;
  mobileIndex: number;
}

export interface BreakdownRow {
  key: 'internet' | 'mobile' | 'telephony';
  label: string;
  combo: number;
  standard: number;
}

export interface TariffBreakdown {
  rows: BreakdownRow[];
  comboTotal: number;
  standardTotal: number;
  savings: number;
}

export function buildTariffBreakdown(selection: TariffSelection): TariffBreakdown {
  const internet = INTERNET_TIERS[selection.internetIndex];
  const mobile = MOBILE_PLANS[selection.mobileIndex];

  const rows: BreakdownRow[] = [
    {
      key: 'internet',
      label: `Internet ${internet.mbps} Mbit/s`,
      combo: internet.price,
      standard: internet.price,
    },
    {
      key: 'mobile',
      label: `Mobil tarif «${mobile.name}»`,
      combo: mobile.price,
      standard: mobile.price,
    },
    {
      key: 'telephony',
      label: 'IP-telefoniya abonent to\'lovi',
      combo: 0,
      standard: IP_TELEPHONY_FEE,
    },
  ];

  const comboTotal = rows.reduce((sum, row) => sum + row.combo, 0);
  const standardTotal = rows.reduce((sum, row) => sum + row.standard, 0);

  return { rows, comboTotal, standardTotal, savings: standardTotal - comboTotal };
}
