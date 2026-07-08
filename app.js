import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import pantallalogin from "login";
import DrawerNavigator from "drawernavigator";

const Stack = createNativeStackNavigator();

export default function App() {

const [login,setLogin]=useState(false);

return(

<NavigationContainer>

<Stack.Navigator screenOptions={{headerShown:false}}>

{
login?

<Stack.Screen
name="Principal"
component={DrawerNavigator}
/>

:

<Stack.Screen name="Login">

{()=><LoginScreen ingresar={()=>setLogin(true)}/>}

</Stack.Screen>

}

</Stack.Navigator>

</NavigationContainer>

);

}