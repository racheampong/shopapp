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
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
const image = require("../assets/image.jpg");

const Login = () => {
    const navigation = useNavigation();
  return (
    // Main Container
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={image}
        style={{
          color: "#fff",
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "center",
        }}
        resizeMode="cover"
      >
        {/*  Inner View */}
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 10,
          }}
        >
          {/* Inner Text View */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ color: "black", fontSize: 30 }}>WELCOME TO</Text>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              One Stop Shop Of Shirts
            </Text>

            <Text style={{ marginTop: 10 }}>
              {" "}
              -Collection and Style for everyone-{" "}
            </Text>

            {/*  Email and Password Input */}
            
            <View style={[styles.emialInput,styles.buttonStyleX]}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="user-secret" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                placeholder="Username"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
            </View>
            {/* Password Input */}
            <View style={[styles.emialInput,styles.buttonStyleX]}>
              <Input
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="key" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                placeholder="Password"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
                secureTextEntry={true}
              />
            </View>

          </View>
          {/* Inner Button View */}
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                paddingHorizontal: 60,
              }}
            >
              <AntDesign name="google" size={24} color="rgb(251, 100, 10)" />
              <Text style={{ fontSize: 17, marginLeft: 15 }}>
                Login with Gmail
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderWidth: 1,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                paddingHorizontal: 60,
                marginTop: 20,
              }}
            >
              <AntDesign name="apple1" size={24} color="white" />
              <Text style={{ fontSize: 17, color: "white", marginLeft: 15 }}>
                Login with Apple
              </Text>
            </TouchableOpacity>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <Text style={{ marginTop: 10, fontWeight: "500", color: "grey" }}>
                Not a member?{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{ color: "orange", fontWeight: "bold" }}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  emailInput: {
    marginTop: 10,
    marginRight: 5,
    
  },
  buttonStyleX: {
    marginTop: 2,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default () => {
    return (
      <NativeBaseProvider>
       
          <Login />
        
      </NativeBaseProvider>
    )
  }
