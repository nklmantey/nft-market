import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS, SHADOWS } from '../assets/constants';

export const CircleButton = ({ imgUrl, handlePress, ...rest }) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...rest
    }}
    onPress={handlePress}
    > 
      <Image 
        source={imgUrl}
        resizeMode = "contain"
        style = {{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...rest }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidth,
      padding: SIZES.small,
      ...rest
    }}
    onPress={handlePress}
    > 
      <Text style={{
        fontFamily: "reost-bold",
        fontSize: fontSize,
        color: COLORS.white,
        textAlign: 'center',
      }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}

