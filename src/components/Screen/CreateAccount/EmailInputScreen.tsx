import { View, Text, SafeAreaView, Pressable, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import React, {useState} from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'
import { NavigationProp } from '@react-navigation/native'
import Atoms from '../../Atoms'

export default function EmailInputScreen({navigation}: {navigation: NavigationProp}) {
    const [emailVal, setEmailVal] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');  
    const inputOnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmailVal(event.nativeEvent.text)
        const regex = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i
        if(event.nativeEvent.text.length != 0){
            if(!regex.test(event.nativeEvent.text)){
                setIsError(true)
                setErrorMsg('유효하지 않은 이메일 주소입니다. 다시 입력해주세요!')
            } else {
                setIsError(false)
                setErrorMsg('')
            }
        } else {
            setIsError(false)
            setErrorMsg('')
        }
    }
    const onPressHandler = () => {
        if(emailVal.length !== 0 && isError !== true){
            navigation.push('EmailAuth', {email: emailVal})
        }
        if(emailVal.length === 0){
            setIsError(true)
            setErrorMsg('사용할 이메일을 입력해주세요.')
        }
    }
  return (
    <>
        <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#ffffff'}}>
            <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
        <View style={styles.inputContainer}>
                <Text style={styles.titleText}>이메일</Text>
                <View style={{marginTop: 8}}>
                    <Atoms.PublicBorderInputBox
                        placeHolder='이메일을 입력하세요.'
                        value={emailVal}
                        onChangeHandler={inputOnChangeHandler}
                        type='emailAddress'
                        isError={isError}
                        errorMsg={errorMsg}
                    />
                </View>
        </View>
        <View style={styles.btnContainer}>
            <Atoms.ProgressBar page={1} pages={4}/>
            <Pressable onPress={onPressHandler} style={styles.btn}>
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
    }
})
