import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 ScrollView,
} from 'react-native'

import Button from 'react-native-button';
import Challenge from './Challenge';

var challengeClick = (title) => {
  console.log('this is the following challenge: ' + title);
}

var createChallengeRow = (challenge, i) => <Challenge key={i} onClick={challengeClick} title={challenge.challengeText} />;

var _scrollView: ScrollView;

//actual component:

const MyChallenges = ({visibleChallenges}) => {
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

       <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {visibleChallenges.map(createChallengeRow)}
        </ScrollView>

      </View>

      <View style={styles.sub}>
        <Button style={styles.buttonWrap}>
          <Text>SEND CHALLENGE</Text>
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
    flex:1
  }
})

export default MyChallenges