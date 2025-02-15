import {StyleSheet, Image} from 'react-native';

import {Collapsible} from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function TabTwoScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <Image
                    source={require('@/assets/images/projects.jpg')}
                    style={styles.headerImage}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Projects</ThemedText>
            </ThemedView>
            <ThemedText>
                From start to finish—plan, track, and manage all your projects in one place.
            </ThemedText>

            <Collapsible title="🏡 Home & Relationships">
                <ThemedText>📌 Chore Schedule – Organize household tasks and assign them to family members.</ThemedText>
                <ThemedText>💖 Date Night Planner – Keep track of fun activities and special moments.</ThemedText>
                <ThemedText>📦 Moving Checklist – Plan and divide tasks for a smooth home move.</ThemedText>
            </Collapsible>

            <Collapsible title="💼 Work & Productivity">
                <ThemedText>📅 Annual Team Goals – Set objectives and track progress with your team.</ThemedText>
                <ThemedText>🚀 Product Launch – Organize tasks for a successful release.</ThemedText>
                <ThemedText>📊 Monthly Reports – Assign deadlines and ensure reports are completed on time.</ThemedText>
            </Collapsible>

            <Collapsible title="👨‍👩‍👧‍👦 Family & Kids">
                <ThemedText>🎒 School Projects – Help kids stay on top of assignments and deadlines.</ThemedText>
                <ThemedText>🎂 Birthday Party Planning – Organize guest lists, decorations, and food.</ThemedText>
                <ThemedText>🐾 Pet Care Routine – Track feeding, vet visits, and walks.</ThemedText>
            </Collapsible>
        </ParallaxScrollView>

    );
}

const styles = StyleSheet.create({
    headerImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
