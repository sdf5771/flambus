import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet } from 'react-native'
import React from 'react'

type Tprops = {
    type : 'emailAddress' | 'password' | 'text',
    placeHolder?: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
}

export default function PublicBorderInputBox({placeHolder, type, setValue, value}: Tprops) {
    const inputOnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValue(event.nativeEvent.text)
    }
    
  return (
    <View style={[styles.inputContainer, {borderColor: value.length >= 1 ? '#1a1a1a' : '#cccccc'}]}>
      <TextInput
        style={styles.input} 
        textContentType={type}
        onChange={inputOnChangeHandler}  
        value={value}
        secureTextEntry={type === 'password' ? true : false}
        placeholder={placeHolder}/>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        display:  'flex',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 44,
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    input: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -0.04,
    }
})