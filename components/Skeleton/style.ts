import {StyleSheet, Animated} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/style/scaling';

const style = StyleSheet.create({
  profileImg: {
    width: horizontalScale(55),
    height: verticalScale(55),
    borderRadius: 100,
    marginVertical: verticalScale(4),
    marginHorizontal: horizontalScale(5),
    borderColor: ' #434040',
    borderWidth: 1,
  },
  list: {
    padding: horizontalScale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    width: horizontalScale(50),
    backgroundColor: 'green',
  },
});

export default style;
