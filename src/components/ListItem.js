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
          elevation={2}
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginHorizontal: 16,
            marginVertical: 8,
            borderRadius: 6
          }}
        >
          <Image
            style={{
              width: 108,
              height: 108,
              borderTopLeftRadius: 6,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 6
            }}
            source={{ uri: this.props.image }}
          />
          <View
            style={{
              padding: 16
            }}
          >
            <CustomText
              style={{
                fontSize: 18
              }}
            >
              {this.props.name}
            </CustomText>
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
