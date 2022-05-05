import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/responsiveSize';

export const styles = StyleSheet.create({
    loginContainer: {
        alignItems: 'center',
    },
    TwoInputFields: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(27),
        justifyContent: 'space-between',
    }
});