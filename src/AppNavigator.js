import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { Login, Dashboard, DetailedView } from "./screens";

const LoginStack = createStackNavigator({
  Login: {
    screen: Login
  }
});

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  DetailedView: {
    screen: DetailedView
  }
});

const AppContainer = createSwitchNavigator({
  Login: { screen: LoginStack },
  Dashboard: { screen: DashboardStack }
});

export default createAppContainer(AppContainer);
