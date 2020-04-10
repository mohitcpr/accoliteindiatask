import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          style={styles.backIcon}
          source={{
            uri: "https://static.thenounproject.com/png/1991936-200.png"
          }}
        />
        <Text style={styles.cartLabel}>Cart</Text>
        <Image
          style={styles.menuIcon}
          source={{
            uri: "https://static.thenounproject.com/png/1991936-200.png"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "yellow"
  },
  backIcon: {
    width: 18,
    height: 18
  },
  cartLabel: {
    flex: 1,
    marginLeft: 20
  },
  menuIcon: {
    marginRight: 10,
    width: 18,
    height: 18
  }
});

export default Header;
