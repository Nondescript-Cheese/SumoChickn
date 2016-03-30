import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 ScrollView,
 Image,
 Switch,
 RefreshControl,
 TouchableHighlight,
 TouchableOpacity
} from 'react-native'

import Button from 'react-native-button';
import Challenge from './Challenge';
import { Actions } from 'react-native-router-flux'


let _scrollView: ScrollView;


const MyChallenges = ({visibleChallenges, changeView, cameraChallengeId, refreshingChallenges, getNewChallenges, currentUser, challengesViewStatus, getChallengePhoto}) => {

  
  let createChallengeRow = (challenge) => <Challenge key={challenge.id} {...challenge} onClick={cameraChallengeId} challengesViewStatus={challengesViewStatus} getChallengePhoto = {getChallengePhoto} title={challenge.challengeText} />;

  return (

   <View style={styles.container}>

     <View style={styles.header}>
     <TouchableOpacity>
       <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/challengrproof/Drawing-layerExport+(1).jpeg'}} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
     </TouchableOpacity>
     </View>

     <View style={styles.body}>
       <View style={styles.openCloseChoice}>
         
        <TouchableOpacity activeOpacity={0.1} style={challengesViewStatus ? styles.open : styles.selected} onPress={() => changeView(false)}>
          <Text style={challengesViewStatus ? styles.openCloseChoiceText : styles.selectedText}>
            open
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={challengesViewStatus ? styles.selected : styles.closed} onPress={() => changeView(true)}>
          <Text style={challengesViewStatus ? styles.selectedText : styles.openCloseChoiceText}>
            closed
          </Text>
        </TouchableOpacity>
       </View>

       <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshingChallenges}
            onRefresh={()=>{getNewChallenges(currentUser.id)}}
            tintColor="#ff0000"
            title={"Loading your challenges "+ (currentUser.username.split(" ")[0]|| "")}
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
      }>
        {visibleChallenges ? visibleChallenges.map(createChallengeRow) : <Text>No challenges at the moment!</Text>}
        </ScrollView>

      </View>

      <View style={styles.sub}>
        <TouchableHighlight style={styles.buttonWrap} onPress={() => Actions.createChallenge()}>
          <Text style={styles.textBox}>Create Challenge</Text>
        </TouchableHighlight>
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
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'white'
 },
 body: {
   flex: 0.6,
   borderColor: "yellow",
   borderWidth: 4,
   backgroundColor: 'white'
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
  justifyContent: 'center',
  backgroundColor: '#fffaf0',
  borderWidth: 3,
  borderColor: '#fffaf0'
 },
 closed: {
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fffaf0',
  borderWidth: 3,
  borderColor: '#fffaf0'
 },
 selected:{
  flex: 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ff005f'
},
 openCloseChoiceText: {
  fontSize: 20,
 },
 selectedText: {
  fontSize: 20,
  color: 'white',
  fontWeight: '600'
 },
 challengesList: {
  flex: 0.5,
 },
 border: {
   borderColor: "black",
   borderWidth: 4
 },
 buttonWrap: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
  }
})

export default MyChallenges