import React, { 
 View,
 Text,
 ListView,
 TextInput,
 StyleSheet, 
 // PropTypes,
 TouchableHighlight
} from 'react-native'

// const DropDown = require('react-native-dropdown');
// const Button = require('react-native-button');

// const {
//  Select,
//  Option,
//  OptionList,
//  updatePosition
// } = DropDown;


const MyChallenges = () => {
 return (

   <View style={styles.container}>

     <View style={styles.header}>
       <Text style={styles.headerText}>
         Create Challenge
       </Text>
     </View>

     <View style={styles.body}>

       <View style={[styles.openCloseChoice, styles.border]}>
         
        <View style={[styles.border, styles.open]}>
          <Text style={styles.openCloseChoiceText}>
            open
          </Text>
        </View>

        <View style={[styles.border, styles.closed]}>
          <Text style={styles.openCloseChoiceText}>
            closed
          </Text>
        </View>

       </View>

       <View style={[styles.border, styles.description]}>
         <Text style={styles.bodyTitle}>
           Description
         </Text>
         <TextInput multiline={true} style={styles.bodyDescription} />
       </View>

       <View style={styles.choose}>

         <View style={styles.inline}>
           
         </View>

         <View style={styles.inline}>
           
         </View>
       </View>

     </View>

     <View style={styles.sub}>
    
     </View>

   </View>
 )
}

var styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 header: {
   flex: 0.1,
   borderColor: "red",
   borderWidth: 4,
   alignItems: 'center',
   justifyContent: 'center'
 },
 body: {
   flex: 0.6,
   borderColor: "yellow",
   borderWidth: 4
 },
 sub: {
   flex: 0.1,
   borderColor: "green",
   borderWidth: 4
 },
 headerText: {
   fontSize: 30
 },
 openCloseChoice: {
   flex: 0.1,
   flexDirection: 'row',
   marginBottom: 5
 },

 open: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center'
 },
 closed: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center'
 },
 openCloseChoiceText: {
  fontSize: 20,
 },

// -----------

 bodyTitle: {
   fontSize: 20,
 },
 bodyInput: {
   flex: 1,
   borderColor: "brown",
   borderWidth: 4,
 },
 bodyDescription: {
   flex: 1,
   fontSize: 25,
   borderColor: "brown",
   borderWidth: 4
 },
 choose: {
   borderColor: "orange",
   borderWidth: 4,
   flex: 0.3
 },
 
 description: {
   flex: 0.5
 },
 border: {
   borderColor: "black",
   borderWidth: 4
 },
 inline: {
   flexDirection: "row",
   flex: 1
 },
 buttonWrap: {
   flex:1
 }
})

export default MyChallenges