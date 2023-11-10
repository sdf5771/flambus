import { View, Text, Image, StyleSheet } from 'react-native'
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
    } | null
}

export default function StoreThumbnailView({creator, reviewImage}:Tprops) {
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

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 16,
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
    }
})