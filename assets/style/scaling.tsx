import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const baseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const baseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const baseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const horizontalScale = (size: number) => (width / baseWidth()) * size;

const verticalScale = (size: number) => (height / baseHeight()) * size;

const fontScale = (size: number) => Math.round((width * size) / baseFonts());

export {horizontalScale, verticalScale, fontScale};
