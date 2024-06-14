import React, {useState, useEffect} from 'react';
import {View, Text, Platform, PermissionsAndroid} from 'react-native';

import Config from 'react-native-config';
import Geolocation from 'react-native-geolocation-service';

interface IPosition {
  [name: string]: any;
}

export default function Map() {
  const [position, setPosition] = useState<IPosition>({});

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;

        setPosition(() => {
          return {latitude, longitude};
        });

        console.log(latitude, longitude, 123);
      },
      err => {
        console.log(err.code, err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
        distanceFilter: 1,
      },
    );
  };

  /**
   * 이번앱 사용일때 또는 항상일때는 granted, 허락하지 않을때는 console.log("Don't allow")
   * 에러가 발생할때는 에러메세지
   * */
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
        .then(res => {
          if (res === 'granted') {
            getPosition();
          } else {
            console.log(`Don't allow`);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  return (
    <View>
      <Text>지도입니다.</Text>
    </View>
  );
}
