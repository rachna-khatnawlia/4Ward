// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
// import colors from '../styles/colors';
// import Loader from './Loader';

// // create a component
// const WrapperContainer = ({
//     children,
//     bgColor = colors.white,
//     statusBarColor = colors.themeColor,
//     barStyle = 'light-content',
//     isLoading='',
//     withModal=''
//   }) => {
//     return (
//       <SafeAreaView style={{flex: 1,backgroundColor: statusBarColor,}}>
//         <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
//         <Loader isLoading={isLoading} withModal={withModal} />
//        {children}
//       </SafeAreaView>
//     );
//   };

// //make this component available to the app
// export default WrapperContainer;


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../styles/colors';

// create a component
const WrapperContainer = ({
    children,
    bgColor = 'white',
    // bgColor = colors.white,
    statusBarColor = colors.themeColor,
    barStyle = 'light-content',
  }) => {
    return (
      <SafeAreaView style={{flex: 1,backgroundColor: statusBarColor}}>
        <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
       {children}
      </SafeAreaView>
    );
  };

//make this component available to the app
export default WrapperContainer;