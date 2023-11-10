import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Templates from '../Templates'
import Organisms from '../Organisms'
import useStoreDetailScreenStore from '../../Stores/useStoreDetailScreenStore'

const StoreDetailScreen = () => {
  const {storeData} = useStoreDetailScreenStore();
  return (
    <Templates.BottomSheet ChildrenComponent={() => (
        <ScrollView>
            <Organisms.StoreTitleView 
              storeIdx={storeData.storeIdx}
              storeName={storeData.storeName} 
              storeAddress={storeData.storeAddress} 
              contactNumber={storeData.contactNumber}
              expJournalsCount={storeData.expJournalsCount} 
              ownExpSiteCount={storeData.ownExpSiteCount}
              representTag={storeData.representTag} 
              representJournal={storeData.representJournal} 
            />
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