import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image
} from 'react-native'

const Proof = ({createdBy, userChallenged, challengeText, proofUrl, points}) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.itemHeadline}>
        <Text style={styles.challengeText}>{createdBy} challenged {userChallenged}:</Text>
      </View>
      <View style={styles.itemBody}>
        <View style={styles.itemHeadBody}>
          <View>
            <Text>{challengeText}</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableHighlight>
              <Text>YES</Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text>NO</Text>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight style={styles.thumbnail}>
          <Image source={{uri: proofUrl}} style = {{width: 350, height: 350}}  resizeMode={Image.resizeMode.contain} />
        </TouchableHighlight>
        <View style={styles.explanation}>
          <Text>{userChallenged} gets {points} Points unless more than X people vote NO in the next XX:XX</Text>
        </View>
      </View>
    </View>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 2,
    margin: 7.5
  },
  itemHeadline: {
    borderColor: 'green',
    borderWidth: 2,
  },
  itemHeadBody: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemBody: {
    borderColor: 'pink',
    borderWidth: 1
  },
  challengeText: {
    fontSize: 20 
  },
  buttons: {
    flexDirection: 'row',
  },
  thumbnail: {
    borderColor: 'lightblue'
  }
})

export default Proof