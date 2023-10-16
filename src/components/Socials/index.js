import React from 'react';
import { View, FlatList } from 'react-native';
import SocialItem from './SocialItem';
import data from '../../data/data'; // Import your data

const Socials = () => {
  const renderSocialItem = ({ item }) => (
    <SocialItem image={item.image} text={item.text} />
  );

  return (
    <View>
      <FlatList
        data={data}
        numColumns={6} // Change this to adjust the number of columns
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSocialItem}
      />
    </View>
  );
};

export default Socials;