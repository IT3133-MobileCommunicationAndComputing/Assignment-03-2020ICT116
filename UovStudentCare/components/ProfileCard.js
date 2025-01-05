import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const ProfileCard = () => {
  return (
    <>
      <View style={styles.cardContainer}>
        <Image
          source={require("../assets/profilepic/1.jpg")}
          style={styles.avatar}
          resizeMode="contain"
        />
        <View>
          <Text variant="bodyLarge" style={styles.userName}>
            Alice Jhonson
          </Text>
          <Text variant="bodyMedium" style={styles.userDetails}>
            Alice Jhonson
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 400,
    height: 200,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 100,
    borderRadius: 10,
  },
  userName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  userDetails: {
    fontSize: 15,
  },
});

export default ProfileCard;
