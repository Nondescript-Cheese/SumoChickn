import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 ScrollView,
 Switch,
 RefreshControl,
 TouchableHighlight
} from 'react-native'

import Button from 'react-native-button';
import Challenge from './Challenge';

let _scrollView: ScrollView;

//actual component:

const MyChallenges = ({visibleChallenges, changeView, toggleChallenge, refreshingChallenges, getNewChallenges, currentUser}) => {
  
  let createChallengeRow = (challenge) => <Challenge key={challenge.id} {...challenge} onClick={toggleChallenge} title={challenge.challengeText} />;

  return (

   <View style={styles.container}>

     <View style={styles.header}>
       <Text style={styles.headerText}>
         My Challenges
       </Text>
     </View>

     <View style={styles.body}>
       <View style={[styles.openCloseChoice, styles.border]}>
         
        <TouchableHighlight style={[styles.border, styles.open]} onPress={() => changeView(false)}>
          <Text style={styles.openCloseChoiceText}>
            open
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.border, styles.closed]} onPress={() => changeView(true)}>
          <Text style={styles.openCloseChoiceText}>
            closed
          </Text>
        </TouchableHighlight>
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
                      title={"Loading your challenges "+ currentUser.username.split(" ")[0]}
                      colors={['#ff0000', '#00ff00', '#0000ff']}
                      progressBackgroundColor="#ffff00"
                    />
        }>
          {visibleChallenges.map(createChallengeRow)}
        </ScrollView>

      </View>

      <View style={styles.sub}>
        <Button style={styles.buttonWrap}>
          <Text style={styles.textBox}>Click a challenge to toggle it once you've completed it!</Text>
        </Button>
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

 challengesList: {
  flex: 0.5,
 },
 border: {
   borderColor: "black",
   borderWidth: 4
 },
 buttonWrap: {
    flex:1,
    justifyContent: 'center'
  },
  textBox: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25
  }
})

export default MyChallenges