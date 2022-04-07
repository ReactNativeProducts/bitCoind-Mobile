import React , {useState} from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, Button
} from 'react-native';


 

import  AppIntroSlider  from 'react-native-app-intro-slider';



const App = () => {
  const [showRealApp, setshowRealApp] = React.useState(false);

  const onDone = () => {
    setshowRealApp(true);
  }

  const onSkip = () => {
    setshowRealApp(true);
  }

  const renderItem = ( {item}: {item : any} ) => {
    return(
      <View style={styles.MainCointainer}>
        <Text  style={styles.title}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )


  }

  return (
    <>
    {
      showRealApp ? (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            React Native App Intro Slider using AppIntroSlider
            </Text>
          <Text>
            This will be your screen when you click Skip
            from any slide or Done button at last
            </Text>
        </View>
        <Button 
        title="show Intro slider Agaaun"
        onPress={() => setshowRealApp(false)}
        />
      </SafeAreaView>

      ) : (
        <AppIntroSlider 
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton={true}
        bottomButton

        />

      )
}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  MainCointainer: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,

    
  }, 
  title: {

    color: "#fff",
    marginBottom: 200,
    fontSize: 40,
    fontWeight: "bold",

  }
});

const slides = [
  {
    key: 's1',
    text: 'Keep track of the Bitcoin price at all times',
    title: 'BitCoind',
    text2: "swipe left to Go to Next.",
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_mobile_recharge.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];