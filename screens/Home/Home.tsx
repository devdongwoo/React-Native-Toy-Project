import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import {globalStyle} from '../../assets/style/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';
import Users from '../../components/Users/Users';

export default function Home({
  navigation,
}: StackScreenProps<StackParamList, string>) {
  return (
    <SafeAreaView
      style={[globalStyle.bgColor, globalStyle.paddingAround, style.height]}>
      <Header />
      <Users />
      <Map />
    </SafeAreaView>
  );
}
