import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
console.disableYellowBox = true;

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import SignInScreen from './src/Screen/SignInScreen';
import { connect } from 'react-redux';
import { logOut } from './redux/Action/AuthAction';
import HomeScreen from './src/Screen/HomeScreen';
import AsyncStorage from '@react-native-community/async-storage';




const Stack = createStackNavigator();

const App = (props)=> {
  const [userToken, setUserToken] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('userToken').then((userToken)=>{
      setUserToken(userToken)
    })
  });

  if(props.authLoading){
    return(
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null? (
          <>
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: 'Sign in',
      
                }}
                options={{
                  headerShown: false
                }}
              />
              </>
            ) : (
              <>
              <Stack.Screen
               name="Home"
               component={HomeScreen}
               options={{
                headerTitle:"Home Page",
                headerRight: () => (
                  <Button
                    onPress={props.logOut}
                    title="Logout"
                    color="red"
                  />
                ),
              }}
                />
                </>
            )}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});


const mapStateToProps = (state) => {
  return state.auth;
};

const mapDispatchToProps = dispatch => {
  return {
    logOut:()=>{dispatch(logOut())},

};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);