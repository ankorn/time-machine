import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

// eslint-disable-next-line
import { actionNewTimeSpanReceived } from 'time-machine/app/actionCreators'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapDispatchToProps = () => ({
  saveTimeSpan: actionNewTimeSpanReceived,
})

class Main extends React.Component {
  static navigationOptions({ navigation }) {
    return {
      headerTitle: () => <Text>itsa title!</Text>,
      headerRight: (
        <Button onPress={() => navigation.navigate('STATS')} title="Go to Stats" color="black" />
      ),
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      isTimerRunning: false,
      timerStartedAt: {},
      timerEndedAt: {},
      intervalId: 0,
    }

    this.toggleTimer = this.toggleTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  getFormattedDateRange() {
    const { timerStartedAt, timerEndedAt } = this.state

    const withLeadingZero = value => (
      value < 10 ? `0${value}` : value
    )

    const startMinutes = withLeadingZero(timerStartedAt.getMinutes())
    const startSeconds = withLeadingZero(timerStartedAt.getSeconds())

    const endMinutes = withLeadingZero(timerEndedAt.getMinutes())
    const endSeconds = withLeadingZero(timerEndedAt.getSeconds())

    const start = `${timerStartedAt.getHours()}:${startMinutes}:${startSeconds}`
    const end = `${timerEndedAt.getHours()}:${endMinutes}:${endSeconds}`

    return `${start} - ${end}`
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
    } = this.state

    return (
      <View style={styles.container}>
        <Button
          onPress={this.toggleTimer}
          title={isTimerRunning ? 'stop' : 'start'}
          color="black"
        />
        {timerStartedAt.getSeconds && (
          <Text>{this.getFormattedDateRange()}</Text>
        )}
      </View>
    )
  }
}

const { func } = PropTypes

Main.propTypes = {
  saveTimeSpan: func.isRequired,
}

export default connect(null, mapDispatchToProps)(Main)
