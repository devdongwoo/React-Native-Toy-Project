import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';
import {horizontalScale, verticalScale} from '../../../assets/style/scaling';

interface IKakaoMap {
  latitude: number;
  longitude: number;
}

export default function KakaoMap({latitude, longitude}: IKakaoMap) {
  const [html, setHtml] = useState(`
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${Config.ENV_KEY}"></script>
  </head>
  <body>
    <div id="map" style="width:500px; height:400px;"></div>
      <script>
            (function () {
                const container = document.getElementById('map'); 

                const position  = new kakao.maps.LatLng(${latitude}, ${longitude}); 

                const options = {
                    center: position,
                    level: 3
                };
                
                const map = new kakao.maps.Map(container, options);

                const marker = new kakao.maps.Marker({
                                position
                            });
                marker.setMap(map);            
            })();
      </script>       
  </body>
</html>
  `);

  return (
    <View
      style={{
        width: horizontalScale(300),
        height: verticalScale(300),
        marginTop: verticalScale(22),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: horizontalScale(6),
      }}>
      <View
        style={{
          flex: 1,
          width: horizontalScale(300),
          height: verticalScale(300),
        }}>
        <WebView
          source={{html}}
          style={{
            flex: 1,
          }}
          originWhitelist={['*']}
        />
      </View>
      <Text>※ 현재위치를 나타냅니다.</Text>
    </View>
  );
}
