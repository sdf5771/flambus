import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import Templates from '../Templates'
import Organisms from '../Organisms'
import useStoreDetailScreenStore from '../../Stores/useStoreDetailScreenStore'

const StoreDetailScreen = () => {
  const {isUsed, storeData} = useStoreDetailScreenStore();
  console.log('storeData ', storeData)
  console.log('isUsed ', isUsed)
  return (
    <>
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
            <Organisms.StoreThumbnailView
              creator={storeData.representJournal ? storeData.representJournal.creator : null}
              reviewImage={storeData.representJournal ? storeData.representJournal.reviewImage[0] : null}
              journalsCount={storeData.expJournalsCount}
            />
          </ScrollView>
      )} />
      <View style={styles.floatBtnContainer}>
        <Pressable style={styles.writeJounalBtn}>
          <Text style={{fontSize: 16, fontWeight: '700', color: '#1A1A1A'}}>탐험일지 작성</Text>
          <Text style={{fontSize: 12, fontWeight: '700', color: '#B77719'}}>작성 가능 횟수 2회</Text>
        </Pressable>
      </View>	
    </>
  )
}

export default StoreDetailScreen

const styles = StyleSheet.create({
    screenRoot: {

    },
    marginVerticalView: {
        backgroundColor: '#f1f1f1',
        height: 8,
    },
    floatBtnContainer:{
      zIndex: 5,
      bottom: 0,
      position: "absolute",
      width: "100%",
    },
    writeJounalBtn: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: 54,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#FFBA33",
    }
})