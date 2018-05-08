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
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  scrollViewContainer: {
    height: PixelRatio.getPixelSizeForLayoutSize(90),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(40),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  timerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0,
    width: PixelRatio.getPixelSizeForLayoutSize(40),
    height: PixelRatio.getPixelSizeForLayoutSize(40),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
    borderColor: 'black',
    borderWidth: 3,
  },
  timerButtonText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
})
