import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

class AddItem extends Component {
  render() {
    return (
      <View style={styles.addItemContainer}>
        <TouchableOpacity style={styles.addItemButton}>
          <Text style={[styles.addButtonColor, styles.plusIcon]}>+</Text>
          <Text style={[styles.addButtonColor, styles.addLabel]}>
            ADD ITEMS
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addItemContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "lightgray"
  },
  addItemButton: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  },
  addButtonColor: {
    color: "red"
  }
});

export default AddItem;
