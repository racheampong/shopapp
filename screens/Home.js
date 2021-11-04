import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
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


export default function  Home ({navigation}){

    return(
        <SafeAreaView style={{padding: 20, backgroundColor: '#e6e6e6'}}>
            {/*1st view*/}
            <View style={{flexDirection: 'row', }}>
                <AntDesign name="left" size={22} color="black" />
                <Text style={{fontSize: 20, fontWeight: '500', marginHorizontal: 100}}>Fancy Kente</Text>
                <FontAwesome5 name="opencart" size={24} color="black" />
            </View>

            {/*2nd view*/}
            <View style={{flexDirection: 'row', marginBottom: 10}}>
                <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: 'white', padding: 10, width: '85%', borderRadius: 15,}}>
                    <Feather name="search" size={20} color="grey" />
                    <TextInput placeholder='Search Item' style={{paddingLeft: 10}}></TextInput>
                </View>
                <View style={{marginLeft: 10, marginTop: 10, padding: 10, backgroundColor: 'white', borderRadius: 10}}>
                    <AntDesign name="menu-fold" size={24} color="black" />
                </View>
            </View>

            {/*3rd view*/}

        <ScrollView>
            <View style={{flexDirection: "row"}}>
                
                <TouchableOpacity style={styles.itemDisplay} onPress={() => navigation.navigate("description")}>
                    <Image source={require("../assets/Kente_2.jpg")}
                    style={{
                        height: 180,
                        width: "100%",
                        resizeMode: "contain",
                        padding: 10,
                        borderRadius: 20,
                    }}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Original Kente</Text>
                    <Text style={{fontWeight: "bold"}}>$140.00</Text>
                </TouchableOpacity>
                
                
               
                <TouchableOpacity style={{marginLeft: 50}} style={styles.itemDisplay1} >
                    <Image source={require("../assets/Kente_2.jpg")}

                    style={{
                        height: 180,
                        width: "100%",
                        resizeMode: "contain",
                        padding: 20,
                        borderRadius: 20,
                    }}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Original Kente</Text>
                    <Text style={{fontWeight: "bold"}}>$140.00</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{flexDirection: "row", marginTop: 30}}>
                
                <TouchableOpacity style={styles.itemDisplay}>
                    <Image source={require("../assets/Kente_2.jpg")}
                    style={{
                        height: 180,
                        width: "100%",
                        resizeMode: "contain",
                        padding: 10,
                        borderRadius: 20,
                    }}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Original Kente</Text>
                    <Text style={{fontWeight: "bold"}}>$140.00</Text>
                </TouchableOpacity>
                
                
               
                <TouchableOpacity style={{marginLeft: 50}} style={styles.itemDisplay1} >
                    <Image source={require("../assets/Kente_2.jpg")}

                    style={{
                        height: 180,
                        width: "100%",
                        resizeMode: "contain",
                        padding: 20,
                        borderRadius: 20,
                    }}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Original Kente</Text>
                    <Text style={{fontWeight: "bold"}}>$140.00</Text>
                </TouchableOpacity>
                
            </View>
            
            <View style={{flexDirection: "row", marginTop: 30}}>
                
                <TouchableOpacity style={styles.itemDisplay}>
                    <Image source={require("../assets/Kente_2.jpg")}
                    style={{
                        height: 180,
                        width: "100%",
                        resizeMode: "contain",
                        padding: 10,
                        borderRadius: 20,
                    }}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Original Kente</Text>
                    <Text style={{fontWeight: "bold"}}>$140.00</Text>
                </TouchableOpacity>
                
                
               
                <TouchableOpacity style={{marginLeft: 50}} style={styles.itemDisplay1} >
                    <Image source={require("../assets/Kente_2.jpg")}

                    style={{
                        height: 180,
                        width: "100%",
                        resizeMode: "contain",
                        padding: 20,
                        borderRadius: 20,
                    }}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Original Kente</Text>
                    <Text style={{fontWeight: "bold"}}>$140.00</Text>
                </TouchableOpacity>
                
            </View>


        </ScrollView>


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