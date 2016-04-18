import React, {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight
} from 'react-native'

//possible Error: bc voting is not updated in realtime, it could be that both yes and no are above 2.
//depending on what hit 2 first, this will decide, BUT: here the function assumes that only hit 2.

const Proof = ({currentUserId, id, UserId, createdBy, userChallenged, challengeText, proofUrl, points, voteCountNo, voteCountYes, listLength, voteOnChallenge}) => {
  
  const voteSection = () => {
    if(currentUserId === UserId) {
      userChallenged = 'you';
    }
    if(voteCountYes < 2 && voteCountNo < 2) {
      if(currentUserId === UserId) {
        return (
          <View>
            <Text style={styles.smallText}>You can't vote on your own challenges!</Text>
          </View>
        )
      } else {
        return (
          <View style={styles.buttons}>
            <TouchableOpacity style={{backgroundColor:'#faf0e6',borderWidth: 3, borderColor:"green", borderRadius: 50, padding:3, marginBottom:5, marginTop:10, marginRight:50, marginLeft: 50}} disabled={false} onPress={() => {voteOnChallenge(id, 1, 1, listLength)}}>
              <Image source={require('../assets/sumo.png')} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#faf0e6',borderWidth: 3, borderColor:"red", borderRadius: 50, padding:3, marginBottom:5, marginTop:10, marginRight:50}} disabled={false} onPress={() => {voteOnChallenge(id, 0, 1, listLength)}}>
              <Image source={require('../assets/chicken.png')} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
            </TouchableOpacity>
          </View>
        )
      }
    } else if (voteCountYes >= 2) {
      return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Image source={require('../assets/tick-logo.png')} style={{width:60, height:60}} resizeMode={Image.resizeMode.contain} />
        </View>
      )
    } else {
      return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Image source={require('../assets/cross-logo.png')} style={{width:60, height:60}} resizeMode={Image.resizeMode.contain} />
        </View>
      )
    }
  }

  const pointsInfoSection = () => {
    if(currentUserId === UserId) {
      userChallenged = 'you'
    } else {
      userChallenged = userChallenged.split(" ")[0]
    }
    let approach = ((points === 1) ? 'point' : 'points')
    if(voteCountYes < 2 && voteCountNo < 2) {
      return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Text style={styles.smallText}>{userChallenged} will get {points} Sumo {approach} if the challenge gets accepted!</Text>
        </View>
      )
    } else if (voteCountYes >= 2) {
      return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Text style={styles.smallText}>Challenge accepted! {userChallenged} got {points} Sumo {approach}!</Text>
        </View>
      )
    } else {
      return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Text style={styles.smallText}>Challenge denied! {userChallenged} got {Math.ceil(points / 5)} Chickn {approach}!</Text>
        </View>
      )
    }
  }


  return (
    <View style={styles.listItem}>
      <View style={styles.itemHeadline}>
        <Text style={styles.challengeText}>{createdBy} challenged {userChallenged}:</Text>
      </View>
      <View>
        <View style={styles.itemHeadBody}>
          <View style={styles.textWrap}>
            <Text style={styles.smallChallengeText}>{challengeText}</Text>
          </View>
        <TouchableHighlight style={styles.thumbnail}>
          <Image source={{uri: proofUrl}} style = {{width: 350, height: 350}}  resizeMode={Image.resizeMode.contain} />
        </TouchableHighlight>
          {voteSection()}
        </View>
        {pointsInfoSection()}
      </View>
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    margin: 4,
    backgroundColor:"#ecf0f1"
  },
  textWrap: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "grey",
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemHeadline: {
    backgroundColor: '#696969'
  },
  itemHeadBody: {
    justifyContent: 'space-between'
  },
  challengeText: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    fontFamily: 'Avenir-Heavy'

  },
  smallText: {
    color: '#7f8c8d',
    fontWeight: '500',
    fontSize: 20,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: 'Avenir-Heavy',
    textAlign: 'center',

  },
  smallChallengeText: {
    color: '#ff005f',
    fontWeight: '600',
    fontSize: 21,
    padding: 7,
    fontFamily: 'Avenir-Heavy'

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  thumbnail: {
    borderColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Proof