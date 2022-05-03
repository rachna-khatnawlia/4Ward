import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from '../styles/responsiveSize'
import { useNavigation } from '@react-navigation/native'
import imagePath from '../constants/imagePath'

const BackWardArrow = ({ onPressBack }) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={!!onPressBack ? onPressBack : () => goBack()}>
                <Image source={imagePath.backwardArrow} />
            </TouchableOpacity>
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
        marginLeft: moderateScale(30)
    }
})
