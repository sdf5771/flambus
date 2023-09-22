import React, {useEffect} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function KakaoMapView(){
    
    return (
        <View style={styles.rootContainer}>
            <WebView 
                style={styles.webView}
                originWhitelist={['*']}
                source={{uri: 'http://192.168.45.99:3000/kakaomap'}}
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