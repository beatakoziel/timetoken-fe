import {StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, View} from 'react-native';
import {useState} from 'react';

import {Collapsible} from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';

export default function TabTwoScreen() {
    //mocked data for initial projects
    const [projects] = useState([
        {
            id: '1',
            name: '🏡 Home & Relationships',
            tasks: ['Organize household tasks', 'Plan family vacation', 'Move furniture'],
        },
        {
            id: '2',
            name: '💼 Work & Productivity',
            tasks: ['Complete monthly reports', 'Launch new marketing campaign'],
        },
        {
            id: '3',
            name: '👨‍👩‍👧‍👦 Family & Kids',
            tasks: ['Help kids with homework', 'Plan birthday party', 'Walk the dog'],
        },
    ]);

    const addProject = () => {
    };

    return (
        <View style={styles.container}>
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

            <FlatList
                scrollEnabled={false}
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                        <Collapsible title={item.name}>
                            <ScrollView style={styles.taskList}>
                                {item.tasks.length === 0 ? (
                                    <ThemedText>No tasks yet. Start by adding tasks!</ThemedText>
                                ) : (
                                    item.tasks.map((task, index) => (
                                        <ThemedText key={index}>- {task}</ThemedText>
                                    ))
                                )}
                            </ScrollView>
                        </Collapsible>
                    </View>
                )}
            />
        </ParallaxScrollView>
            <TouchableOpacity onPress={addProject} style={styles.addButton}>
                <ThemedText style={styles.buttonText}>+</ThemedText>
            </TouchableOpacity>
            </View>
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
    newProjectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginVertical: 20,
    },
    input: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
        fontSize: 16,
    },
    addButton: {
        position: 'absolute',
        bottom: 70,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0a7ea4',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    cardContainer: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    taskList: {
        paddingLeft: 20
    },
    container: {
        flex: 1
    },
});
