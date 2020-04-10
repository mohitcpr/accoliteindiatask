import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

class Message extends Component {
  render() {
    return (
      <View style={styles.message}>
        <Text style={styles.icon}>Icon</Text>
        <Text style={styles.messageText}>
          Price and availability of your item has been changed
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: "lightyellow",
    flexDirection: "row",
    padding: 10
  },
  messageText: {
    marginLeft: 10
  }
});

export default Message;
