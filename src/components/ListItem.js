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
            backgroundColor: this.state.isClicked ? "#eee" : "#f5f5f5",
            margin: 8
          }}
        >
          <Image
            style={{ width: 64, height: 64, marginRight: 16 }}
            source={this.props.image}
          />
          <Text
            style={{
              fontSize: 17
            }}
          >
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});
