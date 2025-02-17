import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {registerRootComponent} from "expo";
import Index from "./app/index";
import Index2 from "./app/index2";
import {StatusBar} from "react-native";
import ProjectScreen from "@/app/ProjectScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export type RootStackParamList = {
    ProjectScreen: undefined;
};

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={Index}/>
            <Stack.Screen name="ProjectScreen" component={ProjectScreen}/>
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <StatusBar hidden={true}/>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Profile" component={Index2}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default registerRootComponent(App);
