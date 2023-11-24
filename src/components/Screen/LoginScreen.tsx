import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Button } from 'react-native'
import { FlambusLogo } from '../../assets/svg-components'
import Atoms from '../Atoms'
import Organisms from '../Organisms';

export default function LoginScreen({navigation}) {
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [radioIsActive, setRadioIsActive] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={styles.titleContainer}>
            <FlambusLogo width={76} height={20} />
        </View>
        <View style={{marginTop: 44, paddingHorizontal: 16}}>
            <Text style={styles.subTitleText}>플램버스와 함께</Text>
            <Text style={styles.subTitleText}>나만의 맛집 지도를</Text>
            <Text style={styles.subTitleText}>만들어봐요!</Text>
        </View>
        <View style={{marginTop: 40, paddingHorizontal: 16}}>
            <Text style={{fontWeight: '600',fontSize: 16,lineHeight: 22,color: '#1A1A1A'}}>로그인</Text>
            <View style={{marginVertical: 8}}>
                <Atoms.PublicBorderInputBox
                    placeHolder='이메일을 입력하세요.'
                    value={emailVal}
                    setValue={setEmailVal}
                    type='emailAddress'
                />
            </View>
            <Atoms.PublicBorderInputBox
                placeHolder='비밀번호를 입력하세요.'
                value={passwordVal}
                setValue={setPasswordVal}
                type='password'
            />
        </View>
        <View style={{marginTop: 24, paddingHorizontal: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Organisms.RadioButton
                isActive={radioIsActive}
                setIsActive={setRadioIsActive}
                color='#FFBA33'
                text='자동 로그인'
            />
            <Pressable>
                <Text style={styles.findPassword}>비밀번호 찾기</Text>
            </Pressable>
        </View>
        <View style={{marginTop: 16, paddingHorizontal: 16}}>
            <Pressable style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>로그인 하기</Text>
            </Pressable>
        </View>
        <View style={{marginTop: 43, paddingHorizontal: 16}}>
            <Organisms.SocialLogin />
        </View>
        <View style={{marginTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.createAccountDescription}>계정이 없으시다면?</Text>
            <Pressable onPress={() => navigation.push('EmailInput')}>
                <Text style={styles.createAccountText}>회원가입</Text>
            </Pressable>
        </View>
        <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.termDescription}>회원가입 진행 시 </Text>
            <Pressable>
                <Text style={[styles.termDescription, {textDecorationLine: 'underline'}]}>개인정보 취급방침 처리</Text>
            </Pressable>
            <Text style={styles.termDescription}>, </Text>
            <Pressable>
                <Text style={[styles.termDescription, {textDecorationLine: 'underline'}]}>서비스 이용약관 처리</Text>
            </Pressable>
            <Text style={styles.termDescription}>에 동의하게 됩니다.</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 24,
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
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#999999',
    },
    loginBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 42,
        backgroundColor: '#FFBA33',
    },
    loginBtnText: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 17,
        letterSpacing: -0.04,
        color: '#1A1A1A',
    },
    createAccountDescription:{
        marginRight: 8,
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.04,
        color: '#999999',
    },
    createAccountText: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',
        letterSpacing: -0.04,
        textDecorationLine: 'underline',
        color: '#FFBA33',
    },
    termDescription: {
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 14,
        textAlign: 'center',
        letterSpacing: -0.04,
        color: '#CCCCCC',
    }
})