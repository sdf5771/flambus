import React, {useEffect} from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import WebView from 'react-native-webview';
import RNLocation from 'react-native-location';

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

function KakaoMapView(){

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
                })
            })
    }, [])
    
    return (
        <View style={styles.rootContainer}>
            <WebView 
                style={styles.webView}
                originWhitelist={['*']}
                source={{uri: 'http://localhost:3000/kakaomap'}}
                scrollEnabled={false}
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