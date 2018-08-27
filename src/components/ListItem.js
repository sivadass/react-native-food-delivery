import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

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
                fontSize: 18,
                color: "#333"
              }}
            >
              {this.props.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666"
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
                color: "#999"
              }}
            >
              {this.props.label}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
                //width: "100%"
              }}
            >
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "#ef6136"
                }}
              >
                {this.props.price}
              </Text>
              {/* <Button
                onPress={e => alert("Hey")}
                title="ADD"
                style={{
                  backgroundColor: "4099ff",
                  color: "#fff",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8
                }}
              /> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
