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

const Stats = props => (
  <View style={styles.container}>
    <Text>hello stats!</Text>
    <Button
      title="Back"
      onPress={() => props.navigation.goBack()}
    />
  </View>
)

const { shape, func } = PropTypes

Stats.propTypes = {
  navigation: shape({
    navigate: func,
  }).isRequired,
}

export default Stats
