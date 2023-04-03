import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View ,ScrollView,Image,TouchableOpacity, Button,} from 'react-native';
import Log from 'react-native-vector-icons/MaterialIcons';



export default class List extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={ 
          name:'',
          asy:[],
           data:[
                {
                    
                   id: "APARTMENTS  :",
                   Image: require('./project/appartment.jpg'),
                  title: " Apartments Tailored to Your Highest Standards.",
                  
                },
                {
                    
                    id: "COTTAGE HOUSE  :",
                    Image: require('./project/cottage.webp'),
                   title: "There is room in the smallest cottage for a happy loving pair.",
                 },
                 {
                    
                    id: "ECO-FRIENDLY HOUSE  :",
                    Image: require('./project/ecofriendly2.jpg'),
                   title: "The true supporter of eco-friendliness.",
                 },
                 {
                    
                    id: "FARM HOUSE  :",
                    Image: require('./project/farmhouse.jpg'),
                   title: "Adding Green to your Life.",
                 },
                 {
                    
                    id: "MODERN HOUSE  :",
                    Image: require('./project/modernhouse.jpg'),
                   title: "A life full of Design Secrets.",
                 },
                 {
                    
                  id: "PALACE  :",
                  Image: require('./project/palace.jpg'),
                 title: "./project/palace.jpg",
               },
               {
                    
                id: "STUDIO ROOM HOUSE  :",
                Image: require('./project/studioroom1.jpg'),
               title: " Don’t judge me by the way I look.  I promise to keep your home clean and organized.               ",
             },
                 ]
                 }
                } 
                getData(){
                  setTimeout(() => {
                    AsyncStorage.getItem('id')
                .then((res)=>{
                  this.setState({asy:JSON.parse(res)})
                  this.setState({name:this.state.asy[0].name})
                })
                  }, 1000)
                }
              
                componentDidMount(){
                  this.getData();
                }    
  render(){
    
    
  return (
       <View style={{flex:1,backgroundColor:"white"}}>
        
        <View style={{width:"100%",height: "10%",flexDirection:'row',  
                           justifyContent:"center",
                           alignItems:"center",backgroundColor:'teal'}}>
                             <Text style={{color:"brown",fontSize:25,marginTop:"5%",fontWeight:"bold",width:'80%',textAlign:'center'}}>hiii   {this.state.name}</Text>
                             <Log name='logout' size={32} style={{color:"black"}} onPress={()=>{
                              AsyncStorage.clear();
                              this.props.navigation.navigate('log')
                             }} title="logout"/>
        </View>
        
<View style={{width:'100%',height: '90%',}}>
    <ScrollView>
      <View  style={{backgroundColor:"white",alignItems:'center',}}>
          
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Appartment')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/appartment.jpg')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>APARTMENTS</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>Apartments Tailored to Your Highest Standards.</Text>
        </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cottage')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/cottage.webp')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>COTTAGE HOUSE</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>There is room in the smallest cottage for a happy loving pair.</Text>
        </View>
        </View>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Eco')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/ecofriendly2.jpg')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>ECO-FRIENDLY HOUSE  :</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>The true supporter of eco-friendliness.</Text>
        </View>
        </View>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Farm')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/farmhouse.jpg')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>FARM HOUSE</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>Adding Green to your Life.</Text>
        </View>
        </View>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Modern')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/modernhouse.jpg')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>MODERN HOUSE</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>A life full of Design Secrets.</Text>
        </View>
        </View>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Palace')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/palace.jpg')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>PALACE</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>A can make any place a palace.</Text>
        </View>
        </View>
      </TouchableOpacity>
            
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Studio')}>
        <View style={{flexDirection:'row',marginTop:'10%',backgroundColor:'transparent',borderColor:"black",borderWidth:2,width:300,height:100,borderRadius:10,justifyContent:'space-around',alignItems:'center'}}>
        <Image style = {{width:80, height:80,borderRadius:50}} source={require('./project/studioroom1.jpg')}/>  
        <View style={{width:'60%'}}>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold"}}>STUDIO HOUSE</Text>
        <Text style={{color:"black",fontSize:15,marginTop:"5%",fontWeight:"bold",color:"darkred"}}>Don’t judge me by the way I look.  I promise to keep your home clean and organized.</Text>
        </View>
        </View>
      </TouchableOpacity>
            <View style={{marginTop:'10%'}}>

            </View>
    
    </View>
    </ScrollView>
    
</View>

</View>
)
};
}