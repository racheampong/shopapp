import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
export default function login(){
    return (
    <View style={{flex: 1, justifyContent: "center", backgroundColor: "white", alignItems: "center"}}>
        <Image 
        style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginBottom: 50,
            
        }}
        source={{
            uri: "https://media.gettyimages.com/photos/shirts-hanging-on-wooden-coat-hangers-picture-id182376883?k=20&m=182376883&s=612x612&w=0&h=S3JP-dyxpAcG6L84xHw0aGdgEpoEDWpzUHxdAiwScL0="
        }}
        />
<Text style={{color: "rgba(0,0,0,0.6)", fontSize:24}}>WELCOME TO</Text>
<Text style={{color: 'black', fontSize:30, fontWeight: '600',}}>
    One Stop Shop Of Shirts
    </Text>
    <TouchableOpacity 
    style={{
         backgroundColor: "e3e3e3",
         borderRadius: 10, 
         flexDirection: "row",
         alignItems: "center",
         padding:10, 
         paddingHorizontal: 60,
         marginTop: 20,
        }}
    >
        <AntDesign name="google" size={24} color="rgb(251, 100, 10)"/>
<Text style={{ fontSize: 17, marginLeft: 15 }}>Login with Gmail</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={{
        backgroundColor: "black",
         borderRadius: 10, 
         flexDirection: "row",
         alignItems: "center",
         padding:10, 
         paddingHorizontal: 60,
         marginTop: 20,
    }}
    >
<AntDesign name="apple1" size={24} color="white" />
<Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>Login  with Apple</Text>

    </TouchableOpacity>
    
    <Text style={{marginTop: 10, fontWeight: "500", color: "grey" }}>
    Not a member? </Text>
    <TouchableOpacity>
    <Text style={{color: "orange", fontWeight: "bold"}}>SignUp</Text>
    
    </TouchableOpacity>
    </View>
    );
}