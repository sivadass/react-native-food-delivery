import React from "react";
import { Text } from "react-native";

class CustomText extends React.Component {
  render() {
    return <Text style={{ fontSize: 13 }}>{this.props.children}</Text>;
  }
}

export default CustomText;
