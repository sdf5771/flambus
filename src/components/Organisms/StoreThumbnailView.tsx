import { View, Text, Image, StyleSheet, Button, Pressable, Dimensions } from 'react-native'
import React from 'react'

type Tprops = {
    creator: {
        memberIdx: number,
        memberName: string,
    } | null,
    reviewImage : {
        fileName: string,
        fileSize: number,
        imageUrl: string,
    } | null,
    journalsCount : number
}

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

export default function StoreThumbnailView({creator, reviewImage, journalsCount}:Tprops) {
    console.log('creator ', creator)
    console.log('reviewImage ', reviewImage)
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>이 가게의 대표 사진</Text>
      </View>
      <View style={styles.imageContainer}>
        {
            reviewImage ? 
            <Image 
                source={{uri: reviewImage.imageUrl}} 
                style={styles.thumbnailImage} 
                resizeMode='cover'/>
            : null
        }
      </View>
      <View>
        <Pressable style={styles.pressableBtn}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#FFBA33'}}>탐험일지 {journalsCount}개 보기</Text>
            <Text style={{fontSize: 10, fontWeight: 'bold', marginTop: 4, color: '#808080'}}>도토리를 1개 소모해요!</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 16,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    titleContainer: {
        marginTop: 16,
    },
    titleText: {
        fontWeight: '600',
        fontSize: 16,
        color: '#202020',
    },
    imageContainer: {
        marginTop: 16,

    },
    thumbnailImage:{
        height: 158,
        borderRadius: 8,
    },
    pressableBtn: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 54,
        borderRadius: 8,
        backgroundColor: '#1A1A1A'
    },
})