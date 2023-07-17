import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import Screen from '../components/Screen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Root" component={BottomTabNavigator} />
			<Stack.Screen name="StoreRegionScreen" component={Screen.StoreRegionScreen} />
		</Stack.Navigator>
	);
}

export default RootNavigator;
