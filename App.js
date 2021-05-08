// import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar
} from "react-native";
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from './app/components/AppText';

import { Entypo } from '@expo/vector-icons';
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Icon from "./app/components/Icon"
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
// View -> UIView || AndroidView
// View is similar to div element
export default function App() {
//  const categories = [
//    {label:"Furniture",value:1},
//    {label:"Clothing",value:2},
//    {label:"Cameras",value:3}
//  ]
// const [category,setCategory] = useState();

  return (
    // <WelcomeScreen />
    // <ListingDetailsScreen/>
    // <ViewImageScreen/>
    // <MessageScreen/>
    // <AccountScreen/>
    // <ListingScreen/>
    // <Screen>
    //   <AppPicker 
    //   selectedItem={category}
    //  onSelectedItem={item => setCategory(item)}
    //   items={categories} icon="apps" placeholder="Category"/>
    //   <AppTextInput icon="email" placeholder="Email"/>
    // </Screen>
    // <LoginScreen/>
    <ListingEditScreen />
  );
}

