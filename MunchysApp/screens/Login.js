import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

const Login = ({navigation}) => {
    return (
        <>
        <SafeAreaView>
        <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Login Component</Text>
                    <Button
                    title="Go to Jane's profile"
                    onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
                    />
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

export default Login;