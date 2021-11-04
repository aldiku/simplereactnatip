import { StatusBar } from "expo-status-bar";
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#ccc",
            marginTop: 20,
          }}
        >
          Assalamualaikum!
        </Text>
        <StatusBar style="auto" />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://jasadevelop.com/assets/sca/img/hero-img.png",
            method: "GET",
          }}
          style={{ width: 400, height: 200, resizeMode: "contain" }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          backgroundColor: "#343acb",
          padding: 20,
          width: "90%",
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
          Lanjutkan
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={22}
          color="#fff"
        ></MaterialIcons>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
