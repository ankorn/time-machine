import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native'

// eslint-disable-next-line
import { actionNewTimeSpanReceived } from 'time-machine/app/actionCreators'

import { getFormattedDate } from './utils'
import { styles } from './styles'

const mapDispatchToProps = () => ({
  saveTimeSpan: actionNewTimeSpanReceived,
})

class Main extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      headerTitle: () => <Text>[] title</Text>,
      headerRight: (
        <Button onPress={() => navigation.navigate('STATS')} title="stats" color="black" />
      ),
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      isTimerRunning: false,
      timerStartedAt: undefined,
      timerEndedAt: undefined,
      intervalId: 0,
    }

    this.toggleTimer = this.toggleTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.setTimeSpanFromTimePicker = this.setTimeSpanFromTimePicker.bind(this)
  }

  setTimeSpanFromTimePicker(key) {
    return () => {
      this.setState({
        [key]: new Date(),
      })
    }
  }

  startTimer() {
    const intervalId = setInterval(
      () => this.setState({ timerEndedAt: new Date() }),
      1000,
    )
    this.setState({
      timerStartedAt: new Date(),
      timerEndedAt: new Date(),
      isTimerRunning: true,
      intervalId,
    })
  }

  stopTimer() {
    const {
      intervalId,
      timerStartedAt,
      timerEndedAt,
    } = this.state
    const { saveTimeSpan } = this.props

    clearInterval(intervalId)
    saveTimeSpan(timerStartedAt, timerEndedAt)
    this.setState({
      isTimerRunning: false,
      intervalId: 0,
    })
  }

  toggleTimer() {
    if (this.state.isTimerRunning) {
      this.stopTimer()
    } else {
      this.startTimer()
    }
  }

  render() {
    const {
      isTimerRunning,
      timerStartedAt,
      timerEndedAt,
    } = this.state

    return (
      <View style={styles.container}>
        <Button
          onPress={this.toggleTimer}
          title={isTimerRunning ? 'stop' : 'run'}
          color="black"
        />
        <View style={styles.timeSpanContainer}>
          <TouchableOpacity
            onPress={this.setTimeSpanFromTimePicker('timerStartedAt')}
          >
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{timerStartedAt ? getFormattedDate(timerStartedAt) : '00:00:00'}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.separatorContainer}>
            <Text style={styles.separator}> ― </Text>
          </View>
          <TouchableOpacity
            onPress={this.setTimeSpanFromTimePicker('timerEndedAt')}
          >
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{timerEndedAt ? getFormattedDate(timerEndedAt) : '00:00:00'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const { func } = PropTypes

Main.propTypes = {
  saveTimeSpan: func.isRequired,
}

export default connect(null, mapDispatchToProps)(Main)
