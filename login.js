
import React,{useState}from 'react';
import { StatusBar } from "expo-status-bar";
import Jerlin from 'react-native-vector-icons/Fontisto';
import Mobile from 'react-native-vector-icons/Entypo';
import Pass from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    TouchableHighlight,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

    export default function Log({navigation}) {
    const [mobilenumber, setMobileNumber]=useState("");
    const[password, setPassword]=useState("");
    const Log=()=>{
      console.log(mobilenumber,password)
      fetch('http://192.168.152.186:8000/signin',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        "phone":mobilenumber,
        "password":password
    })
  }).then((res) => res.json())
    .then((resJson) => {
      console.log("full login response check ===> ",resJson)
      if(resJson.status==200){
        console.log("full login response check ===> ",resJson.data)
       
        console.log(resJson.data[0].id);
        AsyncStorage.setItem('id',JSON.stringify(resJson.data))
        navigation.navigate('List')
 } 
})
      
    }
    const Sign=()=>{
      navigation.navigate('SignUp');
    }
    
return (
  <ImageBackground style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
      <StatusBar style="auto" />
      <View style={{width:"100%",height:'40%',alignItems:"center",justifyContent:"center"}}><Image style={{height:150,width:150}} source={require("./project/logo1.webp")}></Image></View>
      <View style={styles.inputView}>
        <Mobile name='mobile'size={22}style={{}}/>
        <TextInput
          placeholder="Mobile Number *"
          placeholderTextColor="black"
          onChangeText={(mobilenumber) => setMobileNumber(mobilenumber)}
        /> 
      </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      <View style={styles.inputView}>
        <Pass name='user-lock' size={22} style={{}}></Pass>
        <TextInput
          placeholder="Password *"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.BoxView}><Jerlin  name='checkbox-passive' size={22} style={{}}/>
        <Text style={{color:"black",marginLeft:10}}>Remember Me</Text></View>
      
        <TouchableHighlight onPress={Log} style={{width:'80%',height:'6%',alignItems:'center'}}><LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.loginBtn} colors={['#FF1493', 'white', '#FF1493']} >
        <Text >Log In</Text> 
        </LinearGradient></TouchableHighlight>
        <TouchableOpacity style={styles.forgot_button}>
        <Text style={{color:"black"}}>Forgot Your Password?</Text> 
      </TouchableOpacity> 
      <Text>--------  or  --------</Text>
      <Text style={{color:"black",marginBottom:15}}>You don't have an account?</Text>
      
      <TouchableHighlight onPress={Sign} style={{width:'80%',height:'6%',alignItems:'center'}}><LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.loginBtn} colors={['orange', 'white', 'orange']} ><Text>Sign Up</Text>
      </LinearGradient></TouchableHighlight>
    </ImageBackground> 
  )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "teal",
      alignItems: "center",
    },
    inputView: {
        backgroundColor: "#eeeeee",
        borderRadius: 10,
        borderWidth:1,
        width: "80%",
        height: 45,
        flexDirection:'row',
        marginBottom: 15,
        alignItems: "center",
      },
      BoxView: {
        borderRadius: 10,
        width: "80%",
        height: 45,
        flexDirection:'row',
        marginBottom: 15,
        alignItems: "center",
      },
      forgot_button: {
        marginLeft:"10%",
        fontWeight:"bold",
        color:"black",
        marginBottom:25
      },
      loginBtn: {
        width:'100%',
        height:'100%',
        color:"white",
        borderRadius:10,
        backgroundColor: "#FF1493",
        fontSize:20,
        fontWeight:"bold",
        alignItems:'center',
        justifyContent:'center',
    }
    }
    )