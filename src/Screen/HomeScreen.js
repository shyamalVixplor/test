import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { usersData } from '../../Data/DataSource';
import { deleteUser } from '../../redux/Action/deleteAction';
import { connect } from 'react-redux';





const HomeScreen=(props) => {

function deleteData(item){
   Alert.alert(
     "Alert Title",
     "My Alert Msg",
     [
       {
         text: "Cancel",
         onPress: () => console.log("Cancel Pressed"),
         style: "cancel"
       },
       { text: "OK", onPress:()=> props.deleteUser(item.item.id) }
     ],
     { cancelable: false }
   );
 }
 






          const renderSeparator = () => {
            return (
              <View
                style={{
                  height: 1,
                  marginBottom:10,
                  backgroundColor: "#CED0CE",
                }}
              />
            );
          };


            return (
             <View style={styles.container}>
                <FlatList
                  ItemSeparatorComponent={renderSeparator}
                  data={props.users}
                  renderItem={(item)=>{
                    return(
                      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{width:'10%'}}>
                        <Text>{item.item.id}</Text>
                      </View>
                      <View style={{width:'70%'}}>
                        <Text numberOfLines={1}>
                            {item.item.title}
                        </Text>
                        <Text numberOfLines={1}>
                            {item.item.body}
                        </Text>
              
              
                      </View>
                      <TouchableOpacity style={{width:'20%',alignItems:'flex-end'}} onPress={()=>deleteData(item)}>
                          <Text style={{color:'red'}}>Delete</Text>
                      </TouchableOpacity>
              
                    </View>
                    )

                  }}
                  keyExtractor={item => item.id}
                />
             </View>
            );
          };

const styles = StyleSheet.create({
container: {
    flex:1,
    width:'90%',
    alignSelf:'center'
}
});


const mapStateToProps = (state) => {
  return state.dlt;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser:(id)=>{dispatch(deleteUser(id))},

};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);