import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class EmptyCart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require("../../../assets/empty-bag.png")}
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
          <EmptyCart />
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

export default EmptyCart;
