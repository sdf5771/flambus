import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigator from '../navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screen from '../components/Screen';
import CreateAccountScreen from '../components/Screen/CreateAccount';
import store from '../Stores';
import {useAuth} from '../hooks';

const Stack = createNativeStackNavigator();

function RootNavigator() {
	const {isUsed, setIsUsed, storeData, setStoreData} = store.useStoreDetailScreenStore();
	const {isLoggedIn} = useAuth();

	console.log('isUsed', isUsed)
	console.log('isLoggedIn', isLoggedIn)
	return (
		<GestureHandlerRootView style={{flex: 1}}>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				{
					isLoggedIn ? 
						null
					: <Stack.Screen name='Login' component={Screen.LoginScreen} />
				}
				<Stack.Screen name="Root" component={Navigator.BottomTabNavigator} />
				<Stack.Screen name='EmailInput' component={CreateAccountScreen.EmailInputScreen} />
				<Stack.Screen name='EmailAuth' component={CreateAccountScreen.EmailAuthScreen} />
				<Stack.Screen name='PasswordInput' component={CreateAccountScreen.PasswordInputScreen} />
				<Stack.Screen name='NickNameInput' component={CreateAccountScreen.NickNameInputScreen} />
				<Stack.Screen name='SignUpComplete' component={CreateAccountScreen.SignUpCompleteScreen} />
			</Stack.Navigator>
			{isUsed ? <Screen.StoreDetailScreen /> : null}
		</GestureHandlerRootView>
	);
}

export default RootNavigator;
