import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    clearInterval(this.state.intervalId)
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
          title={isTimerRunning ? 'stop' : 'start'}
          color="black"
        />
        {timerStartedAt.getSeconds && (
          <Text>{`${timerStartedAt.getSeconds()} - ${timerEndedAt.getSeconds()}`}</Text>
        )}
      </View>
    )
  }
}

export default Main
