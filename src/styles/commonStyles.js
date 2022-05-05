import { StyleSheet } from 'react-native';
import colors from './colors';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import fontFamily from './fontFamily';

export const commonStyle = StyleSheet.create({
    flexRow:{
        flex:1,
        flexDirection:'row'
    },
    welcome:{
        marginHorizontal:moderateScale(28),
    },
    welcomeHeading:{
        color:colors.white,
        fontFamily:fontFamily.barlowBold,
        fontSize:textScale(24),
        marginBottom:moderateScaleVertical(10)
    },
    welcomeDes:{
        color:colors.greytxt,
        fontFamily:fontFamily.barlowRegular,
        fontSize:textScale(13.5),
        marginBottom:moderateScaleVertical(10)
    },
    phoneInputBox:{ 
        flexDirection: 'row', 
        marginHorizontal: moderateScale(23) 
    },
    countryPickerBg:{
        flex:0.3,
        height:moderateScale(58),
        paddingBottom:25,
        paddingLeft:moderateScale(10),
        backgroundColor:colors.inputColor,
        justifyContent:'center',
        marginVertical:moderateScale(12),
        borderRadius:moderateScale(8)
    },
    rowSpaceBetween:{
        flexDirection:'row', 
        justifyContent:'space-between'
    }
})
