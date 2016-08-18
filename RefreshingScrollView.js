import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';

export default class RefreshingScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            displayBlueScrollView: false
        };
    }

    onRefresh() {
        this.setState({refreshing: true});
        setTimeout( () => { this.setState({
                                    refreshing:false,
                                    displayBlueScrollView: true})
                        },
                        500
                    );
    }

  render() {
        const refreshControl = <RefreshControl refreshing={this.state.refreshing}
                                                onRefresh={
                                                    () => {this.onRefresh()}
                                                }/>;

        if (this.state.displayBlueScrollView) {
            return <View style={styles.containerB}>
                <Text style={styles.containerBText}>
                    Red View should not be visible. Should only see blue.
                </Text>
            </View>
        }
        else {
          return <View>
          <ScrollView refreshControl={refreshControl} style={styles.containerA}>
            <Text style={styles.containerAText}>
                This is the red view. Pull down to refresh to blue view.
            </Text>
          </ScrollView>
          </View>
        }
  }
}

const styles = StyleSheet.create({
  containerA: {
    backgroundColor: 'rgba(255,0,0,0.5)',
    height: 500,
  },
  containerAText: {
    color: 'white',
    fontSize: 32,
    margin: 50,
  },
  containerB: {
      backgroundColor: 'rgba(0,0,255,1.0)',
  },
  containerBText: {
      color: 'white',
      fontSize: 32,
      margin: 50,
  }
});
