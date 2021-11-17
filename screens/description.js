import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
// import { alignItems, styles } from "styled-system";
import {data} from "./ProductData/data";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { width } from "styled-system";
import { Ionicons } from '@expo/vector-icons';

export default function  description ({navigation}){

    return(
        <SafeAreaView>
        <View>
            <View style={{backgroundColor: "#ffffff", marginTop: -200}}>
            <Image source={require("../assets/sukin-men-Facial-Moisturiser_225ml_FL_01.jpg")}
                    style={{
                        height: 900,
                        width: 400,
                        resizeMode: "contain",
                        padding: 10,
                        borderRadius: 20,
                        marginLeft: "2%",
                    }}
                    />
            </View>
            
            <View style={{backgroundColor: "#ffffff", borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -200}}>
                <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 25, fontWeight: "bold", }}>Facial Cleanser</Text>
            
            <View style={{flexDirection: "row", marginLeft: "25%"}}><AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" />
            <AntDesign name="star" size={24} color="gold" /></View>
            </View>
            <Text style={{fontSize: 17,  fontWeight: "bold", marginTop: 10}}>Size 7.60 ft oz / 255ml </Text>

            <Text style={{fontSize: 25, fontWeight: "bold"}}>$9.99</Text>

            <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 15}}>About</Text>
            <Text style={{fontSize: 15, fontWeight: "bold", marginTop: 10}}>This a very nice soap.  If your face is {'\n'} akata, it will bleach you. Woho b3t) so {'\n'} Onlyn fpr akata babies</Text>

            <TouchableOpacity style={{backgroundColor: "black", width: "85%", borderRadius: 20, marginLeft: "7%", marginTop: "10%"}}
            onPress={() => navigation.navigate("Cart")}>
                <Text style={{color: "white", paddingTop: 20, paddingBottom: 20, paddingLeft: "35%",  fontSize: 20}}>Add to cart</Text>
            </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    itemDisplay: {
        backgroundColor: 'white',
        borderRadius: 20,
       marginRight: 10,
        padding: 20,
        width: "50%",
        paddingRight: 10,
        marginLeft: -5,
    paddingTop: 5
    },

    itemDisplay1: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        paddingTop: 5,
        width: "50%",
    },


});