import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, textScale, width } from '../styles/responsiveSize';

export default function Button({
    ButtonText = '',
    btnStyle = {},
    buttonTxt = {},
    btnIcon,
    onPress = () => { },
}) {
    return (

        <TouchableOpacity
            style={{
                ...styles.btnStyle,
                ...btnStyle,
            }}
            onPress={onPress}>
            {!!btnIcon ? <Image source={btnIcon} style={styles.imgIcon} /> : <View />}


            <Text style={{
                ...styles.buttonTxt,
                ...buttonTxt
            }}>{ButtonText}</Text>

            <View />

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(48),
        width: width-46,
        backgroundColor: colors.themeredColor,
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf:'center'
    },
    buttonTxt: {
        fontSize: textScale(14),
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
    },
    imgIcon: {
        marginLeft: moderateScale(19)
    }
});
