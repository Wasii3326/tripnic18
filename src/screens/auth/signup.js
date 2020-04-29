import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,TextInput,Dimensions} from 'react-native';
import {emailSignup} from '../../redux/actions/auth_actions'
import Loading from '../common/loading'
import Icon from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'

const {width} = Dimensions.get('window')
const mapStateToProps = (state)=>{
  return{
    isOrganizer:state.authReducer.isOrganizer,
  };
}

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        email:this.props.route.params?.email,        
        password:"",
        isLoading:false
    }
}
  
   emailSignup = async()=>{
       try {
            this.setState({isLoading:true})
            await emailSignup(this.state.email,this.state.password)
            this.setState({isLoading:false})
            this.props.navigation.navigate("CreateAccount",{isSocialAccount:false})
       } 
       catch (error) {
        alert(error)   
       }
   }

  render(){
    return (
      <>
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <View style={styles.container} >
          <View style={styles.iconLeft} >
            <Icon onPress={()=>this.props.navigation.goBack()} name="ios-arrow-round-back" size={40} />
          </View>
          <View style={styles.interactionContainer}>
            <View style={{justifyContent:"flex-start", width:width, paddingLeft:40}} >
              <Text style={{fontSize:22,fontWeight:"bold"}}>Signup</Text>
            </View>
            <View style={styles.input} >
              <TextInput secureTextEntry={true} style={styles.inputText} 
              onChangeText={(password)=>{
                this.setState({password})
              }}
              placeholder="Enter Password To Continue" />
            </View>
            <View style={styles.authButtonContainer}>
                <TouchableOpacity activeOpacity={0.9} style={
                  this.props.isOrganizer?styles.organizerLoginButton:styles.travellerLoginButton
                  } onPress={this.emailSignup} >
                  <Text style={styles.ButtonText} >Signup</Text>
                </TouchableOpacity>
              </View>
           
          </View>
          <Loading visible={this.state.isLoading} />
        </View>
        {/* <View style={styles.container}>
          
          <TextInput onChangeText={(password)=>{
              this.setState({password})
          }}
          placeholder="Enter Your Password"
          />
          <Button title="Signup" onPress={this.emailSignup}></Button>
          
          <Loading visible={this.state.isLoading} />
        
        </View> */}
      </>
    );
  }
};


export default connect(mapStateToProps)(Signup)


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  interactionContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    //backgroundColor:"red",
  },
  termsContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop:100
    
  },
  iconLeft:{
    height:50,
    paddingLeft:15,
    justifyContent:"center",
    width:width,
  },
  socialButtonsContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:30
   
  },
  googleButton:{
    backgroundColor:"#DD4B39",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:5
  },
  fbButton:{
    backgroundColor:"#3B5998",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:5
  },
  authButtonContainer:{
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:30
   
  },
  organizerSignupButton:{
    backgroundColor:"#2F9AE3",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:5
  },
  organizerLoginButton:{
    backgroundColor:"#2F9AE3",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:5
  },
  travellerSignupButton:{
    backgroundColor:"#2BB396",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginLeft:5
  },
  travellerLoginButton:{
    backgroundColor:"#2BB396",
    width:135,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    marginRight:5
  },
  ButtonText:{
    fontSize:20,
    color:"white"
  },
  termsText:{
    color:"#989595",
    textAlign:"center"
  },
  orConnectWithText:{
    color:"#989595",
    //paddingBottom:20
  },
  input:{
    width:width-(2*40),
    borderWidth:1,
    marginTop:20,
    borderRadius:10,
    borderColor:"#A7A5A5",
    paddingLeft:10,
    justifyContent:"flex-start"
  },
  inputText:{
    fontSize:16,
    color:"black"
  }

});
