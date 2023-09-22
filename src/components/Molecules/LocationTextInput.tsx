import React from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet, TextInput, Pressable} from 'react-native';

type TLocationTextInput = {
    value?: string;
    placeholder?: string;
    onChangeHandler?: React.ChangeEventHandler;
}

function LocationTextInput({value, placeholder, onChangeHandler}: TLocationTextInput){
    return(
        <Pressable style={styles.rootContainer}>
            <View style={styles.logoContainer}>

            </View>
            <TextInput 
                style={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8
    },
    logoContainer: {
        width: 24,
        height: 24,
    },
    input: {
        flex: 5
    }
})

export default LocationTextInput;