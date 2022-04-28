// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import imagePath from '../constants/imagePath';
// import { moderateScale } from '../styles/responsiveSize';

// // create a component
// const BackWardArrow = (
//     onPress = () => { },
// ) => {
//     return (
//         <View>
//             <TouchableOpacity onPress={onPress}>
//                 <Image source={imagePath.backwardArrow} style={styles.arrowPic}/>
//             </TouchableOpacity>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     arrowPic:{
//         height:moderateScale(20),
//         width:moderateScale(20),
//     }
// });

//make this component available to the app
// export default BackWardArrow;

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from '../styles/responsiveSize'
import { useNavigation } from '@react-navigation/native'
import imagePath from '../constants/imagePath'
import { moderateScaleVertical } from '../styles/responsiveSize'


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
        alignItems:'center',
        alignSelf:'flex-start',
        marginLeft:moderateScale(30)
    }
})
