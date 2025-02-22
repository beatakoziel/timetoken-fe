import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import SliderIntro, { type SliderIntroItemProps } from "react-native-slider-intro";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/App";
import RecentTasksSection from "./components/RecentTasksSection";
import Colors from "./utils/Colors";

const { width } = Dimensions.get("window");

const slides: SliderIntroItemProps[] = [
    { index: 1, backgroundColor: Colors.primaryColor },
    { index: 2, backgroundColor: Colors.primaryColor },
    { index: 3, backgroundColor: Colors.primaryColor },
];

const projectData = {
    name: "Project Apollo",
    progress: 0.65,
    deadline: "2020-05-01",
};

export default function Index() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <SliderIntro
                    numberOfSlides={slides.length}
                    doneLabel=""
                    skipLabel=""
                    nextLabel=""
                    dotWidth={0}
                >
                    {slides.map(({ backgroundColor }, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation.navigate("ProjectScreen")}
                        >
                            <View style={[styles.slide, { backgroundColor }]}>
                                <View style={styles.card}>
                                    <Text style={styles.projectName}>{projectData.name}</Text>

                                    <View style={styles.progressBarContainer}>
                                        <Text style={styles.progressLabel}>Progress</Text>
                                        <View style={styles.progressBar}>
                                            <View
                                                style={[
                                                    styles.progressFill,
                                                    { width: `${projectData.progress * 100}%` },
                                                ]}
                                            />
                                        </View>
                                    </View>

                                    <Text style={styles.deadline}>Deadline: {projectData.deadline}</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </SliderIntro>
            </View>
            <RecentTasksSection style={styles.sectionBlue}/>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        flexDirection: "column",
    },
    sliderContainer: {
        flex: 5,
    },
    slide: {
        width: width,
    },
    card: {
        width: width * 0.95,
        margin: "auto",
        backgroundColor: Colors.secondaryColor,
        height: "90%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    projectName: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.primaryText,
        marginBottom: 15,
    },
    progressBarContainer: {
        width: "100%",
        marginBottom: 15,
        alignItems: "center",
    },
    progressLabel: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.secondaryText,
    },
    progressBar: {
        width: "80%",
        height: 10,
        backgroundColor: Colors.primaryColor,
        borderRadius: 5,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: Colors.primaryAccent,
    },
    deadline: {
        fontSize: 16,
        fontWeight: "400",
        color: Colors.secondaryText,
    },
    sectionBlue: {
        flex: 8,
        backgroundColor: Colors.primaryColor,
    }
});
