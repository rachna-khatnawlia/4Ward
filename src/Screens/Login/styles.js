import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    loginContainer:{ 
        alignItems: 'center' 
    },
    logoStyle: {
        marginTop:moderateScale(95),
        marginBottom:moderateScaleVertical(45),
        // height: moderateScale(352),
        justifyContent: 'center',
    },
    loginTC: {
        marginHorizontal: moderateScale(23),
        marginVertical:moderateScaleVertical(10)
    },
    loginTCtxt: {
        color: colors.greytxt,
        textAlign: 'center',
        fontSize: textScale(12),
        lineHeight: 20,
        fontFamily: fontFamily.barlowRegular
    },
    orBox:{
        marginVertical:moderateScaleVertical(7)
    },  
    orTxt: {
        fontSize: textScale(16),
        color: colors.white,
        fontFamily: fontFamily.barlowRegular,
        // lineHeight:20
    },
    signUpTxtBox:{
        marginVertical:moderateScaleVertical(10)
    }, 
    signUpTxt:{
        color:colors.skyBlue,
        fontFamily:fontFamily.barlowMedium,
        fontSize:textScale(14)
    }
});
