import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const BasicCalculator = ({ navigation, isDarkMode }) => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");


    const handleInput = (value) => setExpression((prev) => prev + value);

    const calculate = () => {
        try {
            const evaluated = eval(expression);
            setResult(evaluated.toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const clearAll = () => {
        setExpression("");
        setResult("");
    };

    const clearLast = () => {
        setExpression((prev) => prev.slice(0, -1));
    };

    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Basic Calculator</Text>
            <TextInput style={styles.screen} value={expression} editable={false} />
            <Text style={styles.result}>Result: {result}</Text>

            {/* Buttons Section */}
            <View style={styles.buttonsContainer}>
                {[
                    ["AC", clearAll, styles.acButton],
                    ["(", () => handleInput("(")],
                    [")", () => handleInput(")")],
                    ["÷", () => handleInput("/")],
                    ["7", () => handleInput("7")],
                    ["8", () => handleInput("8")],
                    ["9", () => handleInput("9")],
                    ["×", () => handleInput("*")],
                    ["4", () => handleInput("4")],
                    ["5", () => handleInput("5")],
                    ["6", () => handleInput("6")],
                    ["-", () => handleInput("-")],
                    ["1", () => handleInput("1")],
                    ["2", () => handleInput("2")],
                    ["3", () => handleInput("3")],
                    ["+", () => handleInput("+")],
                    ["C", clearLast, styles.acButton],
                    ["0", () => handleInput("0")],
                    [".", () => handleInput(".")],
                    ["=", calculate, styles.equalButton],
                ].map(([label, onPress, customStyle], index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.button, customStyle]}
                        onPress={onPress}
                    >
                        <Text style={styles.buttonText}>{label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Navigation */}
            <TouchableOpacity onPress={() => navigation.navigate("ScientificCalculator")}>
                <Text style={styles.navigationLink}>Go to Scientific Calculator</Text>
            </TouchableOpacity>
        </View>
    );
};

const createStyles = (isDarkMode) =>
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#000" : "#fff",
            paddingVertical: "100"
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: isDarkMode ? "#fff" : "#000",
            marginBottom: 20,
        },
        screen: {
            width: "90%",
            height: 50,
            backgroundColor: isDarkMode ? "#333" : "#ccc",
            color: isDarkMode ? "#fff" : "#000",
            fontSize: 20,
            paddingHorizontal: 10,
            textAlign: "right",
            borderRadius: 8,
            marginBottom: 10,
        },
        result: {
            fontSize: 18,
            color: isDarkMode ? "#fff" : "#000",
            marginBottom: 20,
        },
        buttonsContainer: {
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        button: {
            width: "20%",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isDarkMode ? "#444" : "#ddd",
            margin: 5,
            borderRadius: 8,
        },
        buttonText: {
            color: isDarkMode ? "#fff" : "#000",
            fontSize: 18,
        },
        acButton: {
            backgroundColor: isDarkMode ? "#f00" : "#fcc",
        },
        equalButton: {
            backgroundColor: isDarkMode ? "#0f0" : "#cfc",
        },
        navigationLink: {
            color: isDarkMode ? "#00f" : "#0077ff",
            marginTop: 20,
            fontSize: 16,
        },
    });

export default BasicCalculator;
