//import liraries
import React from 'react';
import { styles } from './style';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CommonInput from '../../Components/CommonInput';
import HomeHeader from '../../Components/HomeHeader';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import { moderateScale } from '../../styles/responsiveSize';
import WrapperContainer from '../../navigation/WrapperContainer';

const Search = () => {
    const locations = [
        {
            id: '1',
            title: 'Sector 55, Chandigarh'
        },
        {
            id: '2',
            title: 'Sector 22, Chandigarh'
        },
        {
            id: '3',
            title: 'Sector 48, Chandigarh'
        },
        {
            id: '4',
            title: 'Sector 26, Chandigarh'
        },
        {
            id: '5',
            title: 'Sector 40, Chandigarh'
        },
        {
            id: '6',
            title: 'Sector 67, Mohali'
        },
    ]

    //------------render View--------------------
    const renderItem = ({ item }) => {
        return (
            <View style={styles.listView}>
                <Text style={styles.locationTxt}>{item.title}</Text>
            </View>
        )
    }

    return (
        <WrapperContainer>
            <ScrollView>
                {/* ----------------------Input Field----------------- */}
                <CommonInput
                    placeholderTxt={strings.SECTOR}
                    txtOnRight={strings.MANUAL_LOCATION}
                    inputContainer={{ marginBottom: moderateScale(0) }}
                    onRight={true}

                />

                {/* ----------------------Heading--------------------- */}
                <HomeHeader headerText={strings.SUGGESTIONS} />

                {/* -------------------FlatList----------------------- */}
                <FlatList
                    data={locations}
                    renderItem={renderItem}
                />
            </ScrollView>

        </WrapperContainer>
    );
};

export default Search;
