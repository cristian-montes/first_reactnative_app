import React from "react";
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const myName = 'Cristian';

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.nameText}>My Name is {myName}</Text>
        </View>
        )

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },

    nameText: {
        fontSize: 20
    }
})

export default ComponentsScreen;