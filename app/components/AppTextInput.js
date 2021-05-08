import React from 'react';
import { TextInput, View , StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppTextInput({icon,width="100%",...otherProps}) {
    return (
        <View style={[styles.container,{width}]}>
           {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} color={colors.medium}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        // width:'100%',
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginTop:2,
        marginRight:10
    },
    textInput:defaultStyles.text
})


export default AppTextInput;