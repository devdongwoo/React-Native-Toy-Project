import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

export default function Item({
  navigation,
}: StackScreenProps<StackParamList, string>) {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>This is a item</Text>
      </Pressable>
    </View>
  );
}
