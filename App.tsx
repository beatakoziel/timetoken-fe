import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from 'expo';
import Index from "./app/index";
import Index2 from "./app/index2";
import { StatusBar } from "react-native";


const Tab = createBottomTabNavigator();

function App() {
	return (
		<NavigationContainer>
			<StatusBar hidden={true}/>
		  <Tab.Navigator
			screenOptions={{ headerShown: false }}
		  >
			<Tab.Screen name="Home" component={Index} />
			<Tab.Screen name="Profile" component={Index2} />
		  </Tab.Navigator>
		</NavigationContainer>
	  );
	
}

export default registerRootComponent(App);