import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import SliderIntro, { type SliderIntroItemProps } from "react-native-slider-intro";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/App";

const { width } = Dimensions.get("window");

const slides: SliderIntroItemProps[] = [
  { index: 1, backgroundColor: "#febe29" },
  { index: 2, backgroundColor: "#bb2323" },
  { index: 3, backgroundColor: "#84DAB2" },
];

export default function Index() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
      <View style={[styles.container, { flexDirection: "column" }]}>
        <View style={{ flex: 5, backgroundColor: "red" }}>
          <SliderIntro numberOfSlides={slides.length} doneLabel="" skipLabel="" nextLabel="" dotWidth={0}>
            {slides.map(({ backgroundColor }, index) => (
                <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate('ProjectScreen')}>
                  <View style={{ width: width, backgroundColor }}>
                    <View
                        style={{
                          width: width * 0.95,
                          margin: "auto",
                          backgroundColor: "gray",
                          height: "90%",
                          borderRadius: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                    >
                      <Text>Click Me to Open New Screen</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
            ))}
          </SliderIntro>
        </View>
        <View style={{ flex: 4, backgroundColor: "darkorange" }} />
        <View style={{ flex: 4, backgroundColor: "green" }} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
