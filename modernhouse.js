import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View ,ScrollView,Image,Button,SafeAreaView,TextInput,
                                  TouchableOpacity,title,FlatList,Modal} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker'
import Add from 'react-native-vector-icons/Entypo';  
import Close from 'react-native-vector-icons/AntDesign'

export default function Modern ({navigation}){
  const [data,setdata]=useState([])
  const [imgd,setimgd]=useState([])
  const [isVisible,setisVisible]=useState(false)
  const [sample,setsample]=useState(false)
  const [img1,setimg1]=useState(false)
  const [img2,setimg2]=useState(false)
  const [moim,setmoim]=useState('')
  const [what,setwhat]=useState('')
  const [imgv,setimgv]=useState('')
  const [txt1,settxt1]=useState('')
  const [txt2,settxt2]=useState('')
  const [imgname,setimgname]=useState('')
  const [imgname1,setimgname1]=useState('')
  const [imgpath,setimgpath]=useState('') 
  const [imgpath1,setimgpath1]=useState('')
 useEffect(()=>{
      fetch('http://192.168.230.186:8000/mod',{
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify()
  })
.then(response => response.json())
  .then(res=>{console.log("res",res)
      setdata(res.data)
      console.log("datts",data);
  })
},[])

  const setingimg=()=>{
    let formdata = new FormData();
    formdata.append("productimage",{uri: imgpath1, name:imgname1, type: 'image/jpeg'})
    formdata.append("productitem",{uri: imgpath, name:imgname, type: 'image/jpeg'})
    formdata.append("sqfit",txt1)
    formdata.append("cost",txt2)
    formdata.append("what",what)
    fetch('http://192.168.230.186:8000/image',{
method: 'post',
headers: {
'Content-Type': 'multipart/form-data',
},
body: formdata
}).then(response => {
console.log("modern",response);
console.log("image uploaded")
}).catch(err => {
console.log(err)
})  
}
var uril='';
const gett=()=>{
  uril=moim.slice(1,29)
  let vv=moim.slice(29,moim.length-1);
  console.log("img",uril);
  fetch('http://192.168.230.186:8000/mod',{
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    "imgname":vv
  })
  })
.then(response => response.json())
  .then(res=>{console.log("res",res)
      if(res.status==200){
        setimgd(res.data)
      setisVisible(true)
      setimgv(res.data[0])
      console.log("imgd",imgv);
      }
  })
}

function launchImageLibrary1(){
  let arr=[]
  launchImageLibrary(
    {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      noData: true,
    },

    (response) => {
     
      console.log("---------------------------------------------------------------------------------")
      console.log("response------------->",response);
      console.log("assets------------------>",response.assets)
     arr=response;
     console.log("arr------------------>",arr);
     console.log("uri--------------------->",arr.assets[0].uri)
     setimgname(arr.assets[0].fileName);
     setimgpath(arr.assets[0].uri);
     setimg1(true)
      console.log("imagepath------------------>",imgpath)
      console.log("imagename------------------>",imgname)
    },
  )
}

function launchImageLibrary2(){
  let arr=[]
  launchImageLibrary(
    {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
      noData: true,
    },

    (response) => {
     
      console.log("---------------------------------------------------------------------------------")
      console.log("response------------->",response);
      console.log("assets------------------>",response.assets)
     arr=response;
     console.log("arr------------------>",arr);
     console.log("uri--------------------->",arr.assets[0].uri)
     setimgname1(arr.assets[0].fileName);
     setimgpath1(arr.assets[0].uri);
     setimg2(true)
      console.log("imagepath------------------>",imgpath1)
      console.log("imagename------------------>",imgname1)
    },
  )
}
  return (
       <View style={{flex:1,backgroundColor:"white"}}>
        <View style={{width:"100%",height: "12%",
                           justifyContent:"center",backgroundColor:"#008080",
                           alignItems:"center"}}>
                             <Text style={{color:"white",fontSize:25,justifyContent:"center",fontWeight:"bold",marginTop:"10%"}}>MODERN HOUSE</Text>
                             <Add name='export' size={32} style={{marginLeft:"80%"}} onPress={()=>{setsample(true);setwhat('mod')}}/>
        </View> 
        <FlatList
        data={data}
        renderItem={(item)=>(
          <View style={{backgroundColor:'snow'}}>
            <TouchableOpacity onPress = {() =>{gett();setmoim(JSON.stringify(item.item.img));}}>
              <Image style={{marginBottom:10,height:200,width:'100%',justifyContent:"center"}} source={{uri:item.item.img}}/>
            </TouchableOpacity>
            <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {isVisible}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {styles.modal}>  
               
              <Close name='close' style={{marginLeft:"80%",marginBottom:"40%"}} size={32} onPress = {() => {  
                  setisVisible(!isVisible)}}/> 
                   <Image style={{marginBottom:10,height:200,width:'100%',justifyContent:"center"}} source={{uri:uril+imgv.print}}/>
                    <Text style={{fontSize:25,color:"black"}}>COST : {imgv.cost}</Text>
                    <Text style={{fontSize:25,color:"black"}}>SQUARE FEET : {imgv.sqfit}</Text>

          </View>  
          
        </Modal>
        <Modal            
          animationType = {"fade"}  
          transparent = {false}  
          visible = {sample}  
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>  
          {/*All views of Modal*/}  
              <View style = {{justifyContent:"space-between",  
  alignItems: 'center',   
  backgroundColor : "teal",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 80,  
  marginLeft: 40, }}>  
               
              <Close name='close' style={{marginLeft:"80%"}} size={32} onPress = {() => {  
                  setsample(!sample)}}/> 
                  
                  <Close name='jpgfile1' style={{color:"black"}} size={32} onPress = {() => {launchImageLibrary1()}}/> 
                  {img1 &&
                   <Image style={{marginBottom:10,height:'20%',width:'100%'}} source={{uri:imgpath}}/>
                  }
                  <Close name='jpgfile1' style={{color:"black"}} size={32} onPress = {() => {launchImageLibrary2()}}/> 
                  {img2 &&
                   <Image style={{marginBottom:10,height:'20%',width:'100%'}} source={{uri:imgpath1}}/>
                  } 
                    <TextInput placeholder='square feet' onChangeText={(txt)=>settxt1(txt)}/>
                    <TextInput placeholder='cost of the product' onChangeText={(txt)=>settxt2(txt)}/>
                  <Button title='submit' onPress={()=>setingimg()}/>
          </View>  
          
        </Modal>
        </View>
        )}
        />
</View>
)
};
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  modal: {  
  justifyContent:"space-between",  
  alignItems: 'center',   
  backgroundColor : "snow",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: 'snow',    
  marginTop: 80,  
  marginLeft: 40,  
   
   }
});  