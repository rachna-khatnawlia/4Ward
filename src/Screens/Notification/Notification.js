//import liraries
import React from 'react';
import { styles } from './style';
import { View, Text, SafeAreaView, ScrollView, Image, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import WrapperContainer from '../../Components/WrapperContainer';

// create a component
const Notification = () => {
    const DATA = [
        {
            id: "1",
            profile: imagePath.profilePic1,
            title: 'Russell Gordon ',
            time: '20 min ago'
        },
        {
            id: "2",
            profile: imagePath.profilePic2,
            title: 'Sara ',
            time: '20 min ago'
        },
        {
            id: "3",
            profile: imagePath.profilePic1,
            title: 'Raphel ',
            time: '20 min ago'
        },
        {
            id: "4",
            profile: imagePath.profilePic2,
            title: 'Syker John ',
            time: '20 min ago'
        },
    ];
    //-------------- render flatlist ----------------
    const renderItem = ({ item }) => {
        return (
            <View style={styles.notificationConatiner}>
                <View style={styles.notification}>
                    <Image source={item.profile} style={styles.profilePic} />
                        <View>
                            <View style={styles.notificationTitle}>
                                <Text style={[styles.notificationTitletxt, { color: colors.themeredColor }]}>{item.title}</Text>
                                <Text style={styles.notificationTitletxt}>{strings.ADDED_NEW_POST}</Text>
                            </View>
                            <View>
                                <Text style={styles.uploadTime}>{item.time}</Text>
                            </View>
                        </View>
                </View>
            </View>
        )
    }
    return (
        <WrapperContainer>

            <HomeHeader headerText={strings.NOTIFICATION} />
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />

        </WrapperContainer>
    );
};

//make this component available to the app
export default Notification;
