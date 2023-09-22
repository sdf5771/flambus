import React, {useState} from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { AcornLogoActive, AcornLogoDefault, AcornButtonLineDefault, AcornButtonLineActive } from '../../assets/svg-components';

function AcornCountButton(){
    const [acornActive, setAcornActive] = useState<boolean>(false);
    
    const stateObj = {
        rootStyle: acornActive ? styles.acornRootActive : styles.acornRootDefault,
        logoComponent: acornActive ? AcornLogoActive : AcornLogoDefault,
        lineComponent: acornActive ? AcornButtonLineActive : AcornButtonLineDefault,
        textStyle: acornActive ? styles.textActive : styles.textDefault,
    }
    
    const onPressHandler = () => {
        setAcornActive(!acornActive);
    }
    
    return (
        <TouchableOpacity onPress={onPressHandler} style={stateObj.rootStyle}>
            <stateObj.logoComponent />
            <View style={styles.lineContainer}>
                <stateObj.lineComponent />
            </View>
            <Text style={stateObj.textStyle}>5</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    acornRootDefault: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 6,
        width: 76,
        height: 44,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#333333',
        borderStyle: 'solid',
        backgroundColor: "#333333"
    },
    acornRootActive: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 6,
        width: 76,
        height: 44,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#333333',
        borderStyle: 'solid',
        backgroundColor: "#FFBA33"
    },
    lineContainer: {
        marginHorizontal: 5,
    },
    textDefault: {
        marginLeft: 5,
        color: "#FFBA33"
    },
    textActive: {
        marginLeft: 5,
        color: "#333333"
    }
})

export default AcornCountButton;