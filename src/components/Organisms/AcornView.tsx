import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import {AcornChargeLogoDefault, AcornChargeLogoActive} from '../../assets/svg-components';
function AcornView(){

    return (
        <View style={styles.acornViewRoot}>
            <View style={styles.container}>
                <View style={styles.acorn_charge_container}>
                    <Text style={styles.acorn_charge_text}>도토리 보급까지 6일</Text>
                </View>
                <View>
                    <Text style={styles.title_text}>현재 남아있는 도토리가 없어요.</Text>
                </View>
                <View style={styles.acorn_img_container}>
                    <AcornChargeLogoDefault width={40} height={40} />
                    <AcornChargeLogoDefault width={40} height={40} />
                    <AcornChargeLogoDefault width={40} height={40} />
                    <AcornChargeLogoDefault width={40} height={40} />
                    <AcornChargeLogoDefault width={40} height={40} />
                </View>
                <View style={styles.description_container}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            width: 1,
                            height: 1,
                            borderStyle: 'dotted',
                            borderWidth: 1,
                            borderRadius: 1,
                            borderColor: '#FFBA33',
                            marginRight: 4,
                        }}>
                        </View>
                        <Text style={styles.description_text}>도토리는 매주 5개씩 보급받을 수 있어요.</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            width: 1,
                            height: 1,
                            borderStyle: 'dotted',
                            borderWidth: 1,
                            borderRadius: 1,
                            borderColor: '#FFBA33',
                            marginRight: 4,
                        }}>
                        </View>
                        <Text style={styles.description_text}>탐험일지를 작성하면 도토리를 보급 받을 수 있어요.</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            width: 1,
                            height: 1,
                            borderStyle: 'dotted',
                            borderWidth: 1,
                            borderRadius: 1,
                            borderColor: '#FFBA33',
                            marginRight: 4,
                        }}>
                        </View>
                        <Text style={styles.description_text}>탐험일지는 하루에 두 번 작성 가능해요.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    acornViewRoot: {
        zIndex: 3,
        elevation: 3,
        position: 'relative',
    },
    container: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 210,
        padding: 16,
        backgroundColor: '#333333',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    acorn_charge_container:{
        display: 'flex',
        width: 100,
        borderRadius: 4,
        backgroundColor: '#FFBA33',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    acorn_charge_text: {
        fontWeight: '600',
        fontSize: 10,
        lineHeight: 12,
    },
    title_text: {
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        color: '#FFBA33',
    },
    acorn_img_container: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 232,
        height: 40,
    },
    description_container: {
        marginTop: 16,
        display: 'flex',
        width: 327,
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#494949',
        borderRadius: 8,
    },
    description_text: {
        fontWeight: '600',
        fontSize: 10,
        color: '#FFBA33',
        marginVertical: 4,
    }
})

export default AcornView;