import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from './scaling';

export const fontFamilyScale = (fontName: string, scale: number) => {
  switch (scale) {
    case 100:
    case 200:
    case 300:
    case 400:
      return `${fontName}Light`;
    case 500:
    case 600:
      return `${fontName}ExtraBold`;
    case 700:
      return `${fontName}Bold`;
    case 800:
    case 900:
      return `${fontName}`;
  }
};

export const globalStyle = StyleSheet.create({
  bgColor: {backgroundColor: '#fff'},
  flex: {
    flex: 1,
  },
  paddingAround: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(21),
  },
});
