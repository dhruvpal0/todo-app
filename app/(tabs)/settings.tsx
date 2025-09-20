import React from "react";
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { View, Text, ScrollView } from 'react-native'
import useTheme from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProgressStats from '@/Components/ProgressStats';
import Preferences from '@/Components/Preferences';
import DangerZone from '@/Components/DangerZone';


const SettingsScreen = () => {
    const { colors } = useTheme();

    const settingsStyles = createSettingsStyles(colors);

    return (
        <LinearGradient colors={colors.gradients.background} style={settingsStyles.container}>
            <SafeAreaView style={settingsStyles.safeArea} >
                {/* Header */}
                <View style={settingsStyles.header}>
                    <View style={settingsStyles.titleContainer}>
                        <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
                            <Ionicons name='settings' size={28} color="#ffffff" />
                        </LinearGradient>
                        <Text style={settingsStyles.title}>Settings</Text>
                    </View>
                </View>
                <ScrollView style={settingsStyles.scrollView} contentContainerStyle={settingsStyles.content} showsVerticalScrollIndicator={false}>

                    {/* PROGRESS STATS */}
                    <ProgressStats />

                    {/* PREFERENCES */}
                    <Preferences />

                    {/* DANGER ZONE */}
                    <DangerZone />

                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default SettingsScreen;

