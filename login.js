import React from "react";
import {View,Text,Button,StyleSheet} from "react-native";

export default function pantallalogin({ingresar}){

return(

<View style={styles.container}>

<Text style={styles.titulo}>
App Navegación Avanzada
</Text>

<Button
title="Iniciar Sesión"
onPress={ingresar}
/>

</View>

);

}

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

titulo:{
fontSize:30,
marginBottom:30,
fontWeight:"bold"
}

});