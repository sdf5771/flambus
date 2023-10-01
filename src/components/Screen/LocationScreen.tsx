import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import Organisms from '../Organisms';

function LocationScreen({navigation}) {
	return (
		<>
			<SafeAreaView
				style={{ flex: 0, backgroundColor: "#FFBA33" }}
			/>
			<View style={{flex: 1}}>
				<Organisms.LocationSearch />
				<Organisms.AcornView />
				<Organisms.KakaoMapView />
			</View>
		</>
	);
}

export default LocationScreen;
