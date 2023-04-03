import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {View,Image,FlatList,Text, ScrollView,Button,Modal,Share} from 'react-native';
import Jerlin from 'react-native-vector-icons/FontAwesome';
import Close from 'react-native-vector-icons/AntDesign'
import { source } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
const shareData = async () => {
   try {
       await Share.share({
         message:
               'This is the demo text',
       });
   } catch (error) {
       alert(error.message);   
   }
};
 
export default class Appart extends React.Component{
   state = {  
      isVisible: false, //state of modal default false  
    }  
   
        
   render(){
   return (
      <View style={{flex:1}}>
       
       <View style={{width:"100%",height: "10%",
                  justifyContent:"center",backgroundColor:"#008080",
                          alignItems:"center"}}>
                            <Text style={{color:"white",fontSize:25,marginTop:"5%",fontWeight:"bold"}}>DETAILS</Text>
       </View>
       
            
       
   
<View style={{width:'100%',height:'90%'}}>

   <View style={{width:'100%',height:'40%',backgroundColor:'red'}}>
      <Image style={{width:'100%',height:'100%'}} source={require('./project/apartment/apartment5.jpg')} />
   </View>
   <View style={{width:'100%',height:'70%',backgroundColor:'white'}}>
   <Text style={{color:"gray",fontWeight:"bold",fontSize:30,marginTop:"15%",marginLeft:"5%"}}>BUILDING CONSTRUCTION</Text>
      <Text style={{color:"gray",fontWeight:"bold",fontSize:30,marginLeft:"35%"}}>DETAILS</Text>
   <Text style={{color:"black",fontWeight:"bold",fontSize:20,marginTop:"20%",marginLeft:"15%"}}>Need of Land Surface :</Text>
   <Text style={{color:"black",fontWeight:"bold",fontSize:20,marginLeft:"15%"}}>Construction Cost :</Text>
   <View style = {{  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: 'snow',  
  }}>  
          <Modal            
            animationType = {"fade"}  
            transparent = {true}  
            visible = {this.state.isVisible}  
            onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
            {/*All views of Modal*/}  
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style = { {  
                  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "#00BCD4",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: 'teal',   
   
   }}>  
   <View style={{ marginTop: 10,width:'100%',alignItems:'center',justifyContent:'space-evenly' }}>
   <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between'}}>
            <Jerlin name='share-square-o' style={{}} size={32} onPress={shareData} title="Share" />
            <Close name='closesquareo' size={32} style={{}} onPress = {() => {  
                     this.setState({ isVisible:!this.state.isVisible})}}/>
   </View>
        
               <Image style={{height:"80%",width:"90%",marginBottom:"0%"}} source={require('./project/apartment/print1.webp')}></Image>
               </View>  
            </View> 
            </View> 
          </Modal>  
          {/*Button will change state to true and view will re-render*/}  
          <Button   
             title="BLUEPRINT"   
             onPress = {() => {this.setState({ isVisible: true})}}  
          />  
        </View>  
   </View>
</View>

</View>
)
}
}