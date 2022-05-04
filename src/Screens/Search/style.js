import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, textScale, width } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    listView: {
        marginBottom: moderateScale(24),
        width: width - 46,
        alignSelf: 'center'
    },
    locationTxt: {
        fontFamily: fontFamily.barlowRegular,
        fontSize: textScale(15),
        color: colors.greyLocation
    }
});