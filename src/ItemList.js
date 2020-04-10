import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity
} from "react-native";

class ItemList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemList, onCountChange, selectedItem } = this.props;
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={itemList}
          extractData={selectedItem}
          renderItem={({ item, index }) => (
            <View
              style={
                item.available <= 0
                  ? [styles.emptyContainer, styles.itemContainer]
                  : styles.itemContainer
              }
            >
              <Image
                style={styles.itemImage}
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png"
                }}
              />
              <View style={styles.itemDetails}>
                <View>
                  <View style={styles.itemView}>
                    <Text style={[styles.itemName, styles.firstCol]}>
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.itemPrice,
                        styles.secondCol,
                        styles.alignRight
                      ]}
                    >
                      {item.available > 0 && `Rp. ${item.sellingPrice}`}
                    </Text>
                  </View>
                  <View style={styles.itemView}>
                    <Text style={[styles.itemType, styles.firstCol]}>
                      Vicks
                    </Text>
                    <Text
                      style={[
                        styles.itemMrp,
                        styles.secondCol,
                        styles.alignRight
                      ]}
                    >
                      {item.available > 0 && `Rp. ${item.mrp}`}
                    </Text>
                  </View>
                  <View style={styles.itemView}>
                    <Text style={[styles.itemAvailability, styles.firstCol]}>
                      {item.available <= 0 && `Unvailable`}
                      {item.available > 0 &&
                        item.available < 25 &&
                        `Only ${item.available} Available`}
                    </Text>
                    {item.available > 0 ? (
                      <View style={[styles.countContainer, styles.secondCol]}>
                        <TouchableOpacity
                          onPress={() => onCountChange(index, -1)}
                        >
                          <Text style={styles.minusIcon}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.count}>{item.count}</Text>
                        <TouchableOpacity
                          onPress={() => onCountChange(index, 1)}
                        >
                          <Text style={styles.plusIcon}>+</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <TouchableOpacity
                        style={[styles.countContainer, styles.secondCol]}
                      >
                        <Text style={styles.removeButton}>Remove</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray"
  },
  emptyContainer: {
    opacity: 0.4
  },

  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  itemDetails: {
    flex: 1
  },
  itemView: {
    flexDirection: "row"
  },
  firstCol: {
    flex: 3
  },
  secondCol: {
    flex: 1,
    justifyContent: "flex-end"
  },
  itemName: {
    fontSize: 14,
    fontWeight: 500
  },
  itemType: {
    color: "gray",
    fontSize: 10
  },
  itemAvailability: {
    fontSize: 12,
    color: "black"
  },
  itemMrp: {
    textDecoration: "line-through"
  },
  countContainer: {
    flexDirection: "row"
  },
  alignRight: {
    textAlign: "right"
  },
  removeButton: {
    color: "red"
  },
  count: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default ItemList;
