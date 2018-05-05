import {
  StyleSheet,
  PixelRatio,
} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeSpanContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: PixelRatio.getPixelSizeForLayoutSize(40),
    height: PixelRatio.getPixelSizeForLayoutSize(15),
    backgroundColor: 'black',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'white',
  },
  separatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: PixelRatio.getPixelSizeForLayoutSize(15),
    height: PixelRatio.getPixelSizeForLayoutSize(15),
  },
  separator: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  date: {
    color: 'white',
  },
})
