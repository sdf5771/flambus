import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProgressBar({page, pages}: {page: number, pages: number}) {
  return (
    <View style={styles.root}>
      <View style={[styles.progressBar, {width: `${page * 100 / pages}%`}]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: '100%',
        height: 5,
        backgroundColor: '#FFF7D7'
    },
    progressBar: {
        height: 5,
        backgroundColor: '#FFD066'
    }
})