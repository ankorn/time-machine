import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native'

// eslint-disable-next-line
import { actionNewTimeSpanReceived } from 'time-machine/app/actionCreators'
// eslint-disable-next-line
import TimeSpan from 'time-machine/app/components/TimeSpan'

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
      selectedLabel: '',
      createdLabel: '',
    }

    this.toggleTimer = this.toggleTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.setTimeSpanFromTimePicker = this.setTimeSpanFromTimePicker.bind(this)
    this.renderLabelItem = this.renderLabelItem.bind(this)
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

  renderLabelItem({ label }) {
    if (label === 'NEW') {
      return (
        <TextInput
          placeholder="new label..."
          value={this.state.createdLabel}
          onChange={createdLabel => this.setState({ createdLabel })}
        />
      )
    }

    return (
      <Text>${label}</Text>
    )
  }

  render() {
    const {
      isTimerRunning,
      timerStartedAt,
      timerEndedAt,
    } = this.state

    const runningTimeSpan = {
      startedAt: timerStartedAt && timerStartedAt.getTime(),
      endedAt: timerEndedAt && timerEndedAt.getTime(),
    }

    const labels = [
      'NEW',
      'statistics',
      'probability theory',
      'linear algebra',
    ]

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.toggleTimer}
        >
          <View style={styles.timerButtonContainer}>
            <Text style={styles.timerButtonText}>{isTimerRunning ? 'STOP' : 'RUN'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
          >
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
            <TimeSpan
              timeSpan={runningTimeSpan}
              onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
              onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
            />
          </ScrollView>
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
