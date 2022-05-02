import { StyleSheet } from 'react-native';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';

export const introStyles = StyleSheet.create({
    mainDiv: {
        backgroundColor: '#2E2E2E',
        flex: 1
    },
    // tutMainStyle: {
    //     alignSelf: 'center',
    //     height: height - height / 4,
    //     width: width - 60,
    //     marginTop: moderateScale(15),
    //     backgroundColor: '#4C4C4C',
    //     borderRadius: moderateScale(16),
    //     shadowColor: '#4C4C4C',
    //     shadowOffset: { height: -2, width: -2 },
    //     shadowOpacity: 0.4,
    //     shadowRadius: 5,
    // },
    // titleDesContainer:{
    //     flex: 0.5,
    //     justifyContent: 'center',
    //     paddingTop: moderateScaleVertical(40)
    // },
    // tittleTextView:
    // {
    //     width: moderateScale(280),
    //     height: moderateScale(40)
    // },
    // tittleText:
    // {
    //     color: '#FFFFFF',
    //     fontSize: textScale(22),
    //     textAlign: 'center'
    // },
    // desText:
    // {
    //     color: '#FFFFFF',
    //     textAlign: 'center'
    // },
    // tutImage:
    // {
    //     width: moderateScale(width / 1.5),
    //     height: moderateScale(width / 1.5),
    //     resizeMode: 'contain',
    //     alignSelf: 'center',
    //     marginTop: moderateScaleVertical(100),
    // },
    // nextBtn: {
    //     color: colors.white,
    //     fontSize: textScale(15)
    // },
    getStartStyle: {
        fontSize: textScale(14),
        color: colors.white,
        lineHeight: 42,
        alignSelf:'center',
        marginRight:moderateScale(23)
    },



    container: {
        alignSelf: 'center',
        height: height - height / 4,

        width: width - 60,
        marginTop: moderateScaleVertical(24),
        backgroundColor: '#4C4C4C',
        borderRadius: moderateScale(16),

    },
    divideIntroArea: { flex: 0.5, justifyContent: 'center' },
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
    },
    text: {
        color: '#999999',
        textAlign: 'center',
        // fontSize:textScale(13)
        // alignContent:'space-around'
    },
    textview: {
        marginHorizontal: moderateScale(24),
        paddingTop: moderateScale(12)
        // marginTop: moderateScaleVertical(8),
    },
    next: {
        color: colors.white,
        fontSize: textScale(15)
    }
});