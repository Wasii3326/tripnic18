import React from 'react'
import {View,Text, Button,StyleSheet} from 'react-native'
import { store } from '../../../redux/store'
import { signout } from '../../../redux/actions/auth_actions'
import {FAB} from 'react-native-paper'
import AddTrip from './add_trip'



export default class TripsMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
    }

    closeAddTripModal = ()=>{
        this.setState({visible:false})
    }

    render(){
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            
                <Text>My Trips</Text>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    color="white"
                    onPress={() => this.setState({visible:true})}
                />
                
                <AddTrip visible={this.state.visible} close = {this.closeAddTripModal} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor:"#2F9AE3"
    },
  })
  