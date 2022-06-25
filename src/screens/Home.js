import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { COLORS, NFTData } from '../assets/constants';

import FocusedStatusBar from '../components/FocusedStatusBar'; 
import HomeHeader from '../components/HomeHeader'; 
import NFTCard from '../components/NFTCard'; 

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) => 
      item.name.toLowerCase().includes(value.toLowerCase())
      );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <View>
      <View>
        <FocusedStatusBar 
          background={COLORS.primary}
        />

        <View>
          <View style={{zIndex: 0, height: '100%'}}>
            <FlatList 
              data={nftData}
              renderItem={({ item }) => <NFTCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            />
          </View>

          <View style={{
            position: "absolute", 
            top: 0, 
            bottom: 0, 
            right: 0, 
            left: 0,
            zIndex: -1
          }}>
            <View style={{height: 300, backgroundColor: COLORS.primary}}/>
            <View style={{backgroundColor: COLORS.white, flex: 1}}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Home;
