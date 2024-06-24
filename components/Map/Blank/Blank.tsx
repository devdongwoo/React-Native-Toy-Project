import React from 'react';

import {View, Text} from 'react-native';

import style from './style';
import {LinearGradient} from 'react-native-gradients';

export default function Blank() {
  return (
    <View style={style.container}>
      <LinearGradient
        colorList={[
          {offset: '0%', color: '#231557', opacity: '1'},
          {offset: '29%', color: '#44107A', opacity: '1'},
          {offset: '67%', color: '#FF1361', opacity: '1'},
          {offset: '100%', color: '#FFF800', opacity: '1'},
        ]}
        angle={90}
      />
      <Text>지도를 가져올 수가 없어요.😮</Text>
    </View>
  );
}
