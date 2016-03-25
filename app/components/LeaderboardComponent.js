import React, { 
 View,
 Text,
 StyleSheet,
 ScrollView,
} from 'react-native'

let _scrollView: ScrollView;

//actual component:

const Leaderboard = ({allUserData, currentUser}) => {

  let userHiglighter = (username, text) => {
    if(username === currentUser) {
      if(text) {
        return styles.userRowTextHighlighted;
      }
      else {
        return styles.userRowHighlighted;
      }
    }
    else {
      if(text) {
        return styles.userRowText;
      }
      else {
        return styles.userRow;
      }
    }
  }
  
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
            <View key={user.id} style={userHiglighter(user.username, false)}>
              <Text style={userHiglighter(user.username, true)}>{user.username}</Text>
              <Text style={userHiglighter(user.username, true)}>{user.beastPoints}</Text>
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
  borderColor: "purple",
  borderWidth: 2,
  margin: 3,
 },
 userRowHighlighted: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: "purple",
  borderWidth: 6,
  margin: 3
 },
 userRowText: {
  fontSize: 25,
 },
 userRowTextHighlighted: {
  fontSize: 25,
  fontWeight: 'bold'
 }

})

export default Leaderboard