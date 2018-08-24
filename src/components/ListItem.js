import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import CustomText from "../components/common/CustomText";
import Constants from "../utils/constants";

export default class ListItem extends React.Component {
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
          //elevation={2}
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginHorizontal: 24,
            marginVertical: 8,
            borderRadius: 4,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1
            }
          }}
        >
          <Image
            style={{
              width: 108,
              height: 108,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 4
            }}
            source={{ uri: this.props.image }}
          />
          <View
            style={{
              padding: 16
            }}
          >
            <Text
              style={{
                fontSize: 18
              }}
            >
              {this.props.name}
            </Text>
            <Text
              style={{
                fontSize: 14
              }}
            >
              {this.props.cuisine},{" "}
              {this.props.isVegetarian ? (
                <Text
                  style={{
                    color: "#fff",
                    backgroundColor: "#4caf50",
                    fontWeight: "bold"
                  }}
                >
                  V
                </Text>
              ) : (
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    backgroundColor: "#a92319",
                    padding: 2
                  }}
                >
                  NV
                </Text>
              )}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 4
              }}
            >
              {this.props.label}
            </Text>
            <Text
              style={{
                fontSize: 21,
                fontWeight: "bold"
              }}
            >
              {this.props.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
