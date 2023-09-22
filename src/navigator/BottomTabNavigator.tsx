import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen from '../components/Screen';
import { LocationLogo, SearchLogo, CommunityLogo, MyPageLogo } from '../assets/bottom-tab-navigator/svg-components';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
	return (
		<Tab.Navigator initialRouteName="홈" screenOptions={{headerShown: false, tabBarShowLabel: false,}}>
			<Tab.Screen
				name="지도"
				component={Screen.LocationScreen}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<LocationLogo color={focused ? "#FFBA33" : "#CCCCCC"}/>
					),
				}}
			/>
			<Tab.Screen
				name="상세검색"
				component={Screen.SearchScreen}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<SearchLogo color={focused ? "#FFBA33" : "#CCCCCC"}/>
					),
				}}
			/>
			<Tab.Screen
				name="커뮤니티"
				component={Screen.CommunityScreen}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<CommunityLogo color={focused ? "#FFBA33" : "#CCCCCC"}/>
					),
				}}
			/>
			<Tab.Screen
				name="마이페이지"
				component={Screen.MyPageScreen}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<MyPageLogo color={focused ? "#FFBA33" : "#CCCCCC"}/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomTabNavigator;
