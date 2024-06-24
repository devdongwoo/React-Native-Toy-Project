import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/style/scaling';

const style = StyleSheet.create({
  container: {
    width: horizontalScale(300),
    height: verticalScale(300),
    marginTop: verticalScale(42),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(6),
    backgroundColor: 'transparent',
  },
});

export default style;
