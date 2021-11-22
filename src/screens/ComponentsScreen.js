import React from "react";
import { Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {

    const myName = 'Cristian';

    return (
        <>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.nameText}>My Name is {myName}</Text>
        </>
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