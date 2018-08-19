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
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 16,
            backgroundColor: "#ffffff",
            margin: 4
          }}
        >
          <Image
            style={{ width: 90, height: 90, marginRight: 16 }}
            source={{ uri: this.props.image }}
          />
          <View>
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
              {this.props.cuisine}
            </Text>
            <Text
              style={{
                fontSize: 14
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
