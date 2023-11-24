import { View, Text } from 'react-native'
import React from 'react'
import CreateAccountTemplete from '../../Templates/CreateAccount'

export default function NickNameInputScreen({navigation}) {
  return (
    <View>
        <CreateAccountTemplete.CreateAccountHeader navigation={navigation} />
      <Text>NickNameInputScreen</Text>
    </View>
  )
}