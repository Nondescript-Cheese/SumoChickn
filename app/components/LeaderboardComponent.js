import React, { 
 View,
 Text,
 StyleSheet,
 ScrollView,
} from 'react-native'

import Button from 'react-native-button';
import Challenge from './Challenge';

let _scrollView: ScrollView;

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
            <View>
              <Text>{user.username}</Text>
              <Text>{user.beastPoints}</Text>
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


 border: {
   borderColor: "black",
   borderWidth: 4
 }

})

export default Leaderboard