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

const { width } = Dimensions.get("window");

const slides: SliderIntroItemProps[] = [
    { index: 1, backgroundColor: "#FFDDC1" },
    { index: 2, backgroundColor: "#C1E1C1" },
    { index: 3, backgroundColor: "#A7C7E7" },
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
            <View style={styles.sectionBlue} />
            <View style={styles.sectionMint} />
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
        backgroundColor: "#F8E8EE",
    },
    slide: {
        width: width,
    },
    card: {
        width: width * 0.95,
        margin: "auto",
        backgroundColor: "#F4F1DE",
        height: "90%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    projectName: {
        fontSize: 24,
        fontWeight: "700",
        color: "#333333",
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
        color: "#555555",
    },
    progressBar: {
        width: "80%",
        height: 10,
        backgroundColor: "#E0E0E0",
        borderRadius: 5,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#76C7C0",
    },
    deadline: {
        fontSize: 16,
        fontWeight: "400",
        color: "#555555",
    },
    sectionBlue: {
        flex: 4,
        backgroundColor: "#A7C7E7",
    },
    sectionMint: {
        flex: 4,
        backgroundColor: "#C1E1C1",
    },
});
