import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
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
                                    <Text style={styles.text}>Click me {index}</Text>
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
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#5D5C61"
    },
    sectionBlue: {
        flex: 4,
        backgroundColor: "#A7C7E7"
    },
    sectionMint: {
        flex: 4,
        backgroundColor: "#C1E1C1"
    },
});

