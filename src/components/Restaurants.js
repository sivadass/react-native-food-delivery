import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import Constants from "../utils/constants";
import restaurantsData from "../api/restaurants.json";
import ListItem from "./ListItem";
import RestaurantItem from "./RestaurantItem";

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNaviagation = () => {
    this.props.navigation.navigate("Dishes");
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={restaurantsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RestaurantItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              location={item.location}
              isVegetarian={item.isVegetarian}
              handleNaviagation={this.handleNaviagation}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
    //marginTop: 16,
    //marginBottom: 16
  },

  title: {
    fontSize: 24,
    color: "#4099ff",
    margin: 8
  },

  listItem: {
    flex: 1
  }
});
