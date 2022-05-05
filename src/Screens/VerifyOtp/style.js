import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScaleVertical, moderateScale, textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    otpPassword: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(24),
        marginBottom: moderateScale(15)
    },

    flexView: {
        flex: 0.15,
        marginRight: moderateScale(30),
    },

    showNo: {
        fontFamily: fontFamily.barlowBold,
        fontSize: textScale(23),
        color: colors.white
    },
    editNo: {
        color: colors.Forgot,
        fontSize: textScale(15),
        fontFamily: fontFamily.barlowRegular,
        marginVertical: moderateScaleVertical(10)
    },
    resendeOtp: {
        marginHorizontal: moderateScale(26),
        color: colors.Forgot,
        fontSize: textScale(15),
        fontFamily: fontFamily.barlowRegular,
        alignSelf:'flex-start'
    }

});