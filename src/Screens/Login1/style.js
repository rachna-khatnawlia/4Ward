import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    otpPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(24),
        marginBottom: moderateScale(15)
    },
    otpPassword1: {
        flex: 0.5
    },
    otpPassword1Txt: {
        color: colors.white,
        fontSize: textScale(13),
        fontFamily: fontFamily.barlowRegular
    },
    otpPassword2: {
        flex: 0.5,
        alignItems: 'flex-end',
    },
    otpPassword2Txt: {
        color: colors.Forgot,
        fontSize: textScale(13),
        fontFamily: fontFamily.barlowRegular
    },

});