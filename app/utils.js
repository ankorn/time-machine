export const withLeadingZero = val => (val < 10 ? `0${val}` : val)

export const getFormattedDate = (timestamp) => {
  const date = new Date(timestamp)
  const minutes = withLeadingZero(date.getMinutes())
  const seconds = withLeadingZero(date.getSeconds())
  return `${date.getHours()}:${minutes}:${seconds}`
}
