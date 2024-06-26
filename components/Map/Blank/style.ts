import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../assets/style/scaling';
import {fontFamilyScale} from '../../../assets/style/globalStyle';

const style = StyleSheet.create({
  container: {
    width: horizontalScale(300),
    height: verticalScale(300),
    marginTop: verticalScale(22),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizontalScale(6),
    backgroundColor: 'transparent',
  },
  innerText: {
    position: 'absolute',
    color: '#fff',
    fontFamily: fontFamilyScale('NanumGothic', 600),
    fontSize: fontScale(16),
  },
});

export default style;
