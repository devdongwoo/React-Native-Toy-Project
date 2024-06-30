import React from 'react';

import {View, Text} from 'react-native';
import style from './style';

export default function Skeleton() {
  return (
    <View>
      <View style={style.list}>
        <View style={style.profileImg} />
        <Text style={style.username} />
      </View>
    </View>
  );
}
