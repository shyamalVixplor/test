import React,{useEffect} from 'react'
import { TextInput, Button,View, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { signin } from '../../redux/Action/AuthAction';


const SignInScreen = (props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    function signIn(){
        if(username == null || username == undefined || username == ''){
            alert("please provide User Name")
    
        }else if(password == null || password == undefined || password == ''){
            alert("please provide Password")
    
        }else{
            const credential={
              username:username,
              password:password
            }
             props.login(credential);
        }

    }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title={props.authLoading?'Loading...':'Sign in'} onPress={signIn} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const mapStateToProps = (state) => {
  return state.auth;
};

const mapDispatchToProps = dispatch => {
  return {
    login:(credential)=>{dispatch(signin(credential))},

};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);