import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import style from './style';

export default function Header() {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.subTitle}>{'반갑습니다,'}</Text>
        <Text style={style.title}>{'김동우님'}👋</Text>
      </View>
      <View>
        <Pressable>
          <Image
            style={style.image}
            source={{
              uri: 'https://cdn.dribbble.com/users/6743959/screenshots/17748778/media/43108ab78ecb2b27cf5c946068498612.jpg?resize=1000x750&vertical=center',
            }}
          />
        </Pressable>
      </View>
    </View>
  );
}
