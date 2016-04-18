import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
 TouchableHighlight,
 ScrollView,
 RefreshControl,
 TouchableOpacity,
 Image,
 Alert
} from 'react-native'

import Proof from './Proof'


const ProofFeedComponent = ({currentUserId, allClosedChallenges, getClosedChallenges, voteOnChallenge, refreshingClosedChallenges}) => {

  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  let dataSource = ds.cloneWithRows(allClosedChallenges)

  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity onPress={()=>Alert.alert("Check out all the completed challenges and vote on them! Pull down to get the latest challenges")}>
      <Image source={require('../assets/proofLogo.jpeg')} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
    </TouchableOpacity>
    </View>


    <View style={styles.body}>
      <View style={styles.titleBar}>
         <Text style ={styles.titleText}>
           Completed Challenge Feed
         </Text>
     </View>
    <ScrollView 
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    scrollEventThrottle={200}
    refreshControl={
          <RefreshControl
            refreshing={refreshingClosedChallenges}
            onRefresh={()=>{getClosedChallenges(1, 10)}}
            tintColor="#ff0000"
            title={"Loading newly completed challenges"}
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
      }>
    	<ListView
        dataSource={dataSource}
        renderRow={(row) => <Proof {...row} currentUserId={currentUserId} listLength={allClosedChallenges.length} voteOnChallenge={voteOnChallenge}/>}
      />
      <TouchableOpacity style={styles.loadButton} onPress={()=>{getClosedChallenges(1,allClosedChallenges.length+10)}}>
        <Text style={styles.loadText}>
        Load More Challenges
        </Text>
      </TouchableOpacity>
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
 loadText:{
  fontSize: 20,
  color: '#ff005f',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  fontFamily: 'Avenir-Black'
 },
 header: {
   flex: 0.1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 body: {
   flex: 0.6,
   backgroundColor: '#f5f5f5'
 },
 titleText:{
  fontSize: 23,
  color: 'white',
  fontFamily: 'Avenir-Black'

 },
 loadButton:{
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#bdc3c7'
 },
  titleBar: {
   flex: 0.1,
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: 5,
   backgroundColor: '#ff005f'
 },
})

export default ProofFeedComponent