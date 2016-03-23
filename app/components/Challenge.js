import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'

const Challenge = ({key, onClick, title, id}) => {
  return (
    <TouchableHighlight onPress={()=> {onClick(id)}} style={styles.listItem}>
      <Text style={styles.challengeText}>
        {title}
      </Text>
    </TouchableHighlight>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 2
  },
  challengeText: {
    fontSize: 45 
  }
})

export default Challenge