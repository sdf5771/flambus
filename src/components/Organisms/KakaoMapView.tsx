import React, {useEffect, useRef, useState} from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import WebView from 'react-native-webview';
import RNLocation from 'react-native-location';
import { useQuery } from '@tanstack/react-query';
import { getStoreMapData } from '../../queries';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

RNLocation.configure({
    distanceFilter: 100, // Meters
    desiredAccuracy: {
      ios: "best",
      android: "balancedPowerAccuracy"
    },
    // Android only
    androidProvider: "auto",
    interval: 5000, // Milliseconds
    fastestInterval: 10000, // Milliseconds
    maxWaitTime: 5000, // Milliseconds
    // iOS Only
    activityType: "other",
    allowsBackgroundLocationUpdates: false,
    headingFilter: 1, // Degrees
    headingOrientation: "portrait",
    pausesLocationUpdatesAutomatically: false,
    showsBackgroundLocationIndicator: false,
})

type TLocation = {
    lat: number,
    lng: number,
}

function KakaoMapView(){
    const webviewRef = useRef<WebView | null>(null);
    const [location, setLocation] = useState<TLocation | null>(null);
    const {data: mapData, isLoading: mapDataIsLoading, error: mapDataIsError} = useQuery(['mapData', location?.latitude, location?.longitude] , () => getStoreMapData());

    useEffect(() => {
        RNLocation.requestPermission({
            ios: 'whenInUse', // or 'always'
            android: {
              detail: 'coarse', // or 'fine'
              rationale: {
                title: "We need to access your location",
                message: "We use your location to show where you are on the map",
                buttonPositive: "OK",
                buttonNegative: "Cancel"
              }
            }
          });
          RNLocation.getCurrentPermission()
            .then(currentPermission => {
                console.log('GPS 권한을 허가하였는가 ? ', currentPermission)
                if (currentPermission === 'denied'){
                    Alert.alert(
                        "Flambus",
                        "앱을 정상적으로 이용하기 위해 위치 정보 권한을 허용해주세요.",
                        [                              // 버튼 배열
                        { text: "네", onPress: () => console.log("그렇다는데") }, //버튼 제목
                        {
                          text: "아니요",                              // 버튼 제목
                          onPress: () => console.log("아니라는데"),     //onPress 이벤트시 콘솔창에 로그를 찍는다
                          style: "cancel"
                        }
                      ],
                      { cancelable: false }
                    )
                }
                RNLocation.getLatestLocation({ timeout: 60000 })
                .then(latestLocation => {
                    // Use the location here
                    console.log('로케이션 값 ', latestLocation)
                    if(latestLocation){
                        setLocation({lat: Math.round(latestLocation?.latitude), lng: latestLocation?.longitude});
                    }
                })
            })
    }, [])

    useEffect(() => {
        if(location){
            webviewRef.current?.postMessage(JSON.stringify({
                type: "map location",
                data: location,
            }))
        }

        //marker data post
        if(mapData && !mapDataIsLoading){
            console.log('mapData ', mapData)
            webviewRef.current?.postMessage(JSON.stringify({
                data: mapData.data,
                type: "marker Data"
            }));
        }
    }, [mapDataIsLoading])

    return (
        <View style={styles.rootContainer}>
            <WebView 
                ref={webviewRef}
                style={styles.webView}
                originWhitelist={['*']}
                source={{uri: 'http://localhost:3000/kakaomap'}}
                scrollEnabled={false}
                javaScriptEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer : {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    webView: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight - 260,
    }
})

export default KakaoMapView;