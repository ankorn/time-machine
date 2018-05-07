import {
  StyleSheet,
  PixelRatio,
} from 'react-native'

export const styles = StyleSheet.create({
  timeSpanContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(3),
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
