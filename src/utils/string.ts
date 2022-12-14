export const truncate = (text: string) =>
  text.trim().slice(0, 150) + (text.length > 150 ? '...' : '')
