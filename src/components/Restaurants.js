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
          data={restaurants}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              image={Constants.RESTAURANT_ICONS[item.key]}
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
