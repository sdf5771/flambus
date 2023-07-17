import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen from '../components/Screen';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faHouse, faSearch, faBell, faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
	return (
		<Tab.Navigator initialRouteName="홈" screenOptions={{headerShown: false}}>
			<Tab.Screen
				name="홈"
				component={Screen.HomeScreen}
				// options={{
				// 	tabBarIcon: ({color, size}) => (
				// 		<FontAwesomeIcon icon={faHouse} size={size} color={color} />
				// 	),
				// }}
			/>
			<Tab.Screen
				name="검색"
				component={Screen.SearchScreen}
				// options={{
				// 	tabBarIcon: ({color, size}) => (
				// 		<FontAwesomeIcon icon={faSearch} size={size} color={color} />
				// 	),
				// }}
			/>
			<Tab.Screen
				name="소식"
				component={Screen.NewsScreen}
				// options={{
				// 	tabBarIcon: ({color, size}) => (
				// 		<FontAwesomeIcon icon={faBell} size={size} color={color} />
				// 	),
				// }}
			/>
			<Tab.Screen
				name="내 정보"
				component={Screen.UserInfoScreen}
				// options={{
				// 	tabBarIcon: ({color, size}) => (
				// 		<FontAwesomeIcon icon={faUser} size={size} color={color} />
				// 	),
				// }}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNavigator;
