import React, { 
 View,
 Text,
 Alert,
 RefreshControl,
 StyleSheet,
 ScrollView,
 TouchableOpacity,
 Image
} from 'react-native'

let _scrollView: ScrollView;

//actual component:

const Leaderboard = ({allUserData, currentUser, updateLeaderboard, updatingLeaderboard}) => {

  let userHiglighter = (username, text) => {
    if(username === currentUser.username) {
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
     <TouchableOpacity onPress={()=>Alert.alert('Compare where you stand on the leaderboard! Pull to get the latest standings')}>
       <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/challengrproof/Drawing-layerExport+(2).jpeg'}} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
     </TouchableOpacity>
     </View>

     <View style={styles.body}>

       <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={updatingLeaderboard}
            onRefresh={()=>{updateLeaderboard()}}
            tintColor="#ff0000"
            title={"Updating your leaderboard "+ currentUser.username.split(" ")[0]}
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
    }>
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
   backgroundColor: 'white'
 },
 header: {
   flex: 0.1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 body: {
   flex: 0.7,
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