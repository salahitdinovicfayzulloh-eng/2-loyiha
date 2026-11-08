export function formatUZS(amount: number): string {
  return `${Math.round(amount).toLocaleString('en-US').replace(/,/g, ' ')} so'm`;
}
