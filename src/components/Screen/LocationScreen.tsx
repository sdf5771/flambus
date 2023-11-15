import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import Organisms from '../Organisms';
import store from '../../Stores';

function LocationScreen({navigation}) {
	const {isOpen: acornViewIsOpen} = store.useAcornViewStore();	
	return (
		<>
			<SafeAreaView
				style={{ flex: 0, backgroundColor: "#FFBA33" }}
			/>
			<View style={{flex: 1}}>
				<Organisms.LocationSearch />
				{acornViewIsOpen ? 
					<Organisms.AcornView />
				: null}
				<Organisms.KakaoMapView />
			</View>
		</>
	);
}

export default LocationScreen;
