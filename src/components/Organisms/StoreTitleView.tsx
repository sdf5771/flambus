import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const {width: SCREEN_WIDTH} = Dimensions.get('window')

type TStoreTitleViewProps = {
    "storeIdx": number,
    "storeName": string,
    "storeAddress": string,
    "contactNumber": string,
    "expJournalsCount": number,
    "ownExpSiteCount": number,
    "representTag": null,
    "representJournal": null
}

export default function StoreTitleView() {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>

        <View style={styles.titleHeader}>
            <View>

                <Text>신선했던</Text>
            </View>
            <View>

                <Text>나만의 탐험지 지정</Text>
            </View>
        </View>

        <View style={styles.storeTitleContainer}>
            <Text style={styles.titleTextStyle}>긴자료코 경산 하점점</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                    <Text style={styles.defaultBoldText}>16</Text>
                </View>
                <View style={styles.lineVertical} />
                <View style={styles.journalCountContainer}>
                    <Text style={[styles.defaultBoldText, {marginRight: 6}]}>탐험일지</Text>
                    <Text style={styles.defaultBoldText}>32개</Text>
                </View>
            </View>
        </View>

      </View>

      <View style={styles.lineHorizontal} />

      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={[{width: 50}, styles.defaultBoldText]}>주소</Text>
            <Text style={styles.defaultSemiText}>경북 경산시 하양읍 서사도리9로 25 드림스퀘어 1106호</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 16}}>
            <Text style={[{width: 50}, styles.defaultBoldText]}>전화번호</Text>
            <Text style={styles.defaultSemiText}>053-123-4567</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: SCREEN_WIDTH - 32,
        marginHorizontal: 16,
    },
    titleContainer: {

    },
    titleHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    storeTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    titleTextStyle: {
        // fontFamily: 'Pretendard',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        color: '#202020'
    },
    journalCountContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    defaultBoldText:{
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 22,
        color: '#1A1A1A',
    },
    defaultSemiText:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#333333',
    },
    lineHorizontal: {
        width: '100%',
        height: 1,
        backgroundColor: '#F1F1F1',
        alignSelf: 'center',
        marginVertical: 16,
    },
    lineVertical: {
        width: 1,
        height: 16,
        backgroundColor: '#F1F1F1',
        alignSelf: 'center',
        marginHorizontal: 8,
    }
})