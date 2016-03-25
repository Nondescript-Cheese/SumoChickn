import React, { 
 View,
 Text,
 StyleSheet,
 ScrollView,
} from 'react-native'

import Button from 'react-native-button';
import Challenge from './Challenge';

let _scrollView: ScrollView;

let userHiglighter = (username) => {
  if(username === 'M6') {
    return [styles.userRowHighlighted, styles.borderHighlighted];
  }
  else {
    return [styles.userRow, styles.border];
  }
}

let userTextHiglighter = (username) => {
  if(username === 'M6') {
    return 
  }
}

//actual component:

const Leaderboard = ({allUserData}) => {
  
  return (

   <View style={styles.container}>

     <View style={styles.header}>
       <Text style={styles.headerText}>
         Leaderboard
       </Text>
     </View>

     <View style={styles.body}>

       <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {allUserData.map((user) =>
            <View style={userHiglighter(user.username)}>
              <Text style={userTextHiglighter(user.username)}>{user.username}</Text>
              <Text style={userTextHiglighter(user.username)}>{user.beastPoints}</Text>
            </View>
          )}
        </ScrollView>

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
 // sub: {
 //   flex: 0.1,
 //   borderColor: "green",
 //   borderWidth: 4
 // },
 headerText: {
   fontSize: 30
 },
 userRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontSize: 50
 },
 userRowText: {
  fontSize: 50,
 },
 userRowHighlighted: {
  flexDirection: 'row',
  justifyContent: 'space-between',
 },
 userRowTextHighlighted: {
  flexDirection: 'row',
  justifyContent: 'space-between',
 },


 border: {
   borderColor: "purple",
   borderWidth: 2,
   margin: 3,
 },
 borderHighlighted: {
  borderColor: "purple",
  borderWidth: 6,
  margin: 3
 }

})

export default Leaderboard