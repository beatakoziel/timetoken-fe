import { Dimensions, Linking, StyleSheet ,Text, TouchableWithoutFeedback, View } from "react-native";
import SliderIntro, {
  type SliderIntroItemProps,
} from 'react-native-slider-intro';

const deviceMaxHeight = Dimensions.get('screen').height;
const { width, height } = Dimensions.get('window');

const slides: SliderIntroItemProps[] = [
  {
    index: 1,
    backgroundColor: '#febe29',
  },
  {
    index: 2,
    backgroundColor: '#bb2323',
  },
  {
    index: 3,
    backgroundColor: '#84DAB2',
  },
];

export default function Index() {
  return (
   <View style={[ styles.container, {flexDirection: 'column'} ]}>
      <View style={{flex: 5, backgroundColor: 'red'}} >
        <SliderIntro
          numberOfSlides={slides.length}
          doneLabel=""
          skipLabel=""
          nextLabel=""
          dotWidth={0}
        >
        {slides.map(({backgroundColor}, index
      ) => {
        return (
          <View style={{ width: width, backgroundColor }} key={index}>
            <View style={{ width: width * 0.95,  margin: 'auto', backgroundColor: 'gray', height: "90%", borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Text>
                Tytul aasd
              </Text>
            </View>
          </View>
        );
      }
    )}

        </SliderIntro>
      </View>
      <View style={{flex: 4, backgroundColor: 'darkorange'}} />
      <View style={{flex: 4, backgroundColor: 'green'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
