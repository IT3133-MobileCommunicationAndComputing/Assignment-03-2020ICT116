import { Image, ScrollView, StyleSheet, View } from "react-native";
import bannerImage from "../assets/uov_banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";

const ProfileScreen = ({ route }) => {
  const { student } = route.params;

  return (
    <>
      <ScrollView>
        <View style={styles.bannerWrapper}>
          <Image source={bannerImage} style={styles.bannerImage} resizeMode="contain" />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={student.profile_pic}
            style={styles.profilePicture}
            resizeMode="contain"
          />
          <Text variant="headlineMedium" style={styles.studentName}>
            {student.name}
          </Text>
          <Text variant="bodyMedium" style={styles.studentSubDetails}>
            Age: {student.age} | Gender: {student.gender}
          </Text>

          <Divider style={styles.sectionDivider} bold />
          <Text variant="bodyMedium" style={styles.contactSectionHeader}>
            Contact Information
          </Text>
          <View style={styles.contactInfoContainer}>
            <Text variant="bodySmall" style={styles.contactInfo}>
              Email: {student.email}
            </Text>
            <Text variant="bodySmall" style={styles.contactInfo}>
              Phone: {student.phone}
            </Text>
            <Text variant="bodySmall" style={styles.contactInfo}>
              Address: {student.address}
            </Text>
          </View>

          <Divider style={styles.sectionDivider} bold />
          <Text variant="bodyMedium" style={styles.bioSectionHeader}>
            Biological Information
          </Text>
          <View style={styles.bioInfoContainer}>
            <Text variant="bodySmall" style={styles.bioInfo}>
              Gender: {student.gender}
            </Text>
            <Text variant="bodySmall" style={styles.bioInfo}>
              Age: {student.age}
            </Text>
            <Text variant="bodySmall" style={styles.bioInfo}>
              Blood Group: {student.blood_group}
            </Text>
          </View>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>UOV © 2024</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  bannerWrapper: {
    alignItems: "center",
  },
  bannerImage: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
  profileContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 30,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 45,
    elevation: 5,
    marginTop: -25,
  },
  profilePicture: {
    width: 200,
    height: 200,
  },
  studentName: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  studentSubDetails: {
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
  },
  sectionDivider: {
    width: 300,
    height: 2,
    marginTop: 30,
  },
  contactSectionHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
  },
  contactInfoContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  contactInfo: {
    fontSize: 14,
  },
  bioSectionHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
  },
  bioInfoContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  bioInfo: {
    fontSize: 14,
  },
  footerContainer: {
    backgroundColor: "#70116d",
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 8,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

export default ProfileScreen;
