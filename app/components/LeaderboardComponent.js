import React, { 
 View,
 Text,
 Alert,
 RefreshControl,
 StyleSheet,
 ScrollView,
 TouchableOpacity,
 Image,
 Component,
 Modal
} from 'react-native'

let _scrollView: ScrollView;

//actual component:

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, transparent: true, animated: true, photoUrl: ""};
  }
  setModalVisible(visible) {
    this.setState({visible: visible});
  }

  userHiglighter(username, text) {
    if(username === this.props.currentUser.username) {
      if(text) {
        return styles.userRowTextHighlighted;
      }
      else {
        return styles.userRowHighlighted;
      }
    }
    else {
      if(text) {
        return styles.userRowText;
      }
      else {
        return styles.userRow;
      }
    }
  }
  
  render(){

    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;

    return(

       <View style={styles.container}>

         <View style={styles.header}>
         <TouchableOpacity onPress={()=>Alert.alert('Compare where you stand on the leaderboard! Pull down to get the latest standings')}>
           <Image source={{uri: 'https://s3-us-west-1.amazonaws.com/challengrproof/Drawing-layerExport+(2).jpeg'}} style={{width:50, height:50}} resizeMode={Image.resizeMode.contain} />
         </TouchableOpacity>
         </View>


         <View style={styles.body}>
           <View style={styles.titleBar}>
              <Text style ={styles.titleText}>
                Global Challenge Rankings
              </Text>
          </View>

           <ScrollView
            ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}
            // style={styles.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={this.props.updatingLeaderboard}
                onRefresh={()=>{this.props.updateLeaderboard()}}
                tintColor="#ff0000"
                title={"Updating your leaderboard "+ this.props.currentUser.username.split(" ")[0]}
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
            }>
            {this.props.allUserData.map((user) =>
              <View key={user.id} style={this.userHiglighter(user.username, false)}>
                <Text style={this.userHiglighter(user.username, true)}>{user.username}</Text>
                <Text style={this.userHiglighter(user.username, true)}>{user.beastPoints}</Text>
              </View>
            )}
            </ScrollView>

          </View>
          <View style={styles.sub}>
            <TouchableOpacity style={styles.buttonWrap} onPress={() => {this.setModalVisible(true)}}>
              <Text style={styles.textBox}>Your User Stats</Text>
            </TouchableOpacity>
            <Modal
              animated={this.state.animated}
              transparent={this.state.transparent}
              visible={this.state.visible}>
                <View style={[styles.container, modalBackgroundStyle]}>
                  <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                    <View style={styles.modalHeadline}>
                      <Text style={styles.modalHeadlineText}>Your Statistics</Text>
                    </View>
                    <View style={styles.modalClosedChallengeNumbers}>
                      <Text>Closed Challenges:</Text>
                      <Text>7</Text>
                    </View>
                    <View style={styles.modalOpenChallengeNumbers}>
                      <Text>Open Challenges:</Text>
                      <Text>3</Text>
                    </View>
                    <View style={styles.modalPoints}>
                      <View style={styles.modalChickenpoints}>
                        <Text>Chickenpoints</Text>
                        <Text>12</Text>
                      </View>
                      <View style={styles.modalSumopoints}>
                        <Text>Sumopoints</Text>
                        <Text>17</Text>
                      </View>
                    </View>
                    <View style={styles.modalScore}>
                      <Text>YOUR SCORE: 5</Text>
                    </View>
                  </View>
                </View>
            </Modal>
          </View>

       </View>
    )
 }
}

var styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'white'
 },
 header: {
   flex: 0.1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 body: {
   flex: 0.6,
   backgroundColor: '#f5f5f5'
   // borderColor: "yellow",
   // borderWidth: 4
 },
 sub: {
  flex: 0.1,
  // borderColor: "#ff005f",
  // borderWidth: 4,
  backgroundColor: '#ff005f'
 },
 titleText:{
  fontSize: 20,
  fontWeight: "600",
  color: 'white'
 },
 textBox: {
   justifyContent: 'center',
   alignItems: 'center',
   fontSize: 25,
   fontWeight: '600',
   color: 'white'
 },
 buttonWrap: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 titleBar: {
   flex: 0.1,
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: 5,
   backgroundColor: '#ff005f'
 },
 userRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: "purple",
  borderWidth: 2,
  margin: 3,
 },
 userRowHighlighted: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: "purple",
  borderWidth: 6,
  margin: 3
 },
 userRowText: {
  fontSize: 25,
 },
 userRowTextHighlighted: {
  fontSize: 25,
  fontWeight: 'bold'
 },
 innerContainer: {
  alignItems: 'center'
 },
 modalHeadline: {
  borderBottomWidth: 1,
 },
 modalHeadlineText: {
  fontSize: 30,
 }

})

export default Leaderboard