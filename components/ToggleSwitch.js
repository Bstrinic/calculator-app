import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const ToggleSwitch = ({ isEnabled, toggleSwitch }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, isEnabled ? styles.textInactive : styles.textActive]}>
                Light
            </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={styles.switch}
            />
            <Text style={[styles.text, isEnabled ? styles.textActive : styles.textInactive]}>
                Dark
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 10,
        right: 10,
        marginTop: 30
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    textActive: {
        color: "#000",
    },
    textInactive: {
        color: "#bbb",
    },
    switch: {
        marginHorizontal: 10,
    },
});

export default ToggleSwitch;
