import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {KakaoSNS, GoogleSNS, NaverSNS} from '../../assets/svg-components/social';
export default function SocialLogin() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={[styles.line, {marginRight: 30}]}></View>
        <Text style={styles.titleText}>간편 로그인</Text>
        <View style={[styles.line, {marginLeft: 30}]}></View>
      </View>
      <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'center',alignItems: 'center'}}>
        <Pressable>
            <GoogleSNS width={48} height={48} />
        </Pressable>
        <Pressable style={{marginHorizontal: 36}}>
            <KakaoSNS width={48} height={48} />
        </Pressable>
        <Pressable>
            <NaverSNS width={48} height={48} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',
        letterSpacing: -0.04,
        color: '#CCCCCC'
    },
    line: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        borderStyle: 'solid',
    }
})