import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button, TextInput
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
// import { alignItems, styles } from "styled-system";
import {data} from "./ProductData/data";
import { SafeAreaView } from "react-native-safe-area-context";

import { backgroundColor, width } from "styled-system";
import { Ionicons } from '@expo/vector-icons';
import { Center, Icon } from "native-base";

export default function cart(navigate){
    const [value, onChangeText] = useState(0);
    return(
        <SafeAreaView>
            <View style={{backgroundColor:'white'}}>
        <TouchableOpacity style={{flexDirection: 'row',  backgroundColor:'#f2f2f2', width:'90%', height:'20%', borderRadius:20, paddingBottom:50, marginTop:30, marginLeft:20,}}>
            <Image
           style= {{height: 85,
                    width: 100,
                    resizeMode: "contain",
                    borderRadius:30,
                    marginTop:10,
                   
                }}

            source={require("../assets/sukin-men-Facial-Moisturiser_225ml_FL_01.jpg")} />
            <View style={{marginLeft: 30, marginTop:10}}>
            <Text style={{fontSize: 19, fontWeight: "bold", paddingBottom:5,}}>Akata Babies Soap</Text>
            <Text style={{paddingBottom:7}} >Addd your own text here</Text>
            <View style={{flexDirection:'row'}}>
                <Text  style={{paddingTop:4, fontSize:15, fontWeight:'bold'}} >$150.00 </Text> 
                <Ionicons name="ios-remove-circle-sharp" size={24} color="black"  style={{ paddingLeft:'25%',}}/>
                <Text style={{paddingTop:4}} > 2 </Text>
                <Ionicons name="add-circle" size={24} color="black" />


            </View>
           </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', backgroundColor:'#f2f2f2', width:'90%', height:'20%', borderRadius:20, paddingBottom:50, marginTop:10, marginLeft:20,}}>
            <Image
           style= {{height: 85,
                    width: 100,
                    resizeMode: "contain",
                    borderRadius:30,
                    marginTop:10,
                    marginBottom:25,
                   
                }}

            source={require("../assets/sukin-men-Facial-Moisturiser_225ml_FL_01.jpg")} />
            <View style={{marginLeft: 30, marginTop:10}}>
            <Text style={{fontSize: 19, fontWeight: "bold",  paddingBottom:5,}}>Akata Babies Soap</Text>
                <Text style={{paddingBottom:7}} >Addd your own text here</Text>
            <View style={{flexDirection:'row'}}>
                <Text  style={{paddingTop:4, fontSize:15, fontWeight:'bold'}} >$150.00 </Text> 
                <Ionicons name="ios-remove-circle-sharp" size={24} color="black"  style={{ paddingLeft:'25%',}}/>
                <Text style={{paddingTop:4}} > 2 </Text>
                <Ionicons name="add-circle" size={24} color="black" />


            </View>
           </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', backgroundColor:'#f2f2f2', width:'90%', height:'20%', borderRadius:20, paddingBottom:50, marginTop:10, marginLeft:20,}}>
            <Image
           style= {{height: 85,
                    width: 100,
                    resizeMode: "contain",
                    borderRadius:30,
                    marginTop:10,
                    marginBottom:25,
                }}

            source={require("../assets/sukin-men-Facial-Moisturiser_225ml_FL_01.jpg")} />
            <View style={{ marginLeft: 30, marginTop:10,}}>
            <Text style={{fontSize: 19, fontWeight: "bold",  paddingBottom:5, }}>Akata Babies Soap</Text>
            <Text style={{paddingBottom:7}}>Addd your own text here</Text>
            <View style={{flexDirection:'row'}}>
                <Text  style={{paddingTop:4, fontSize:15, fontWeight:'bold'}} >$150.00 </Text> 
                <Ionicons name="ios-remove-circle-sharp" size={24} color="black"  style={{ paddingLeft:'25%',}}/>
                <Text style={{paddingTop:4}} > 2 </Text>
                <Ionicons name="add-circle" size={24} color="black" />


            </View>
           </View>
        </TouchableOpacity>
        

        <TouchableOpacity style={{flexDirection: 'row', backgroundColor:'#f2f2f2', width:'90%', height:'10%', borderRadius:20, paddingBottom:50, marginTop:10, marginLeft:20,}}>
        <View style={{flexDirection:"row"}}>
            <TextInput
            style={{ height: 40, width:200, borderColor:'#f2f2f2', marginRight:15, marginLeft: 10, marginTop: 15,
            borderRadius: 20 }}
            onChangeText={text => onChangeText(text)}
            value={value} 

             />
             <TouchableOpacity style={{width: 100, height:50, marginTop:8, borderRadius:20,  backgroundColor:'black'}}>
                <Text style={{ color:'white', fontWeight:'bold', paddingLeft:20, fontSize:17, paddingTop:15,}}> Apply </Text>
             </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <View style={{flexDirection: "row",}}>
            <Text style={{marginLeft: "5%", fontWeight: "bold", fontSize: 20}}>Subtotal</Text>
            <Text style={{marginLeft: "50%", fontWeight: "bold", fontSize: 20}}>$405.00</Text>
        </View>
        
        </View>
        </SafeAreaView>
    )
}
