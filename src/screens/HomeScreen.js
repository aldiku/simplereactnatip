import React, {useState,useEffect  }  from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";
import News from "../components/News";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ navigation }) {
  const [nama, setNama] = useState('Guest');
  const readData = async () => {
    try {
      const userdata = await AsyncStorage.getItem('user')
      if (userdata !== null) {
        var user = JSON.parse(userdata);
        setNama(user.zen.profil.donatur);
      }
    } catch (e) {
      setNama('Guest');
    }
  }
  useEffect(() => {
    readData()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        > 
          <Text style={{ fontSize: 18 }}>Assalamualaikum {nama}</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{
              uri: "https://jasadevelop.com/assets/sca/img/hero-img.png",
              method: "GET",
            }}
            style={{ width: 400, height: 200, resizeMode: "contain" }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Berita Terbaru
          </Text>
          <News />
        </View>
          
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
