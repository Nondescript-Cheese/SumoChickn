import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
} from 'react-native'

const ProofFeedComponent = ({}) => {
  return (

    <ListView
      dataSource=['row1', 'row2', 'row3', 'row4']
      renderRow={(row) => <Text>{row}</Text>}
    />

    )
}

export default ProofFeedComponent