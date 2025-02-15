import {Image, StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                    source={require('@/assets/images/basic.jpg')}
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome to Dotodo!</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 1: Create a New Project</ThemedText>
                <ThemedText>
                    Start by adding a new project to organize your tasks. This helps you break down your work
                    into manageable pieces. You can tap the "Projects" tab to begin.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 2: Add Tasks</ThemedText>
                <ThemedText>
                    Once you have your project, you can start adding tasks to it. Tap the "Add Task" button and
                    make sure you set due dates and priorities.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 3: Stay Organized</ThemedText>
                <ThemedText>
                    Track your progress by marking tasks as complete. You can also view tasks by priority or
                    deadline, and adjust them as needed to stay on track.
                </ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    headerImage: {
        position: 'absolute',
        height: '100%',
        width: '100%',
    },
});
