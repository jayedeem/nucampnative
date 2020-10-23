import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

const renderPartner = ({ item }) => {
  console.log('renderPartner', item);
  return (
    <ListItem
      title={item.name}
      subtitle={item.description}
      leftAvatar={{ source: { uri: baseUrl + item.image } }}
    />
  );
};

const MissionStatement = ({ title }) => {
  return (
    <Card title={title} Divider>
      <Text>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
};

class About extends Component {
  static navigationOptions = {
    title: 'About Us',
  };
  render() {
    return (
      <ScrollView>
        <MissionStatement title="Our Mission" />
        <Card title="Community Partners" Divider>
          <FlatList
            data={this.props.partners.partners}
            renderItem={renderPartner}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(About);
