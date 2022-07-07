import { View, Text, Image, StatusBar, FlatList } from 'react-native';
import React from 'react';

import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../assets/constants';
import { CircleButton, RectButton } from '../components/CircleButton';
import { SubInfo } from '../components/SubInfo';
import DetailsBid from '../components/DetailsBid';
import DetailsDesc from '../components/DetailsDesc';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373, }}>
    <Image 
      source={data.image}
      resizeMode= "cover"
      style={{ width: '100%', height: '100%'}}
    />

    <CircleButton 
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={10}
    />

    <CircleButton 
      imgUrl={assets.heart}
      right={15}
      top={10}
    />
  </View>
)

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={{flex: 1 }}>
      <View style={{
        width: '100%',
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1,
        }}>
        <RectButton 
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList 
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 5, backgroundColor: 'white'}}
        ListHeaderComponent={() => 
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={data} />

              {data.bids.length > 0  && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: "THICCCBOI-Bold",
                  color: COLORS.primary
                }}>
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        }
      />
    </View>
  )
}

export default Details