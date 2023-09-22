import React, {useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import Molecules from '../Molecules';

function LocationSearch(){
    const [locationValue, setLocationValue] = useState('');
    
    const locationTextOnChangeHandler = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text} = event.nativeEvent;
        setLocationValue(text)
    }

    return(
        <View style={styles.rootContainer}>
            <Text style={styles.titleText}>탐험</Text>
            <View style={styles.inputContainer}>
                <Molecules.LocationTextInput 
                    value={locationValue}
                    onChangeHandler={locationTextOnChangeHandler}
                    placeholder='경산시 하양읍'
                />
                <View style={styles.acornContainer}>
                    <Molecules.AcornCountButton />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#FFBA33',
        height: 132,
        padding: 16,
    },
    titleText: {
        marginTop: 24 - 16,
        // fontFamily: 'Pretendard',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: -0.04,
        color: '#1A1A1A',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 16,
    },
    acornContainer: {
        marginLeft: 10,
    }
})

export default LocationSearch;