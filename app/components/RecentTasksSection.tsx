import { View, Text, StyleSheet } from "react-native";
import RecentTask from "./RecentTask";
import Colors from "../utils/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function RecentTasksSection({style}: any) {
	const tasks = [
		'Create the app',
		'Write the app',
		'Finish the app',
		'Don\' stop writing the app after 2 weeks'
	]

	return (
		<View style={style}>
			<Text style={styles.sectionTitle}>Recent tasks</Text>
			<ScrollView>
				{tasks.map((task) => <RecentTask task={task}/> )}
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	sectionTitle: {
		fontSize: 24,
        fontWeight: "700",
        padding: 15
	}
});

