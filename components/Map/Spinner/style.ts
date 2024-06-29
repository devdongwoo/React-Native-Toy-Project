import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/style/scaling';

const style = StyleSheet.create({
  container: {
    width: horizontalScale(300),
    height: verticalScale(300),
    marginTop: verticalScale(22),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(6),
    borderWidth: 0.3,
  },
});

export default style;
