import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from '../navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screen from '../components/Screen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
	
	return (
		<GestureHandlerRootView style={{flex: 1}}>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="Root" component={Navigator.BottomTabNavigator} />
			</Stack.Navigator>
			<Screen.BottomSheet />
		</GestureHandlerRootView>
	);
}

export default RootNavigator;
