import React from "react";
import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons'
import useTheme from "@/hooks/useTheme";
const TabsLayout = () => {
    const { colors } = useTheme();


    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopWidth: 1,
                    borderTopColor: colors.border,
                    height: 90,
                    paddingTop: 10,
                    paddingBottom: 10
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "600",
                },
                headerShown: false
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'todos',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "flash" : "flash-outline"} size={size} color={color} />

                    )
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: 'settings',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout