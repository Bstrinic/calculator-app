import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as math from "mathjs";

const ScientificCalculator = ({ navigation, isDarkMode }) => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");


    const handleInput = (value) => setExpression((prev) => prev + value);

    const calculate = () => {
        try {
            const evaluated = math.evaluate(expression, {
                pi: Math.PI,
                e: Math.E,
                fact: math.factorial,
                sqrt: math.sqrt,
                cbrt: math.cbrt,
                sin: math.sin,
                cos: math.cos,
                tan: math.tan,
                asin: math.asin,
                acos: math.acos,
                atan: math.atan,
            });
            setResult(evaluated.toString());
        } catch (error) {
            setResult("Error");
        }
    };

    const clearAll = () => {
        setExpression("");
        setResult("");
    };

    const deleteLast = () => {
        setExpression((prev) => prev.slice(0, -1));
    };

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scientific Calculator</Text>
            <TextInput style={styles.screen} value={expression} editable={false} />
            <Text style={styles.result}>Result: {result}</Text>

            {/* Buttons Section */}
            <View style={styles.buttonsContainer}>
                {[
                    ["AC", clearAll, styles.acButton],
                    ["DEL", deleteLast, styles.acButton],
                    ["sin", () => handleInput("sin("), styles.operationButtons],
                    ["cos", () => handleInput("cos("), styles.operationButtons],
                    ["tan", () => handleInput("tan("), styles.operationButtons],
                    ["(", () => handleInput("("), styles.operationButtons],
                    [")", () => handleInput(")"), styles.operationButtons],
                    ["e", () => handleInput("e"), styles.operationButtons],
                    ["π", () => handleInput("pi"), styles.operationButtons],
                    ["√", () => handleInput("sqrt("), styles.operationButtons],
                    ["^", () => handleInput("^"), styles.operationButtons],

                    ["÷", () => handleInput("/"), styles.operationButtons],
                    ["7", () => handleInput("7")],
                    ["8", () => handleInput("8")],
                    ["9", () => handleInput("9")],

                    ["×", () => handleInput("*"), styles.operationButtons],
                    ["4", () => handleInput("4")],
                    ["5", () => handleInput("5")],
                    ["6", () => handleInput("6")],

                    ["-", () => handleInput("-"), styles.operationButtons],
                    ["1", () => handleInput("1")],
                    ["2", () => handleInput("2")],
                    ["3", () => handleInput("3")],

                    ["+", () => handleInput("+"), styles.operationButtons],
                    ["0", () => handleInput("0"), styles.zeroButton],
                    [".", () => handleInput("."), styles.operationButtons],
                    ["=", calculate, styles.operationButtons],

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
        },
        title: {
            fontSize: 30,
            fontWeight: "bold",
            color: isDarkMode ? "#fff" : "#000",
            marginBottom: 35,
        },
        screen: {
            width: "90%",
            height: 50,
            backgroundColor: isDarkMode ?"transparent" : "#ccc" ,
            color: isDarkMode ? "#FFFFFF" : "#000",
            fontSize: 20,
            paddingHorizontal: 10,
            textAlign: "right",
            borderRadius: 8,
            marginBottom: 10,
            borderWidth: isDarkMode ? 3 : 3,
            borderColor: isDarkMode ? "#FFFFFF" : "#000000",
        },
        result: {
            fontSize: 22,
            color: isDarkMode ? "#FFFFFF" : "#000000",
            marginBottom: 20,
            fontWeight: "bold",
            padding: 20
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
            margin: 5,
            borderRadius: 8,
            borderWidth: isDarkMode ? 3 : 3,
            borderColor: isDarkMode ? "#FFFFFF" : "#000000",
            backgroundColor: isDarkMode ? "#6082B6" : "transparent"
        },
        buttonText: {
            color: isDarkMode ? "#fff" : "#000",
            fontSize: 18,
        },
        acButton: {
            backgroundColor: "#ff6500",
        },
        // equalButton: {
        //     backgroundColor: isDarkMode ? "#0f0" : "#cfc",
        // },
        navigationLink: {
            color: isDarkMode ? "#00f" : "#0077ff",
            marginTop: 20,
            fontSize: 16,
        },
        operationButtons: {
            backgroundColor: "#B2BEB5",
        },
    });

export default ScientificCalculator;
