import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS, assets } from '../assets/constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
          <Image 
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 90, height: 25 }}
          />

          <View style={{width: 45, height: 45 }}>
            <Image 
              source={assets.person01}
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />

            <Image 
              source={assets.badge}
              resizeMode="contain"
              style={{ position: "absolute", bottom: 0, right: 0, width: 15, height: 15 }}
            />
          </View>
      </View>

      <View style={{
        marginVertical: SIZES.font,
      }}>
        <Text style={{
          fontFamily: "THICCCBOI-Bold",
          fontSize: SIZES.medium,
          color: COLORS.white,
        }}>
          Welcome back, Mantey {''}
          <Image 
            source={require('../assets/icons/wave.png')} 
            style={{width: 20, height: 20}}
            />
        </Text>

        <Text style={{
          fontFamily: "THICCCBOI-Bold",
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base/2,
        }}>
          Let's find you a masterpiece {''}
        </Text>
      </View>

      <View style={{marginTop: SIZES.font}}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,  
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small-2, 
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
            placeholder="Search"
            style={{flex: 1, fontFamily: "THICCCBOI-Medium", fontSize: SIZES.medium, color: COLORS.black, top:5}}
            onChangeText = {onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader