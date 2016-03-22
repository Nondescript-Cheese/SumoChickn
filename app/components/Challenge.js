import React, {
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'

const Challenge = ({key, onClick, title}) => {
  return (
    <TouchableHighlight onPress={onClick(title)} style={styles.listItem}>
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

// Challenge.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Challenge