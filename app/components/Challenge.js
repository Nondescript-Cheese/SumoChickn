import React, {
  Text,
  StyleSheet
} from 'react-native'

const Challenge = ({onClick, title}) => {
  return (
    <li
      onClick={onClick}
      style={styles.listItem}
    >
      {title}
    </li>
  )
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    borderColor: 'blue',
    borderWidth: 2
  }
})

// Challenge.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Challenge