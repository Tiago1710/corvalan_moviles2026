import React from "react";
import {View,Text,StyleSheet} from "react-native";

export default function AboutScreen(){

return(

<View style={styles.container}>

<Text style={styles.texto}>
Aplicación realizada para la práctica 07
</Text>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center",
padding:20
},

texto:{
fontSize:25,
textAlign:"center"
}

});