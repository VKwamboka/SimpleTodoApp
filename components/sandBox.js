import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export  default function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1, //takes all available space
        flexDirection:'row',
        paddingTop:40,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#ddd'
    },
    boxOne:{
        flex:1,
        backgroundColor:'violet',
        padding:10,
    },
    boxTwo:{
        flex:1,
        backgroundColor:'gold',
        padding:10,
    },
    boxThree:{
        flex:1,
        backgroundColor:'coral',
        padding:10,
    },
    boxFour:{
        flex:1,
        backgroundColor:'skyblue',
        padding:10,
    },

})