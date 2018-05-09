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
  },
  timerButtonText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  statsButtonContainer: {
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  labelContainer: {
    width: PixelRatio.getPixelSizeForLayoutSize(70),
    height: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  textInput: {
    height: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  labelsTitleContainer: {
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  labelsTitle: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    fontWeight: '500',
  },
})
