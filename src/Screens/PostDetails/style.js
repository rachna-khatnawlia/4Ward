import {StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
// define your styles
export const styles = StyleSheet.create({
    imgBackground: {
        height: height,
        width: width,
        // resizeMode: 'stretch',
        opacity: 0.9,
    },
    screen: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    nameLocationContainer: {
        width: width - 46,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    profilePhotoBox: {
        marginRight: moderateScale(16),
        // flex:0.12
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameLocation: {
        flex: 0.9,
        justifyContent: 'center'
    },
    name: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },
    location: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        // color: colors.white,
        color:'black',
        // paddingTop:moderateScale(1)
    },
    optionsBox: {
        flex: 0.1,
        justifyContent: 'center',
    },
    optionsImg: {
        alignSelf: 'flex-end'
    },
    captionArea: {
        paddingVertical: moderateScaleVertical(12),
        paddingHorizontal: width / 20,
    },
    captionTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        lineHeight: moderateScale(20),
        color: colors.white,
        marginBottom: moderateScale(10)
    },
    uploadTimeTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13),
        color: colors.greyUploadTime,
        marginBottom: moderateScale(12)
    },

});