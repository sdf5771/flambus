import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet } from 'react-native'
import React from 'react'

type Tprops = {
    type : 'emailAddress' | 'password' | 'text',
    placeHolder?: string,
    // setValue: React.Dispatch<React.SetStateAction<string>>,
    onChangeHandler : (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    value: string,
    isError?: boolean,
    errorMsg?: string,
}

export default function PublicBorderInputBox({placeHolder, type, onChangeHandler, value, isError, errorMsg}: Tprops) {
  return (
    <View>
      <View style={[styles.inputContainer, {borderColor: isError ? '#FF6D6D' : value.length >= 1 ? '#1a1a1a' : '#cccccc'}]}>
        <TextInput
          style={styles.input} 
          onChange={onChangeHandler}  
          value={value}
          secureTextEntry={type === 'password' ? true : false}
          placeholder={placeHolder}/>
      </View>
      {isError ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
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
    },
    errorText: {
      marginTop: 8,
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: -0.04,
      color: '#F45B43',
    }
})