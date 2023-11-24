import { View, Text, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import Organisms from '../../Organisms'

export default function SignUpCompleteScreen({navigation, route}) {
    const [termsRadioIsActive, setTermsRadioIsActive] = useState(false);
    const [gpsRadioIsActive, setGpsRadioIsActive] = useState(false);

    const onPressHandler = () => {
        navigation.popToTop()
    }
  return (
    <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#ffffff'}}>
      <View style={{marginTop: 104, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 240, height: 240}} source={require('../../../assets/public/flambus-logo.png')}/>
      </View>
      <View style={[styles.textContainer, {marginTop: 24}]}>
        <Text style={styles.titleText}>플램버스의 새로운 친구,</Text>
        <Text style={styles.titleText}>{route.params.nickname}!</Text>
      </View>
      <View style={[styles.textContainer, {marginTop: 24}]}>
        <Text style={styles.descriptionText}>회원가입이 완료되었어요!</Text>
        <Text style={styles.descriptionText}>앞으로의 함께할 여정이 너무 기대되요!</Text>
      </View>
      <View style={{marginTop: 98, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <View>
            <Organisms.RadioButton
                isActive={termsRadioIsActive}
                setIsActive={setTermsRadioIsActive}
                color='#FFBA33'
                text='개인정보 수집 및 마케팅 광고 활용여부에 동의 (선택)'
            />
        </View>
        <View style={{marginTop: 8}}>
            <Organisms.RadioButton
                isActive={gpsRadioIsActive}
                setIsActive={setGpsRadioIsActive}
                color='#FFBA33'
                text='GPS 수집 및 사용관련 동의 (선택)'
            />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={onPressHandler} style={styles.btn}>
            <Text style={styles.btnText}>탐험 시작!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: -0.04,
        color: '#1A1A1A',
    },
    descriptionText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.04,
        color: '#494949',
    },
    btnContainer: {position: 'absolute', bottom: 0, width: '100%'},
    btn: {display: 'flex', justifyContent: 'center', alignItems: 'center', height: 56, backgroundColor: '#FFBA33'},
    btnText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.04,
        color: '#333333',
    },
})