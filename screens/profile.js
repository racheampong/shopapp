import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";
import { Input, Icon,NativeBaseProvider } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { justifyContent, marginRight, } from "styled-system";

//importing icons 
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ProfilePage =() =>{
    return(
        <View style={designs.container}>

            <View style ={designs.info}>
                <View style={designs.picture}>

                </View>
                <View>
                    <Text>Richmond</Text>
                    <Text>Edit profile</Text>
                </View>
            </View>

            <View style ={designs.personalInfo}>
                <Text>Personal Info </Text>
                
                <View style={designs.content}>
                  <Feather name="user" size={24} color="black" />
                  <Text>Profile</Text>
                </View>
                
                <View style={designs.content}>
                    <MaterialIcons name="payment" size={24} color="black" />
                    <Text>Payment</Text>
                </View>

                <View style={designs.content}>
                    <MaterialIcons name="payment" size={24} color="black" />
                    <Text>Shopping Carts</Text>
                </View>


            </View>
            <View Style={designs.adjustment}>
                <Text>Adjustments</Text>

                <View style={designs.content}>
                    <Ionicons name="settings-outline" size={24} color="black" />  
                    <Text> Settings</Text>
                </View>
                <View style={designs.content}>
                    <AntDesign name="key" size={24} color="black" />
                    <Text> Passwoed</Text>
                </View>

                <View style={designs.content}>
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text> Logout</Text>
                </View>


            </View>

        </View>
    )
}

const designs = StyleSheet.create({
    container:{
        justifyContent: "cebter",
        marginLeft: 20
    },
    info:{
        flexDirection: "row",
        justifyContent: "left",
    },
    picture:{

    },
    personalInfo:{
        marginTop:20,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    content:{
        flexDirection: "row",
        justifyContent: "flex-start",
        margin: 20,
    },
    adjustment:{

    }
})

export default ProfilePage;