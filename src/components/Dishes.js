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
import ListItem from "./ListItem";

export default class Dishes extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNaviagation = () => {
    this.props.navigation.navigate("Restaurants");
  };
  render() {
    let dishes = [
      {
        id: 1,
        name: "Paneer Dosa",
        key: "paneerDosa"
      },
      {
        id: 2,
        name: "Palak Briyani",
        key: "palakBiryani"
      },
      {
        id: 3,
        name: "Marghrita Pizza",
        key: "margherita"
      }
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={dishes}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              image={Constants.DISH_ICONS[item.key]}
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
    marginTop: 24,
    backgroundColor: "#f5f5f5",
    width: "100%"
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
