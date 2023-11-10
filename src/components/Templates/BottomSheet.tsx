import React, { FunctionComponent, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View, Platform } from 'react-native'
import { Gesture, GestureDetector, GestureEventPayload, GestureUpdateEvent } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import useStoreDetailScreenStore from '../../Stores/useStoreDetailScreenStore'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

const BottomSheet = ({ChildrenComponent}: {ChildrenComponent: () => React.ReactNode}) => {
    const translateY = useSharedValue(0)
    const { setIsUsed } = useStoreDetailScreenStore();
    
    const scrollTo = useCallback((destination: number) => {
        "worklet";
        translateY.value = withSpring(destination, {damping: 50});
    }, [])

    const context = useSharedValue({ y: 0});

    

    const gesture = Gesture.Pan().onStart(() => {
        context.value = {y: translateY.value}
    }).onUpdate((event: any) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    }).onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3){
            // 만약 translateY 값이 SCREEN_HEIGHT 를 3으로 나눈 값보다 작을 경우 0으로 만들어 바텀 시트 종료
            scrollTo(0);
        } else if(translateY.value < -SCREEN_HEIGHT / 1.5){
            // 만약 translateY 값이 SCREEN_HEIGHT 를 1.5으로 나눈 값보다 클 경우 MAX_TRANSLATE_Y(최대값)으로 설정함
            scrollTo(MAX_TRANSLATE_Y + 130)
        }
    });

    useEffect(() => {
        scrollTo(-SCREEN_HEIGHT / 3)
    }, [])

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value, 
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y], 
            [25, 5],
            Extrapolate.CLAMP
            );

        return {
            borderRadius,
            transform: [{translateY: translateY.value}]
        }
    })

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                <View style={styles.line} />
                {ChildrenComponent ? <ChildrenComponent /> : null}
            </Animated.View>
        </GestureDetector>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 25,
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0,
                }
            },
            android: {
                elevation: 3,
            }
        })
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    },
})
