import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const Register = ({navigation}) => {
    return (
        <>
        <SafeAreaView>
        <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Template Component</Text>
                </View>
            </View>
        </SafeAreaView>
            
        </>
      )
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Register;