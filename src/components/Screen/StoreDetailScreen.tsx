import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Templates from '../Templates'
import Organisms from '../Organisms'

const StoreDetailScreen = () => {
  return (
    <Templates.BottomSheet ChildrenComponent={() => (
        <ScrollView>
            <Organisms.StoreTitleView />
            <View style={styles.marginVerticalView}/>
        </ScrollView>
      )} />
  )
}

export default StoreDetailScreen

const styles = StyleSheet.create({
    screenRoot: {

    },
    marginVerticalView: {
        backgroundColor: '#f1f1f1',
        height: 8,
    }
})