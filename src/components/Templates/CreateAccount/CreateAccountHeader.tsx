import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { LeftArrow } from '../../../assets/svg-components'
import { NavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export default function CreateAccountHeader({navigation}) {
  return (
    <View style={styles.root}>
        <Pressable onPress={() => navigation.goBack()}>
            <LeftArrow width={24} height={24} />
        </Pressable>
        <View style={{marginTop: 19}}>
            <Text style={styles.titleText}>회원가입</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        marginTop: 24,
        marginHorizontal: 16,
    },
    titleText: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.04,
        textDecorationLine: 'underline',
        color: '#FFBA33',
    }
})