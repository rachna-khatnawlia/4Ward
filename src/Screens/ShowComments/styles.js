import { StyleSheet } from 'react-native';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';

// define your styles
export const styles = StyleSheet.create({
    commentcontainer: {
        // backgroundColor:'red',
        width: width - moderateScale(46),
        alignSelf: 'center',
    },
    nameLocationContainer: {
        width: width - 46,
        flexDirection: 'row',
        alignSelf: 'center',
        // backgroundColor:'yellow'
    },
    profilePhotoBox: {
        marginRight: moderateScale(16),
    },
    profilePic: {
        height: moderateScale(45),
        width: moderateScale(45),
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameLocation: {
        flex: 0.9,
        justifyContent: 'center',
        marginLeft: moderateScale(12)
    },
    name: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(16),
        color: colors.white
    },

    caption: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(14),
        marginLeft: moderateScale(7),
        color: colors.greyTutText
    },
    optionsBox: {
        flex: 0.1,
        justifyContent: 'center',
    },
    commentedBy: {
        marginLeft: moderateScale(5),
        marginVertical: moderateScale(10),
        fontSize: textScale(13),
        color: colors.white
    },
    commentBox: {
        marginHorizontal: moderateScale(62)
    },
    profilePicComment: {
        height: moderateScale(35),
        width: moderateScale(35),
        borderRadius: width / 2,
        resizeMode: 'cover',
    },
    nameComment: {
        fontFamily: fontFamily.barlowMedium,
        fontSize: textScale(14),
        color: colors.white
    },
    commentsHeading:{ 
        textAlign: 'center', 
        marginVertical: moderateScale(5) 
    }

});
