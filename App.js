import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import FormScreen from './screens/FormScreen';

const MainNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
});

const Dashboard = createStackNavigator({
  DashboardScreen: { screen: DashboardScreen },
});

const Form = createStackNavigator({
  FormScreen: { screen: FormScreen },
});

const TabScreens = createBottomTabNavigator({
  Escritorio: Dashboard,
  Formulario: Form,
});

const App = createSwitchNavigator({
  Auth: {
    screen: MainNavigator,
  },
  Dashboard: {
    screen: TabScreens,
  },
});

export default createAppContainer(App);
