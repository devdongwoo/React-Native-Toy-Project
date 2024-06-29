import React from 'react';

import {View, Text} from 'react-native';

import style from './style';
import {LinearGradient} from 'react-native-gradients';

const colorList = [
  {offset: '73%', color: '#64e8db', opacity: '1'},
  {offset: '27%', color: '#8a64eb', opacity: '1'},
];

export default function Spinner() {
  return (
    <View style={[style.container]}>
      <LinearGradient angle={148} colorList={colorList} />
      <Text style={style.innerText}>지도를 가져올 수가 없어요.😮</Text>
    </View>
  );
}
