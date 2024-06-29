import React from 'react';

import {ActivityIndicator, View} from 'react-native/';

import style from './style';

export default function Spinner() {
  return (
    <View style={style.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
