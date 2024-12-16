import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ToggleSwitch from "./ToggleSwitch";
import { useNavigation } from "@react-navigation/native";

const MyHeader = ({ isEnabled, toggleSwitch }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => setMenuVisible((prev) => !prev);

    const styles = createStyles(isEnabled);

    const navigation = useNavigation();


    return (
        <View style={styles.headerContainer}>
            {/* Menu Button */}
            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
                <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            {/* Spacer */}
            <View style={styles.spacer} />
            {/* Toggle Switch */}
            <View style={{ marginBottom: 110, marginRight: 50 }}>
                <ToggleSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
            </View>
            {/* Dropdown Menu */}
            {menuVisible && (
                <View style={styles.dropdownMenu}>
                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => navigation.navigate("BasicCalculator")}
                    >
                        <Text style={styles.dropdownItemText}>Basic Calculator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => navigation.navigate("ScientificCalculator")}
                    >
                        <Text style={styles.dropdownItemText}>Scientific Calculator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SavedCalculations")}
                        style={styles.dropdownItem}
                    >
                        <Text style={styles.dropdownItemText}>Saved Calculations</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const createStyles = (isDarkMode) =>
    StyleSheet.create({
        headerContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: 60,
            paddingHorizontal: 10,
            backgroundColor: isDarkMode ? "#000" : "#fff",
            marginTop: "33"
        },
        menuButton: {
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50
        },
        menuIcon: {
            fontSize: 24,
            color: isDarkMode ? "#fff" : "#000",
        },
        spacer: {
            flex: 1,
        },
        dropdownMenu: {
            position: "absolute",
            top: 60,
            left: 10,
            backgroundColor: isDarkMode ? "#333" : "#fff",
            borderWidth: 1,
            borderColor: isDarkMode ? "#555" : "#ccc",
            borderRadius: 5,
            paddingVertical: 5,
            width: 180,
        },
        dropdownItem: {
            padding: 10,
        },
        dropdownItemText: {
            fontSize: 16,
            color: isDarkMode ? "#fff" : "#000",
        },
    });

export default MyHeader;
