export function formatDate(date: Date): string {
  return `${date.toLocaleDateString('fr-CA')} ${date.toLocaleTimeString('en-US', {timeStyle: "short"})}`
}
