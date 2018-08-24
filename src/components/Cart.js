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

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNaviagation = () => {
    this.props.navigation.navigate("Restaurants");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Cart page</Text>
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
