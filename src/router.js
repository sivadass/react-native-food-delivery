import React from "react";
import { Button, TouchableOpacity, Text, Image } from "react-native";
import { createStackNavigator } from "react-navigation";
import RestaurantsScreen from "./components/Restaurants";
import DishesScreen from "./components/Dishes";

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
          onPress={() => alert("This is a button!")}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri:
                "https://res.cloudinary.com/sivadass/image/upload/v1514632574/icons/findowtt.svg"
            }}
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
  }
});

export default RootStack;
