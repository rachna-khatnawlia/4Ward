import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    flatListContainer: {
        marginVertical: moderateScaleVertical(15),
        width: width - 46,
        alignSelf: 'center'
    },
    profileRow: {
        flexDirection: 'row'
    },
    profileAction: {
        color: colors.white,
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        marginLeft: moderateScale(20)
    },
});

