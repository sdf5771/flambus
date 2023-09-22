import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from '../navigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
	
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Root" component={Navigator.BottomTabNavigator} />
		</Stack.Navigator>
	);
}

export default RootNavigator;
