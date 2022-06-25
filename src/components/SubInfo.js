import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, SHADOWS, FONTS, assets } from '../assets/constants'

export const NFTTitle = ({ title, subtitle, titleSize, subtitleSize }) => {
  return (
    <View>
      <Text style={{
        fontFamily: "THICCCBOI-Medium",
        fontSize: titleSize,
        color: COLORS.primary, 
        }}>
        {title}
    </Text>

    <Text style={{
        fontFamily: "THICCCBOI-Medium",
        fontSize: subtitleSize,
        color: COLORS.primary, 
        }}>
        {subtitle}
    </Text>
    </View>
  )
}

export const EthPrice = ({ price }) => {
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
    }}>
      <Image 
        source={assets.eth} 
        resizeMode = "contain"
        style={{width: 20, height: 20, marginRight: 2}} 
      />
      <Text
        style={{
            fontFamily: "THICCCBOI-Bold",
            fontSize: SIZES.font,
            color: COLORS.primary
        }}
      > 
        {price} 
     </Text>
    </View>
  )
}

export const ImgComp = ({ imgUrl, index }) => {
    return (
      <Image 
        source={imgUrl}
        resizeMode = "contain"
        style = {{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    )
  }

  export const People = () => {
    return (
      <View style={{
          flexDirection: 'row',
      }}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <ImgComp 
                imgUrl={imgUrl}
                index={index}
                key={`People-${index}`}
            />
        ))}
      </View>
    )
  }

  export const EndDate = () => {
    return (
      <View style={{
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
          ...SHADOWS.light,
          elevation: 1,
          maxWidth: '50%',
      }}>
        <Text style={{
            fontFamily: "THICCCBOI-Regular",
            fontSize: SIZES.small,
            color: COLORS.primary,  
        }}>
            Ending in
        </Text>

        <Text style={{
            fontFamily: "THICCCBOI-Bold",
            fontSize: SIZES.medium,
            color: COLORS.primary, 
        }}>
            12h, 30 m
        </Text>
      </View>
    )
  }

  export const SubInfo = () => {
    return (
      <View style={{
          width: '100%',
          paddingHorizontal: SIZES.font,
          marginTop: -SIZES.extraLarge,
          flexDirection: "row",
          justifyContent: "space-between",
      }}>
        <People />
        <EndDate />
      </View>
    )
  }
  
  
  
