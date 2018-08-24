import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";
import CartScreen from "./components/Cart";

const RootStack = createStackNavigator({
  Restaurants: {
    screen: RestaurantsScreen,
    navigationOptions: {
      title: "Restaurants",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerRight: (
        <TouchableOpacity
          //style={styles.button}
          onPress={() => {
            navigate("Cart");
          }}
        >
          <Image
            style={{ width: 32, height: 32, marginRight: 16 }}
            source={require(".././assets/shopping-bag.png")}
          />
        </TouchableOpacity>
      )
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
      title: "Cart"
    }
  }
});

export default RootStack;
