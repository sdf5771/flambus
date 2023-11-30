import { View, Text, SafeAreaView, Pressable, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'
import Atoms from '../../Atoms';

export default function EmailAuthScreen({navigation, route}) {
    const [authCode, setAuthCode] = useState('');
    const [minute, setMinute] = useState(2)
    const [second, setSecond] = useState(59);
    const minuteRef = useRef(2)
    const secondRef = useRef(59)

    useEffect(() => {
        const timer = setInterval(() => {
            // 0분 0초가 되면 clearInterval
            if(minuteRef.current === 0 && secondRef.current === 1){
                clearInterval(timer)
            }

            if(secondRef.current < 1){
                setMinute((prev) => prev - 1)
                setSecond(59)
                minuteRef.current -= 1
                secondRef.current = 59
            } else {
                setSecond((prev) => prev - 1)
                secondRef.current -= 1
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])
  return (
    <>
        <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#ffffff'}}>
            <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
        <View style={styles.inputContainer}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.titleText}>이메일 인증</Text>
                        <Text style={{
                            marginLeft: 8, 
                            fontWeight: '600', 
                            fontSize: 14, 
                            lineHeight: 22, 
                            letterSpacing: -0.04, 
                            color: '#FFBA33'}}>0{minute}:{second >= 10 ? second : `0${second}`}</Text>
                    </View>
                    <View>
                        <Pressable>
                            <Text style={{
                                fontWeight: '600', 
                                fontSize: 14, 
                                lineHeight: 17, 
                                letterSpacing: -0.04, 
                                textDecorationLine: 'underline', 
                                color: '#000000'}}>재발송 요청</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{marginTop: 8}}>
                    <Atoms.PublicBorderInputBox
                        placeHolder='수신받은 인증코드를 입력해주세요.'
                        value={authCode}
                        onChangeHandler={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setAuthCode(event.nativeEvent.text)}
                        type='text'
                    />
                </View>
        </View>
        <View style={{marginTop: 16, paddingHorizontal: 16}}>
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 52, borderRadius: 4, backgroundColor: '#F1F1F1'}}>
                <Text style={styles.prevInputText}>입력했던 이메일</Text>
                <Text style={styles.prevInputText}>{route.params.email}</Text>
            </View>
        </View>
        <View style={styles.btnContainer}>
            <Atoms.ProgressBar page={2} pages={4}/>
            <Pressable onPress={() => navigation.push('PasswordInput', {email: route.params.email})} style={styles.btn}>
                <Text style={styles.btnText}>다음으로</Text>
            </Pressable>
        </View>
        </SafeAreaView>
        <SafeAreaView style={{backgroundColor: '#FFBA33'}}/>
    </>
  )
}

const styles = StyleSheet.create({
    inputContainer: {marginTop: 6, paddingHorizontal: 16},
    titleText: {fontWeight: '600', fontSize: 20, lineHeight: 28, letterSpacing: -0.04, color: '#1A1A1A'},
    btnContainer: {position: 'absolute', bottom: 0, width: '100%'},
    btn: {display: 'flex', justifyContent: 'center', alignItems: 'center', height: 56, backgroundColor: '#FFBA33'},
    btnText: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.04,
        color: '#333333',
    },
    prevInputText: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: -0.04,
        color: '#999999',
    }
})