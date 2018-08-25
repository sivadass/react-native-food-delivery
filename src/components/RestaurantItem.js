import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import CustomText from "../components/common/CustomText";
import Constants from "../utils/constants";

export default class RestaurantItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }
  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    this.props.handleNaviagation();
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        <View
          style={{
            marginHorizontal: 24,
            marginVertical: 8,
            borderRadius: 6,
            height: 160
          }}
        >
          <Image
            style={{
              backgroundColor: "#ccc",
              flex: 1,
              position: "absolute",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              borderRadius: 6
            }}
            source={{ uri: this.props.image }}
          />
          <View
            style={{
              padding: 16,
              position: "absolute",
              width: "100%",
              height: "100%",
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.55)",
              borderRadius: 6
            }}
          >
            <Text
              style={{
                fontSize: 32,
                fontWeight: "700",
                color: "#ffffff"
              }}
            >
              {this.props.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#ffffff"
              }}
            >
              {this.props.cuisine},{" "}
              {this.props.isVegetarian ? (
                <Text style={{ color: "#4caf50", fontWeight: "bold" }}>
                  Veg
                </Text>
              ) : (
                <Text style={{ color: "#a92319", fontWeight: "bold" }}>
                  Non-Veg
                </Text>
              )}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#ffffff"
              }}
            >
              {this.props.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
