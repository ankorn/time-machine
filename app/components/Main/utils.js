export const getFormattedDate = (date) => {
  const withLeadingZero = value => (
    value < 10 ? `0${value}` : value
  )

  const minutes = withLeadingZero(date.getMinutes())
  const seconds = withLeadingZero(date.getSeconds())

  return `${date.getHours()}:${minutes}:${seconds}`
}
