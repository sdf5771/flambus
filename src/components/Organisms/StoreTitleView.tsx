import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { MenuLogoActive, MoodLogoActive, ServiceLogoActive } from '../../assets/svg-components/journalFilter'
import { FlagBlackLogo } from '../../assets/svg-components'

const {width: SCREEN_WIDTH} = Dimensions.get('window')

type TStoreTitleViewProps = {
    "storeIdx": number,
    "storeName": string,
    "storeAddress": string,
    "contactNumber": string,
    "expJournalsCount": number,
    "ownExpSiteCount": number,
    "representTag": {
        tagIdx: number,
        tagName: string
    } | null,
    "representJournal": {
        reviewIdx: number,
        likeCount: number,
        creator: {
            memberIdx: number,
            memberName: string
        },
        "reviewImage": {
            fileName: string,
            fileSize: number,
            imageUrl: number,
        }[]
    } | null
}

export default function StoreTitleView({storeIdx, storeName, storeAddress, contactNumber, expJournalsCount, ownExpSiteCount, representTag, representJournal}: TStoreTitleViewProps) {
    // tag 인덱스의 첫 번째 문자에 따라 로고 컴포넌트를 리턴
    let LogoComponent = null;
    let tagIdx = representTag?.tagIdx
    if(tagIdx){
        const firstIdx = tagIdx.toString().charAt(0);
        if(firstIdx === '1'){
            LogoComponent = MenuLogoActive
        } else if(firstIdx === '2'){
            LogoComponent = ServiceLogoActive
        } else if(firstIdx === '3'){
            LogoComponent = MoodLogoActive
        }
    }
    return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>

        <View style={styles.titleHeader}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                {LogoComponent ? <LogoComponent/> : null}
                <Text style={styles.freshStoreText}>{representTag?.tagName}</Text>
            </View>
            <View style={styles.favStoreContainer}>
                <FlagBlackLogo style={{marginTop: 7}} />
                <Text style={styles.favStoreText}>나만의 탐험지 지정</Text>
            </View>
        </View>

        <View style={styles.storeTitleContainer}>
            <Text style={styles.titleTextStyle}>{storeName}</Text>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 8}}>
                <View style={styles.flagContainer}>
                    <FlagBlackLogo style={{marginTop: 3}} />
                    <Text style={[styles.defaultBoldText, {marginLeft: 3}]}>{ownExpSiteCount}</Text>
                </View>
                <View style={styles.lineVertical} />
                <View style={styles.journalCountContainer}>
                    <Text style={[styles.defaultBoldText, {marginRight: 6}]}>탐험일지</Text>
                    <Text style={styles.defaultBoldText}>{expJournalsCount}개</Text>
                </View>
            </View>
        </View>

      </View>

      <View style={styles.lineHorizontal} />

      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={[{width: 55}, styles.defaultBoldText]}>주소</Text>
            <Text style={styles.defaultSemiText}>{storeAddress}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 16}}>
            <Text style={[{width: 55}, styles.defaultBoldText]}>전화번호</Text>
            <Text style={styles.defaultSemiText}>{contactNumber}</Text>
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
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    titleTextStyle: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        color: '#202020'
    },
    favStoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flagContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
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
    favStoreText: {
        fontWeight: '600',
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#1A1A1A',
    },
    lineHorizontal: {
        width: '100%',
        height: 1,
        backgroundColor: '#F1F1F1',
        alignSelf: 'center',
        marginVertical: 16,
    },
    freshStoreText: {
        marginTop: 6,
        marginLeft: 6,
        fontWeight: '700',
        fontSize: 10,
        lineHeight: 12,
        color: '#B77719'
    },
    lineVertical: {
        width: 1,
        height: 16,
        backgroundColor: '#F1F1F1',
        alignSelf: 'center',
        marginHorizontal: 8,
    }
})