import React,{useState}from 'react';
import { StatusBar } from "expo-status-bar";
import Jerlin from 'react-native-vector-icons/Fontisto';
import Mobile from 'react-native-vector-icons/Entypo';
import Group from 'react-native-vector-icons/MaterialIcons';
import User from 'react-native-vector-icons/FontAwesome5';
import Pass from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient'
import {StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    TouchableHighlight,} from 'react-native';
    export default function SignUp({navigation}){
    const[name, setname]=useState("");
    const [mobilenumber, setMobileNumber]=useState("");
    const[password, setPassword]=useState("");
    const[email, setEmail]=useState("");
    const[confirmpassword, setConfirmPassword]=useState("");
    const [referralcode, setReferralCode]=useState("");
    
    const Log=()=>{
      fetch('http://192.168.230.186:8000/register',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        "name":name,
        "email":email,
        "password":password,
        "phone":mobilenumber
    })
  }).then((res) => res.json())
    .then((resJson) => {
      console.log("full login response check ===> ",resJson)
      if(resJson.status==200){
        console.log("full login response check ===> ",resJson.data)
        navigation.navigate('log');
 } 
})
    }
    return(
        <ImageBackground style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
      <StatusBar style='default' />
        <View style={{width:"100%",height:'20%',alignItems:"center",justifyContent:"center",}}><Image style={{height:"100%",width:'30%'}} source={require("./project/logo1.webp")}></Image></View>
      <View style={styles.inputView}>
        <User name='user' size={22}></User>
      <TextInput
          placeholder="Name *"
          placeholderTextColor="black"
          onChangeText={(name) => setname(name)}
        /> 
        </View>
        <View style={styles.inputView}>
        <Mobile name='mobile'size={22}style={{}}/>
        <TextInput
          placeholder="Mobile Number *"
          placeholderTextColor="black"
          onChangeText={(mobilenumber) => setMobileNumber(mobilenumber)}
        /> 
        
      </View> 
      <View style={styles.BoxView}><Jerlin  name='checkbox-passive' size={22} style={{}}/>
        <Text style={{color:"black",marginLeft:10}}>Is this your Whatsapp Number?</Text></View>
      
      <View style={styles.inputView}>
        <Mobile name='email' size={22}></Mobile>
        <TextInput
          placeholder="Email *"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <View style={styles.inputView}>
        <Pass name='lock' size={22}></Pass>
        <TextInput
          placeholder="Password *"
          placeholderTextColor="black"
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <View style={styles.inputView}>
      <Pass name='lock' size={22}></Pass>
        <TextInput
          placeholder="Confirm Password *"
          placeholderTextColor="black"
          onChangeText={(confirmpassword) => setConfirmPassword(confirmpassword)}
        /> 
      </View>
      <View style={styles.inputView}>
      <Group name='group' size={22}></Group>
        <TextInput
          placeholder="Referral Code *"
          placeholderTextColor="black"
          onChangeText={(referralcode) => setReferralCode(referralcode)}
        /> 
      </View>
      <TouchableHighlight onPress={Log()} style={{width:'80%',height:'6%',alignItems:'center'}}><LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.loginBtn} colors={['orange', 'white', 'orange']} ><Text>Sign Up</Text>
      </LinearGradient></TouchableHighlight>
      <Text style={{}}>Already have an account?<Text style={{color:"orange",}} onPress={(Log)=>navigation.navigate('log')}>Login</Text> </Text>
      </ImageBackground>
    )

    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent:"space-evenly"
        },
        inputView: {
            backgroundColor: "#eeeeee",
            borderRadius: 10,
            borderWidth:1,
            width: "80%",
            height: 45,
            flexDirection:'row',
            alignItems: "center",
          },
          BoxView: {
            borderRadius: 10,
            width: "80%",
            height: 45,
            flexDirection:'row',
            alignItems: "center",
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
            marginBottom: 15
        }
        })