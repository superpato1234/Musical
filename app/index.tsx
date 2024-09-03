import { Link } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>{"Musical"}</Text>
                <Link href="/profile" asChild>
                    <Pressable>
                        <Text>go to tabs</Text>
                    </Pressable>
                </Link>
                {/* <TouchableOpacity>{"go to tab"}</TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
};

export default Index;
