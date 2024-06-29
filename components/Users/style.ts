import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/style/scaling';
import {fontFamilyScale} from '../../assets/style/globalStyle';

const style = StyleSheet.create({
  innerContainer: {},
  profileImg: {
    width: horizontalScale(55),
    height: verticalScale(55),
    borderRadius: 100,
    marginVertical: verticalScale(4),
    marginHorizontal: horizontalScale(5),
    borderColor: '#F35BAC',
    borderWidth: 1,
  },
  list: {
    fontFamily: fontFamilyScale('NanumGothic', 800),
    fontSize: fontScale(13),
    color: '#022150',
    padding: horizontalScale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {},
});

export default style;
