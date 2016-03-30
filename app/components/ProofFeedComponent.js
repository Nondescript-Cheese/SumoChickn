import React, { 
 View,
 Text,
 ListView,
 StyleSheet,
} from 'react-native'

import Proof from './Proof'


const ProofFeedComponent = ({allClosedChallenges}) => {
  console.log('these are the challenges', allClosedChallenges)

  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  let dataSource = ds.cloneWithRows(allClosedChallenges)

  return (
  	<ListView
      dataSource={dataSource}
      renderRow={(row) => <Proof {...row}/>}
    />
    )
}

export default ProofFeedComponent