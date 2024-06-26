import React, {useState, useEffect} from 'react';
import {
  View,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import KakaoMap from './Kakao/KakaoMap';
import Spinner from './Spinner/Spinner';
import Blank from './Blank/Blank';

interface IPosition {
  [name: string]: any;
}

export default function Map() {
  const [position, setPosition] = useState<IPosition>({
    latitude: 0,
    longitude: 0,
    show: false,
    visible: true,
  });

  const getPosition = () => {
    Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;

        setPosition(() => {
          return {latitude, longitude, show: true, visible: true};
        });
      },
      err => {
        setPosition(prev => {
          return {...prev, show: false, visible: false};
        });
        console.log(err.code, err.message);
      },
      {
        enableHighAccuracy: true,
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
            setPosition(prev => {
              return {...prev, show: false, visible: false};
            });
            console.log(`Don't allow`);
          }
        })
        .catch(err => {
          setPosition(prev => {
            return {...prev, show: false, visible: false};
          });
          console.log(err);
        });
    }
  }, []);

  return (
    <View>
      {position.show ? (
        <KakaoMap latitude={position.latitude} longitude={position.longitude} />
      ) : position.visible ? (
        <Spinner />
      ) : (
        <Blank />
      )}
    </View>
  );
}
