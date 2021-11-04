import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
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

export default function  description (){

    return(
        <SafeAreaView>
        <View>
            <View style={{backgroundColor: "#000000", borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
            <Image source={require("../assets/Kente_2.jpg")}
                    style={{
                        height: 300,
                        width: 300,
                        resizeMode: "contain",
                        padding: 10,
                        borderRadius: 20,
                    }}
                    />
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