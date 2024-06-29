import React, {useState, useCallback, useEffect} from 'react';

import {View, Text, FlatList, Image} from 'react-native';

import style from './style';

import USERS from '../../mock/mockapi';
import {GET} from '../../axios/axios';

interface ItemData {
  [key: string]: string | number | {[key: string]: string};
}

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

  const getUser = useCallback(async () => {
    const res = await GET();
    setUser(res);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <FlatList
        horizontal={true}
        data={user}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: {item: ItemData}) => {
          return <UserList item={item} />;
        }}
      />
    </View>
  );
}
