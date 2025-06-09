import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
      screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} >
        </Tab.Screen>
      </Tab.Navigator>
  );
}
