import { SafeAreaView, View, Text, Pressable, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'
import Atoms from '../../Atoms';
import { useMutation } from '@tanstack/react-query';
import createAccount from '../../../queries/createAccount';

export default function NickNameInputScreen({navigation, route}) {
    const [nickname, setNickname] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const {mutate: createAccountRequest} = useMutation(createAccount, {
        onSuccess: (res : {
            "success": boolean,
            "resultCode": string,
            "message": string,
            "data": null,
          }) => {
            if(res.success){
                navigation.push('SignUpComplete', {nickname: nickname})
            } else {
                setIsError(true)
                setErrorMsg(res.message)
            }
        }
    })
    
    const inputOnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setNickname(event.nativeEvent.text)

        if(event.nativeEvent.text.length !== 0){
            setIsError(false)
            setErrorMsg('')
        }
    }

    const onPressHandler = () => {
        if(nickname !== ''){
            createAccountRequest({email: route.params.email, password: route.params.password, nickname: nickname})
        } else {
            setIsError(true)
            setErrorMsg('사용하실 닉네임을 입력해주세요.')
        }
    }

  return (
    <>
        <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#ffffff'}}>
            <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
                <View style={styles.inputContainer}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.titleText}>닉네임</Text>
                        <Text style={{fontWeight: '600', fontSize: 12, lineHeight: 18, letterSpacing: -0.04, color: '#CCCCCC'}}>10자리 이하</Text>
                    </View>
                    <View style={{marginTop: 8}}>
                        <Atoms.PublicBorderInputBox
                            placeHolder='사용하실 닉네임을 입력해주세요.'
                            value={nickname}
                            onChangeHandler={inputOnChangeHandler}
                            type='text'
                            isError={isError}
                            errorMsg={errorMsg}
                    />
                </View>
        </View>
        <View style={styles.btnContainer}>
            <Atoms.ProgressBar page={4} pages={4}/>
            <Pressable onPress={onPressHandler} style={styles.btn}>
                <Text style={styles.btnText}>가입완료 하기</Text>
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