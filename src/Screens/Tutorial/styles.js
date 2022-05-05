import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';

export const introStyles = StyleSheet.create({
    mainDiv: {
        backgroundColor: colors.themeColor,
        flex: 1
    },
    getStartStyle: {
        fontSize: textScale(14),
        color: colors.white,
        lineHeight: moderateScale(42),
        alignSelf: 'center',
        marginRight: moderateScale(23)
    },
    container: {
        alignSelf: 'center',
        height: height - height / 4,
        width: width - 60,
        marginTop: moderateScaleVertical(24),
        backgroundColor: '#4C4C4C',
        borderRadius: moderateScale(16),
    },
    divideIntroArea: {
        flex: 0.5,
        justifyContent: 'center'
    },
    image: {
        width: moderateScale(width / 1.5),
        height: moderateScale(width / 1.5),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: moderateScaleVertical(100),
    },
    tittle: {
        color: colors.white,
        textAlign: 'center',
        fontSize: textScale(22),
        fontFamily: fontFamily.barlowMedium,
    },
    text: {
        color: colors.greyTutText,
        textAlign: 'center',
        lineHeight: moderateScale(22),
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(13)
    },
    textview: {
        marginHorizontal: moderateScale(24),
        paddingTop: moderateScale(12)
    },
    next: {
        color: colors.white,
        fontSize: textScale(15)
    },
    activeDotStyle: {
        height: moderateScale(4),
        width: moderateScale(40),
        bottom: 4,
        right: moderateScale(90),
        backgroundColor: 'red'
    },
    dotStyle: {
        width: moderateScale(21),
        height: moderateScale(4),
        backgroundColor: colors.white,
        bottom: 4,
        right: moderateScale(90),
    }
});