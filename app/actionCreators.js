export const NEW_TIME_SPAN_RECEIVED = 'NEW_TIME_SPAN_RECEIVED'


export const actionNewTimeSpanReceived = (startedAt, endedAt) => ({
  type: NEW_TIME_SPAN_RECEIVED,
  payload: {
    startedAt,
    endedAt,
  },
})
