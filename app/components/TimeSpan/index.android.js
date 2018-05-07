import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

// eslint-disable-next-line
import { getFormattedDate } from 'time-machine/app/utils'

import { styles } from './styles'

const TimeSpan = ({
  timeSpan,
  onPressStartedAt,
  onPressEndedAt,
}) => (
  <View style={styles.timeSpanContainer}>
    <TouchableOpacity
      onPress={onPressStartedAt}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{timeSpan.startedAt ? getFormattedDate(timeSpan.startedAt) : '00:00:00'}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.separatorContainer}>
      <Text style={styles.separator}> ― </Text>
    </View>
    <TouchableOpacity
      onPress={onPressEndedAt}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{timeSpan.endedAt ? getFormattedDate(timeSpan.endedAt) : '00:00:00'}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const {
  shape,
  number,
  func,
} = PropTypes

TimeSpan.propTypes = {
  timeSpan: shape({
    startedAt: number,
    endedAt: number,
  }).isRequired,
  onPressStartedAt: func.isRequired,
  onPressEndedAt: func.isRequired,
}

export default TimeSpan
