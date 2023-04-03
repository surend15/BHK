import React from 'react';
import { StyleSheet, Text, View ,ScrollView,Image,Button,SafeAreaView,TextInput,
                                  TouchableOpacity,title,FlatList,} from 'react-native';
export default class flatlist extends React.Component{
    constructor()
    {
        super();
        this.state={ 
           data:[
                {
                   Image: require('./project/cottage/cottage.jpg'),
                },
                { 
                    Image: require('./project/cottage/cottage1.jpg'),
                 },
                 { 
                    Image: require('./project/cottage/cottage2.jpg'),
                 },
                 {
                    Image: require('./project/cottage/cottage3.jpg'),
                 },
                 {
                    Image: require('./project/cottage/cottage4.jpg'),
                 },
                 {
                  Image: require('./project/cottage/cottage5.webp'),
               },
               {
                Image: require('./project/cottage/cottage6.jpeg'),
               },
               {
                Image: require('./project/cottage/cottage7.webp'),
             },
               {
                Image: require('./project/cottage/cottage8.jpg'),
             },
             {
              Image: require('./project/cottage/cottage9.jpg'),
           },
                 ]
                 }
                }     
  render(){
  return (
       <View style={{flex:1,backgroundColor:"#008080"}}>
        
        <View style={{width:"100%",height: "10%",
                           justifyContent:"center",
                           alignItems:"center"}}>
                             <Text style={{color:"white",fontSize:25,marginTop:"5%",fontWeight:"bold"}}>ECO-FRIENDLY HOUSE</Text>
        </View>
        
             
        
    
<View style={{width:410,height: 600,
             flexDirection:"row-reverse",
            }}>
<FlatList
            data={this.state.data}
            renderItem={({item,index}) =>(
  <View  style={{alignItems:"center",justifyContent:"center",backgroundColor:"white"
     }}>
      <Text style={{color:"black",fontSize:20,marginTop:"5%",marginLeft:"-55%",fontWeight:"bold"}}>{item.id}</Text>
  <Image
              style = {{width:400, height:250,marginTop:"5%"}}
              source={item.Image}>                   
  </Image>
  <Text style={{color:"black",fontSize:18,marginTop:"5%",fontWeight:"bold",color:"white"}}>{item.title}</Text>

 
</View>

) }
/>
</View>
</View>
)
};
}