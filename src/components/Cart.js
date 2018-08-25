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
        <View>
          <Image
            source={require("../../assets/empty-bag.png")}
            style={{ width: 150, height: 150, marginBottom: 12 }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "#ef6136",
              fontSize: 18,
              opacity: 0.55
            }}
          >
            Cart is empty!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 24,
    color: "#4099ff",
    margin: 8
  }
});
