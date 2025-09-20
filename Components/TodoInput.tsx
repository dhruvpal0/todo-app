import { View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const TodoInput = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors)
    const [newTodo, setnewTodo] = useState("");
    const addTodo = useMutation(api.todos.addTodo);

    const handleAddTodo = async () => {
        if (newTodo.trim()) {
            try {
                await addTodo({ text: newTodo.trim() })
                setnewTodo("")
            } catch (error) {
                console.log("error a add todo", error)
                Alert.alert("Error", "Failed to add todo");
            }
        }
    }

    return (
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput
                    style={homeStyles.input}
                    placeholder='What needs to be done?'
                    value={newTodo}
                    onChangeText={setnewTodo}
                    onSubmitEditing={handleAddTodo}
                    placeholderTextColor={colors.textMuted}
                />
                <TouchableOpacity
                    onPress={handleAddTodo}
                    activeOpacity={0.8}
                    disabled={!newTodo.trim()}
                >
                    <LinearGradient
                        colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                        style={[homeStyles.addButton, !newTodo.trim() && homeStyles.addButtonDisabled]}>
                        <Ionicons name='add' size={24} color="#ffffff" />
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default TodoInput