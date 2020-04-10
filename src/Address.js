import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";

class Address extends Component {
  state = {
    notes: ""
  };
  onChangeText = notes => {
    this.setState({ notes });
  };
  render() {
    return (
      <View style={styles.addressContainer}>
        <View style={styles.topBar}>
          <Text style={styles.deliverToLabel}>Deliver to</Text>
          <TouchableOpacity>
            <Text style={styles.changeAddressLink}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.address}>
            {"Address Line 1\nAddress Line 2\nAddress Line 3"}
          </Text>
        </View>
        <View style={styles.notesContainer}>
          <Text>Notes</Text>
          <TextInput
            style={styles.notesInput}
            onChangeText={text => this.onChangeText(text)}
            value={this.state.notes}
            placeholder={"e.g. House Number"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addressContainer: { backgroundColor: "white" },
  deliverToLabel: { flex: 1 },
  topBar: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    padding: 10
  },
  changeAddressLink: {
    color: "red"
  },
  addressView: {
    padding: 10
  },
  name: {
    fontSize: 16
  },
  address: {
    fontSize: 14,
    color: "gray"
  },
  notesContainer: {
    padding: 10
  },
  notesInput: {
    padding: 5,
    backgroundColor: "lightgray",
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 12
  }
});

export default Address;
