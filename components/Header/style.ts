import {StyleSheet} from 'react-native';
import {fontFamilyScale} from '../../assets/style/globalStyle';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: fontFamilyScale('NanumGothic', 400),
    fontSize: fontScale(16),
    marginBottom: verticalScale(6),
  },
  title: {
    fontFamily: fontFamilyScale('NanumGothic', 600),
    fontSize: fontScale(24),
    color: '#253b8f',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
});

export default style;
