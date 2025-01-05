import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CourseOverviewScreen from "./CourseScreen";
//import SubjectListScreen from "./SubjectsScreen";

const TabNavigator = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const { student } = route.params;
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "StudentProfile") {
            iconName = "person";
          } else if (route.name === "CourseOverview") {
            iconName = "school";
          } else if (route.name === "SubjectList") {
            iconName = "book-open";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#70116d",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      })}
    >
      <TabNavigator.Screen
        name="StudentProfile"
        initialParams={{ student: student }}
        component={ProfileScreen}
      />
      <TabNavigator.Screen
        name="CourseOverview"
        component={CourseOverviewScreen}
        initialParams={{ studentDetails: student }}
      />
      {/* <TabNavigator.Screen
        name="SubjectList"
        component={SubjectListScreen}
        initialParams={{ studentDetails: studentDetails }}
      /> */}
    </TabNavigator.Navigator>
  );
};

export default HomeScreen;
