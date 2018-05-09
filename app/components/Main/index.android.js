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
      headerRight: (
        <View style={styles.statsButtonContainer}>
          <Button
            onPress={() => navigation.navigate('STATS')}
            title="STATS"
            color="black"
          />
        </View>
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
      createdLabel: '',
    }

    this.toggleTimer = this.toggleTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.setTimeSpanFromTimePicker = this.setTimeSpanFromTimePicker.bind(this)
    this.renderLabel = this.renderLabel.bind(this)
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

  renderLabel(label) {
    if (!label || label.length === 0) return null

    if (label === 'NEW') {
      return (
        <TextInput
          style={styles.textInput}
          placeholder="new label"
          value={this.state.createdLabel}
          onChangeText={createdLabel => this.setState({ createdLabel })}
          onSubmitEditing={this.props.createLabel}
          key={`${label.length}-${label}`}
        />
      )
    }

    return (
      <TouchableOpacity
        onPress={this.props.selectLabel}
      >
        <View
          style={styles.labelContainer}
          key={`${label.length}-${label}`}
        >
          <Text>{label}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const {
      isTimerRunning,
      timerStartedAt,
      timerEndedAt,
      createdLabel,
    } = this.state

    const runningTimeSpan = {
      startedAt: timerStartedAt && timerStartedAt.getTime(),
      endedAt: timerEndedAt && timerEndedAt.getTime(),
    }

    const selectedLabel = undefined

    const labels = [
      'NEW',
      createdLabel,
      'statistics',
      'probability theory',
      'linear algebra',
      'running',
      'foo',
      'bar',
      'baz',
    ]

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={selectedLabel ? this.toggleTimer : () => {}}
        >
          <View style={styles.timerButtonContainer}>
            <Text style={styles.timerButtonText}>{isTimerRunning ? 'STOP' : 'RUN'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.scrollViewContainer}>
          {!selectedLabel && (
            <View style={styles.labelsTitleContainer}>
              <Text style={styles.labelsTitle}>labels</Text>
            </View>
          )}
          <ScrollView
            contentContainerStyle={styles.scrollView}
          >
            {!selectedLabel && labels.map(this.renderLabel)}
            {selectedLabel && runningTimeSpan.startedAt && runningTimeSpan.endedAt && (
              <TimeSpan
                timeSpan={runningTimeSpan}
                onPressStartedAt={this.setTimeSpanFromTimePicker('timerStartedAt')}
                onPressEndedAt={this.setTimeSpanFromTimePicker('timerEndedAt')}
              />
            )}
            {selectedLabel && 'остальные промежутки времени'}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const { func } = PropTypes

Main.propTypes = {
  saveTimeSpan: func.isRequired,
  selectLabel: func.isRequired,
  createLabel: func.isRequired,
}

export default connect(null, mapDispatchToProps)(Main)
