import React , {useState} from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, Button
} from 'react-native';

import MainPage from './MainPage';

 

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
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text2}>{item.text2}</Text>
      </View>

    )


  }

  return (
    
    <>
    {
      showRealApp ? (
        <><MainPage /><View>
            <Button
              title="show Intro slider Agaaun"
              onPress={() => setshowRealApp(false)} />
          </View></>


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
    marginBottom: 50,
    fontSize: 40,
    fontWeight: "bold",

  }, 
  text: {
    color: "#ACACAC",
    fontSize: 20,
    marginLeft: 100
  }, 
  text2: {
    color: "#ACACAC",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 100
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
    title: 'BitCoind',
    text: 'The Bitcoind App Helps You\n Keep track of bitcoin prices\n at all times. it displays the current price in the\n currency your choosing,\n and you can even customize the referh rate.',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
 
  {
    key: 's6',
    title: 'Get Started Now!',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];