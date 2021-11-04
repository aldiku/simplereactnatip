import { StatusBar } from "expo-status-bar";
import React, {useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("Guest");
  const [password, setPassword] = useState("");

  const login = () => {
    setLoading(true);
    var myheader = new Headers();
    myheader.append(
      'Content-Type','aplication/json'
    );
    fetch('https://erp.dtpeduli.org/api/login',{
      method: 'POST',
      header: myheader,
      body: JSON.stringify({
        username: email,
        password: password
      })
    }).then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
    .then(data => {
      if(data.status){
        var sesi =  JSON.stringify(data);
        AsyncStorage.setItem('user', sesi);
        setEmail(data.email);
        setNama(data.zen.profil.donatur);
        // console.log('sesi '+sesi);
        this.navigation.navigate('HomeScreen')
      }
      setLoading(false);
    })
    .catch(err => {
        console.log("fetch error" + err);
    });
  }
 
  const [loading,setLoading] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        > 
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require("../assets/images/user-profile.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
      <View style={{marginBottom:20}}>
        <Text>Selamat datang {nama }</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nomor Hp."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={login} >
        <Text style={styles.loginText}>{loading? 'Memproses' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});