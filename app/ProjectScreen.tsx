import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function ProjectScreen() {
    const navigation = useNavigation();

    const tasks = [
        { id: "1", title: "Design homepage", description: "Create wireframe for homepage layout" },
        { id: "2", title: "Implement API", description: "Connect backend with the frontend" },
        { id: "3", title: "Write documentation", description: "Document API endpoints and UI components" },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.projectTitle}>Project Name</Text>
            <Text style={styles.projectDescription}>A brief description of the project goes here.</Text>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskCard}>
                        <View>
                            <Text style={styles.taskTitle}>{item.title}</Text>
                            <Text style={styles.taskDescription}>{item.description}</Text>
                        </View>
                        <View style={styles.taskActions}>
                            <TouchableOpacity style={styles.iconButton}>
                                <Feather name="trash-2" size={18} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.fab}>
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFFFFF",
    },
    projectTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 5,
    },
    projectDescription: {
        fontSize: 16,
        color: "#4A4A4A",
        marginBottom: 20,
    },
    taskCard: {
        backgroundColor: "#A7C7E7",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    taskDescription: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    taskActions: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: 10,
    },
    iconButton: {
        padding: 8,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        marginLeft: 8,
    },
    fab: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#C1E1C1",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    backButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        backgroundColor: "#A7C7E7",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
});
