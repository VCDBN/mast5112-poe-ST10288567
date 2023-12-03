//Navigation code

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from 'BookScreen';

import Screen2 from '.HomeScreen';



const MyStack = createNativeStackNavigator();



const App = () => {

  return (

    <NavigationContainer>

      <MyStack.Navigator>

        <MyStack.Screen name="BookScreen" component={Screen1} />

        <MyStack.Screen name="HomeScreen" component={Screen2} />

      </MyStack.Navigator>

    </NavigationContainer>

  );

};



export default App;







import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';





const Screen1 = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

  return (

    <View style={styles.screen}>
}

      <Text>Screen 1</Text>

     

      <Button onPress={() => props.navigation.navigate('Screen2')} title="Go to Screen 2" />

    </View>

  );

};





const styles = StyleSheet.create({

  screen: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

});



export default Bookscreen;





import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';





const Screen2 = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

  return (

    <View style={styles.screen}>

      

      <Text>Screen 2</Text>

      

      <Button onPress={() => props.navigation.navigate('Screen1')} title="Go to Screen 1" />

    </View>

  );

};





const styles = StyleSheet.create({

  screen: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

});



export default Homescreen;

//REFERENCE LINKS USED TO CREATE PAGES.

//https://youtube.com/shorts/FvgqACEbTr0?si=P_TM_fYjjoKgxCnF

//https://youtube.com/shorts/36_SdDVHPHM?si=GXeErAZ48sfWeVP6

//https://www.youtube.com/live/yyGS0adZdsU?si=XLzxs42TbOfds_6Y