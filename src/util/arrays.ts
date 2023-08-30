export function chunks<T>(arr: T[], n: number): T[][] {
  let out = []
  for (let i = 0; i < arr.length; i += n) {
    out.push(arr.slice(i, i + n))
  }
  return out
}
