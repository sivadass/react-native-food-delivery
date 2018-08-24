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
import foodData from "../food-data.json";
import ListItem from "./ListItem";

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNaviagation = () => {
    this.props.navigation.navigate("Dishes");
  };
  render() {
    let restaurants = [
      {
        id: 1,
        name: "Master Dosa",
        key: "dosa"
      },
      {
        id: 2,
        name: "Master Dosa",
        key: "pizza"
      },
      {
        id: 3,
        name: "Master Dosa",
        key: "vegBriyani"
      }
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={foodData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              price={item.price}
              label={item.label}
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
