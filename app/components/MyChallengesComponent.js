import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 ScrollView,
 Image,
 Switch,
 Alert,
 RefreshControl,
 TouchableHighlight,
 TouchableOpacity
} from 'react-native'

import Button from 'react-native-button';
import Challenge from './Challenge';
import { Actions } from 'react-native-router-flux'


let _scrollView: ScrollView;


const MyChallenges = ({visibleChallenges, changeView, cameraChallengeId, refreshingChallenges, getNewChallenges, currentUser, challengesViewStatus, getChallengePhoto, quoteMaker}) => {

  
  let createChallengeRow = (challenge) => <Challenge key={challenge.id} {...challenge} onClick={cameraChallengeId} challengesViewStatus={challengesViewStatus} getChallengePhoto = {getChallengePhoto} title={challenge.challengeText} />;

  return (

   <View style={styles.container}>

     <View style={styles.header}>
     <TouchableOpacity onPress={()=>{Alert.alert('Sumo-Chicken says: '+ '"'+ quoteMaker()+'"')}}>
       <Image source={require('../assets/myChallengesLogo.jpeg')} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
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
        contentContainerStyle={!visibleChallenges ? styles.scrollView : styles.unScrollView }
        ref={(scrollView) => { _scrollView = scrollView; }}
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
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
        {visibleChallenges ? visibleChallenges.map(createChallengeRow) : <Text style={styles.emptyChallengeText}>No challenges at the moment!</Text>}
        </ScrollView>

      </View>

      <View style={styles.sub}>
        <TouchableOpacity style={styles.buttonWrap} onPress={() => Actions.createChallenge()}>
          <Text style={styles.textBox}>Create Challenge</Text>
        </TouchableOpacity>
      </View>

   </View>
 )
}

var styles = StyleSheet.create({
 container: {
   flex: 1,
 },
 unScrollView:{
 },
 scrollView: {
  justifyContent: 'center',
  alignItems: 'center'
 },
 emptyChallengeText:{
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '600',
  fontSize: 20,
  marginTop: 10
 },
 header: {
   flex: 0.1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'white'
 },
 body: {
   flex: 0.6,
   // borderColor: "yellow",
   // borderWidth: 4,
   backgroundColor: '#f5f5f5'
 },
 sub: {
   flex: 0.1,
   // borderColor: "#ff005f",
   // borderWidth: 4,
   backgroundColor: '#ff005f'
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
  fontSize: 23,
  fontFamily: 'Avenir-Heavy',
  fontWeight: '600'
 },
 selectedText: {
  fontSize: 23,
  color: 'white',
  fontFamily: 'Avenir-Black'
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
    alignItems: 'center',
    backgroundColor: '#ff005f'
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Avenir-Heavy'

  }
})

export default MyChallenges