import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from '../navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screen from '../components/Screen';
import store from '../Stores';

const Stack = createNativeStackNavigator();

function RootNavigator() {
	const {isUsed, setIsUsed, storeData, setStoreData} = store.useStoreDetailScreenStore();
	console.log('isUsed', isUsed)
	return (
		<GestureHandlerRootView style={{flex: 1}}>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="Root" component={Navigator.BottomTabNavigator} />
			</Stack.Navigator>
			{isUsed ? <Screen.StoreDetailScreen /> : null}
		</GestureHandlerRootView>
	);
}

export default RootNavigator;
