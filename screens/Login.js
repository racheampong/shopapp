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
            transform: [{rotation: "45deg"}]
        }}
        source={{
            uri: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDl8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        }}
        />
<Text style={{color: "rgba(0,0,0,0.6)", fontSize:24}}>WELCOME TO</Text>
<Text style={{color: 'black', fontSize:30, fontWeight: '600'}}>
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
<AntDesign name="apple1" size={24} color="black" />
<Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>Login  with Apple</Text>

    </TouchableOpacity>
    
    <TouchableOpacity>
    <Text style={{marginTop: 10, fontWeight: "500", color: "grey" }}>
    Not a member? 
    <Text style={{color: "orange", fontWeigt: "bold"}}>SignUp</Text>
    </Text>
    </TouchableOpacity>
    </View>
    );
}