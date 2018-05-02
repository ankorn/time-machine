import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'

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

  render() {
    return (
      <View style={styles.container}>
        <Text>hello main!</Text>
      </View>
    )
  }
}

const { shape, func } = PropTypes

Main.propTypes = {
  navigation: shape({
    navigate: func,
  }).isRequired,
}

export default Main
