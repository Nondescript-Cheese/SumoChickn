import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'

const Proof = ({createdBy, challengeText, proofUrl, points}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.challengeText}>{challengeText}</Text>
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
    padding: 7.5
  },
  challengeText: {
    fontSize: 30 
  }
})

export default Proof