export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function calculateMonthsBetween(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
}

export function isWithinMonths(date: string, months: number): boolean {
  const targetDate = new Date(date);
  const today = new Date();
  const monthsDiff = (targetDate.getFullYear() - today.getFullYear()) * 12 + 
    targetDate.getMonth() - today.getMonth();
  return monthsDiff <= months && monthsDiff >= 0;
}