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
import Address from "./Address";

class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <Address />
        <View style={styles.footerView}>
          <Text style={styles.payLabel}>To Pay : Rp. 80000</Text>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextLable}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width
  },
  footerView: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: Dimensions.get("window").width
  },
  payLabel: {
    flex: 1,
    fontSize: 16
  },
  nextButton: {
    backgroundColor: "red",
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 5
  },
  nextLable: {
    color: "white"
  }
});

export default Footer;
