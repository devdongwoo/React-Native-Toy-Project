import React, {useState, useCallback, useEffect} from 'react';

import {View, Text, FlatList, Image} from 'react-native';

import {useQuery} from '@tanstack/react-query';

import {getUsers} from '../../axios/axios';

import style from './style';
import Skeleton from '../Skeleton/Skeleton';

import {ItemData} from '../../type/type';
import pagination from '../common/pagination';

function UserList({item}: {item: ItemData}) {
  return (
    <View style={style.innerContainer}>
      <View style={style.list}>
        <View style={style.profileImg} />
        {typeof item.username === 'string' && (
          <Text style={style.username}>{item.username}</Text>
        )}
      </View>
    </View>
  );
}

export default function Users() {
  const [user, setUser] = useState<Array<ItemData>>();

  const [item, setItem] = useState(5);

  const {status, data, error, isLoading} = useQuery({
    queryKey: ['users', item],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        data={data}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: {item: ItemData}) => {
          return <UserList item={item} />;
        }}
      />
    </View>
  );
}
