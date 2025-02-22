import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function RecentTask({task}: any) {
	return (
		<ScrollView style={styles.task}>
			<Text style={styles.taskText}>{task}</Text>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	task: {
		padding: 10,
		margin: 5,
		borderRadius: 15,
		maxHeight: 50,
		overflow: "hidden",
		backgroundColor: Colors.secondaryColor
	},
	taskText: {
		fontSize: 25
	}
});

