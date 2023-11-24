import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'
import { NavigationProp } from '@react-navigation/native'
import Atoms from '../../Atoms'

export default function EmailInputScreen({navigation}: {navigation: NavigationProp}) {
    const [emailVal, setEmailVal] = useState('');

    const onPressHandler = () => {
        const regex = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i

        if(regex.test(emailVal)){
            navigation.push('EmailAuth', {email: emailVal})
        }
    }
  return (
    <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#ffffff'}}>
        <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
      <View style={styles.inputContainer}>
            <Text style={styles.titleText}>이메일</Text>
            <View style={{marginTop: 8}}>
                <Atoms.PublicBorderInputBox
                    placeHolder='이메일을 입력하세요.'
                    value={emailVal}
                    setValue={setEmailVal}
                    type='emailAddress'
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