import { Pressable ,View, Text, StyleSheet, GestureResponderEvent } from 'react-native'
import React from 'react'

type Tprops = {
    text? : string,
    color? : string,
    isActive : boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RadioButton({text, color, isActive, setIsActive}: Tprops) {
    const onPressHandler = (event: GestureResponderEvent) => {
        setIsActive(!isActive)
    }
  return (
    <Pressable style={{display: 'flex', flexDirection: 'row'}} onPress={onPressHandler}>
      <View style={[styles.parentCircle, {borderColor: color ? color : '#1a1a1a'}]}>
        {isActive ? <View style={[styles.childCircle, {backgroundColor: color ? color : '#1a1a1a'}]}></View> : null}
      </View>
      { text ? <Text style={{marginLeft: 4}}>{text}</Text> : null }
    </Pressable>
  )
}

const styles = StyleSheet.create({
    parentCircle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 16,
        height: 16,
        borderWidth: 1,
        borderRadius: 16,
        borderStyle: 'solid',
    },
    childCircle: {
        width: 8,
        height: 8,
        borderRadius: 8,
    }
})