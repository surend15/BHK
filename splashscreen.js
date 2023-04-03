import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from 'react-native-vector-icons/FontAwesome';

const SplashScreen = (props) => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [key, setkey] = useState();
 
     AsyncStorage.getItem('id')
     .then((ress)=>{
      if(ress!=''){
        setkey(ress); 
        console.log(key);
      }
     })
 
  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
    if(key!='' && key!=null || key!=undefined){
      props.navigation.navigate('List');
    }
    else{
      props.navigation.navigate('log');
    }
  }
  }, [authLoaded, props.navigation]);

  return (
    <View style={styles.root}>
      <Home name='home' size={40} style={{}}></Home>

      <Text style={{color:"white",fontSize:25}}>SMART HOME</Text>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"teal",
    justifyContent: 'center',
    alignItems: 'center',
  },
});
