import {
  StyleSheet,
  PixelRatio,
} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  scrollViewContainer: {
    height: PixelRatio.getPixelSizeForLayoutSize(100),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})
