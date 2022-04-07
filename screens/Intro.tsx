import { StackNavigationProp } from "@react-navigation/stack";
import React, { useRef } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RootStackParamList } from "../types";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}
function SignupScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Details" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const data = [
  {
    title: "BitCoind",
    text: "keep track of the Bitcoin\nprice at all times.",
    text4: "swipe left to go to next" ,
    bg: "#59b2ab",
  },
  {
    title: "BitCoind",
    subtitle: "The Bitcoind App Helps You \nKeep track of bitcoin prices at all times. \nit displays the current price in the currency \nyour choosing, and you can \neven customize the referesh rate. ",
    bg: "#febe29",
  },
  {
    title: "BitCoind",
    text: "Get Started now!",
    bg: "#febe29",
  },
];
type Item = typeof data[0];
type RenderPaginationProps = {
  data: any[];
  activeIndex: number;
  slider: AppIntroSlider | null;
  onIntroCompleted: () => void;
};
type IntroNavigationProps = StackNavigationProp<RootStackParamList, "Intro">;
interface IntroProps {
  navigation: IntroNavigationProps;
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },

  text: {
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  title: {
    fontSize: 50,
    color: "white",
    textAlign: "center",

  },
  paginationContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: "#1cb278",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  TextColors1: {
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  }, 
  TextColors2: {
    color: "#ACACAC",
    marginTop: 20,
    fontSize: 19,
    lineHeight: 24,


  },
  TextColors3: {
    color: "#979797",
    marginTop: 160,
    fontSize: 19,
    lineHeight: 24,


  },  
  poweredby: {
    color: "white",
  }, 
  subtitle: {
      color: "#ACACAC",
      marginTop: -150,
      alignContent: "center",
        fontSize: 19,
        marginLeft: 150,
  }
});
const renderItem = ({ item }: { item: Item }) => (
  <NavigationContainer>
  <View
    style={[
      styles.slide,
      {
        backgroundColor: 'black',
      },
    ]}>
    <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.TextColors1}>{item.text}</Text>
        <Text style={styles.TextColors3}>{item.text4}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>

     
      

  </View>
  </NavigationContainer>
);
const RenderPagination = ({
  activeIndex,
  slider,
  data,
  onIntroCompleted,
}: RenderPaginationProps) => {
  const handleIntroCompleted = () => {
    onIntroCompleted();
  };
  return (
    <View style={styles.paginationContainer}>
      <SafeAreaView>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              <Pressable
                key={i}
                style={[
                  styles.dot,
                  i === activeIndex
                    ? { backgroundColor: "white" }
                    : { backgroundColor: "rgba(0, 0, 0, 0.2)" },
                ]}
                onPress={() => slider?.goToSlide(i, true)}
              />
            ))}
        </View>
        {activeIndex === data.length - 1 && (
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={handleIntroCompleted}
              style={[styles.button, { backgroundColor: "#023e3f" }]}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            <Pressable onPress={handleIntroCompleted} style={styles.button}>
              <Text style={styles.buttonText} >Sign up</Text>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
export const Intro = ({ navigation }: IntroProps) => {
  const sliderEl = useRef(null);
  const keyExtractor = (item: Item) => item.title;
  const onIntroCompleted = () => {
    navigation.navigate("Root");
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderPagination={(activeIndex) => (
          <RenderPagination
            data={data}
            activeIndex={activeIndex}
            slider={sliderEl.current}
            onIntroCompleted={onIntroCompleted}
          />
        )}
        data={data}
        ref={sliderEl}
      />
    </View>
    
  );
};
export default Intro