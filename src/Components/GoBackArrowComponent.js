import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, textScale } from '../styles/responsiveSize'
import { useNavigation } from '@react-navigation/native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'

const BackWardArrow = ({ onPressBack, txtOnHeader }) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={!!onPressBack ? onPressBack : () => goBack()}>
                <Image source={imagePath.backwardArrow} />
            </TouchableOpacity>
            {
                (txtOnHeader) ?
                    <View>
                        <Text style={styles.heading}>{txtOnHeader}</Text>
                    </View>
                    :
                    null
            }
        </View>
    )
}

export default BackWardArrow
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: moderateScale(56),
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: moderateScale(30),
    },
    heading:{
        marginLeft:moderateScale(16),
        color:colors.white,
        fontSize:textScale(16),
        fontFamily:fontFamily.barlowMedium
    }
})
