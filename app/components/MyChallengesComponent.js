import React, { 
 View,
 Text,
 ListView,
 TextInput,
 StyleSheet,
 TouchableHighlight,
 ScrollView
} from 'react-native'

import Challenge from './Challenge';

//dummy-data and dummy-function which will be replaced as soon as redux is completely built in:

var alternativeDummyData = [
  'first challenge',
  'second challenge',
  'third challenge',
  'fourth challenge',
  'fifth challenge'
];

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
      }
      ];

var challengeClick = (title) => {
  console.log('this is the following challenge: ' + title);
}

var createChallengeRow = (title, i) => <Challenge key={i} onClick={challengeClick} title={title} />;

 // Old ul-version of list:

   // <View style={styles.challengesList}>
   //   <ul>
   //     {challenges.map(challenge =>
   //       <Challenge
   //         key = {challenge.id}
   //         {...challenge}
   //         onClick={() => challengeClick(challenge.id)}
   //       />
   //     )}
   //   </ul>
   // </View>


   /*<Challenge
               key = {challenge.id}
               {...challenge}
               onClick={() => challengeClick(challenge.id)}
             />




  <ListView
          dataSource={dummy}
          renderRow={(rowData) => 
            <Text>{dummy}</Text>}
       />
*/
// old version wrapped up

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
          {alternativeDummyData.map(createChallengeRow)}
        </ScrollView>


       

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

 challengesList: {
  flex: 0.5,
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