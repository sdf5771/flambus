import { View, Text, SafeAreaView, StyleSheet, Pressable, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, { useState } from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'
import Atoms from '../../Atoms'

export default function PasswordInputScreen({navigation}) {
    const [password, setPassword] = useState('');
    const [pwIsError, setPwIsError] = useState(false);
    const [pwErrMsg, setPwErrMsg] = useState(''); 

    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [pwConfirmIsError, setPwConfirmIsError] = useState(false);
    const [pwConfirmErrMsg, setPwConfirmErrMsg] = useState('');

    const passwordOnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(event.nativeEvent.text)

        let regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
        if(event.nativeEvent.text.length !== 0){
            if(!regex.test(event.nativeEvent.text)){
                setPwIsError(true)
                setPwErrMsg('비밀번호 형식을 맞추어주세요.')
            } else {
                setPwIsError(false)
                setPwErrMsg('')
            }
        } else {
            setPwIsError(false)
            setPwErrMsg('')
        }
    }

    const passwordConfirmOnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPasswordConfirm(event.nativeEvent.text)

        if(event.nativeEvent.text.length !== 0){
            if(event.nativeEvent.text !== password){
                setPwConfirmIsError(true)
                setPwConfirmErrMsg('입력하신 비밀번호와 일치하지 않습니다.')
            } else {
                setPwConfirmIsError(false)
                setPwConfirmErrMsg('')
            }
        } else {
            setPwConfirmIsError(false)
            setPwConfirmErrMsg('')
        }
    }

    const onPressHandler = () => {
        const isEmptyPassword = password.length !== 0 && passwordConfirm.length !== 0
        
        if(isEmptyPassword && !pwIsError && !pwConfirmIsError){
            navigation.push('NickNameInput')
        }
    }
  return (
    <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#ffffff'}}>
        <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
      <View style={styles.inputContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.titleText}>비밀번호</Text>
                <Text style={{fontWeight: '600', fontSize: 12, lineHeight: 18, letterSpacing: -0.04, color: '#CCCCCC',}}>대문자, 소문자, 특수기호를 포함한 8자 이상</Text>
            </View>
            <View style={{marginTop: 8}}>
                <Atoms.PublicBorderInputBox
                    placeHolder='비밀번호를 입력하세요.'
                    value={password}
                    onChangeHandler={passwordOnChangeHandler}
                    type='password'
                    isError={pwIsError}
                    errorMsg={pwErrMsg}
                />
            </View>
      </View>
      <View style={[styles.inputContainer, {marginTop: 24}]}>
            <Text style={styles.titleText}>비밀번호 확인</Text>
            <View style={{marginTop: 8}}>
                <Atoms.PublicBorderInputBox
                    placeHolder='다시 한번 입력하세요.'
                    value={passwordConfirm}
                    onChangeHandler={passwordConfirmOnChangeHandler}
                    type='password'
                    isError={pwConfirmIsError}
                    errorMsg={pwConfirmErrMsg}
                />
            </View>
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={onPressHandler} style={styles.btn}>
            <Text style={styles.btnText}>다음으로</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
    }
})