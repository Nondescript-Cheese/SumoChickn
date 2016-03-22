import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 ScrollView
} from 'react-native'

import Challenge from './Challenge';

//dummy-data and dummy-function which will be replaced as soon as redux is completely built in:

var challenges = [{
        id: 1,
        title: 'No Facebook',
        text: 'Today my friend, you should not go on Facebook at all!!!',
        completed: false
      },
      {
        id: 2,
        title: 'Run 10 miles',
        text: 'Run Forest, run run run!!',
        completed: true
      },
      {
        id: 3,
        title: '10.000 push-ups',
        text: 'Go hard or go home. In case you dont go hard, ur a dog with 5 ears!',
        completed: false
      },
      {
        id: 4,
        title: '100.000 squats',
        text: 'Go hard or go home. In case you dont go hard, ur a dog with 5 ears!',
        completed: false
      },
      {
        id: 5,
        title: 'train fast moonwalking',
        text: 'Go hard or go home. In case you dont go hard, ur a dog with 5 ears!',
        completed: false
      },
      {
        id: 6,
        title: 'watch all spongebob episodes',
        text: 'Go hard or go home. In case you dont go hard, ur a dog with 5 ears!',
        completed: false
      }
      ];

var challengeClick = (title) => {
  console.log('this is the following challenge: ' + title);
}

var createChallengeRow = (challenge, i) => <Challenge key={i} onClick={challengeClick} title={challenge.title} />;

var _scrollView: ScrollView;

//actual component:

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

       <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          {challenges.map(createChallengeRow)}
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
 }
})

export default MyChallenges