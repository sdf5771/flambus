import { View, Text } from 'react-native'
import React from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'

export default function PasswordInputScreen({navigation}) {
  return (
    <View>
        <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
      <Text>PasswordInputScreen</Text>
    </View>
  )
}