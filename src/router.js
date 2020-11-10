import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "./components/Cart";
import DishesScreen from "./components/Dishes";
import RestaurantsScreen from "./components/Restaurants";

const RootStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: "Food Shop"
    }
  },
  Dishes: {
    screen: DishesScreen,
    navigationOptions: {
      title: "Dishes"
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      title: "Cart",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
});

export default createAppContainer(RootStack);
