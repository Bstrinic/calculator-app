import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("BasicCalculator");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require("../assets/bee.jpg")} style={styles.image} />
            <Text style={styles.text}>Welcome to The BEES Calculator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
    },
});

export default SplashScreen;
