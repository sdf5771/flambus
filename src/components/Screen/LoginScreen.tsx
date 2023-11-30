import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Button, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { FlambusLogo } from '../../assets/svg-components'
import Atoms from '../Atoms'
import Organisms from '../Organisms';
import { useMutation } from '@tanstack/react-query';
import { authLogin } from '../../queries';
import { useAuth } from '../../hooks';

type TloginRes = {
    success: boolean, 
    resultCode: string, 
    message: string, 
    data: {
        accessToken: string,
        created: string | null,
    }
}

export default function LoginScreen({navigation}) {
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [radioIsActive, setRadioIsActive] = useState(false);
    const {isLoggedIn, setAccessToken} = useAuth();
    const {mutate: loginMutateFn} = useMutation(authLogin, {
        onSuccess: (resData: TloginRes) => {
            const {success, resultCode, message, data} = resData;

            setAccessToken(data.accessToken);

            navigation.replace('Root')
        },
        onError: () => {

        }
    })

    const loginBtnOnPressHandler = () => {
        if(emailVal && passwordVal){
            loginMutateFn({email: emailVal, password: passwordVal})
        }
    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={styles.titleContainer}>
            <FlambusLogo width={120} height={31} />
        </View>
        <View style={{marginTop: 56, paddingHorizontal: 16}}>
            <Text style={{fontWeight: '600',fontSize: 24,lineHeight: 22,color: '#1A1A1A'}}>로그인</Text>
            <View style={{marginVertical: 16}}>
                <Atoms.PublicBorderInputBox
                    placeHolder='이메일을 입력하세요.'
                    value={emailVal}
                    onChangeHandler={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setEmailVal(event.nativeEvent.text)}
                    type='emailAddress'
                />
            </View>
            <Atoms.PublicBorderInputBox
                placeHolder='비밀번호를 입력하세요.'
                value={passwordVal}
                onChangeHandler={(event: NativeSyntheticEvent<TextInputChangeEventData>) => setPasswordVal(event.nativeEvent.text)}
                type='password'
            />
        </View>
        <View style={{marginTop: 16, paddingHorizontal: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Organisms.RadioButton
                isActive={radioIsActive}
                setIsActive={setRadioIsActive}
                color='#FFBA33'
                text='로그인 유지'
            />
            <Pressable>
                <Text style={styles.findPassword}>비밀번호 찾기</Text>
            </Pressable>
        </View>
        <View style={{marginTop: 16, paddingHorizontal: 16}}>
            <Pressable onPress={loginBtnOnPressHandler} style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>로그인 하기</Text>
            </Pressable>
        </View>
        <View style={{marginTop: 43, paddingHorizontal: 16}}>
            <Organisms.SocialLogin />
        </View>
        <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.createAccountDescription}>계정이 없으시다면?</Text>
            <Pressable onPress={() => navigation.push('EmailInput')}>
                <Text style={styles.createAccountText}>회원가입</Text>
            </Pressable>
        </View>
        <View style={{marginTop: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.termDescription}>회원가입 진행 시 </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Pressable>
                    <Text style={[styles.termDescription, {textDecorationLine: 'underline'}]}>개인정보 취급방침 처리</Text>
                </Pressable>
                <Text style={styles.termDescription}>, </Text>
                <Pressable>
                    <Text style={[styles.termDescription, {textDecorationLine: 'underline'}]}>서비스 이용약관 처리</Text>
                </Pressable>
                <Text style={styles.termDescription}>에 </Text>
            </View>
            <Text style={styles.termDescription}>동의하게 됩니다.</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    subTitleText: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 34,
        color: '#1A1A1A',
    },
    findPassword: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#999999',
    },
    loginBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 48,
        backgroundColor: '#FFBA33',
    },
    loginBtnText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        letterSpacing: -0.04,
        color: '#1A1A1A',
    },
    createAccountDescription:{
        marginRight: 8,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.04,
        color: '#999999',
    },
    createAccountText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        letterSpacing: -0.04,
        textDecorationLine: 'underline',
        color: '#FFBA33',
    },
    termDescription: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: -0.04,
        color: '#CCCCCC',
    }
})