import { StatusBar } from 'expo-status-bar';
import {
 StyleSheet,
 Text,
 View,
 Button,
 TextInput,
 TouchableOpacity,
 Alert,
  } from 'react-native';
import React, { useState, useEffect } from 'react';






export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#d8e1e8'); //initial background color


 const changeBackground = () => {
   setBackgroundColor('#453534'); //change to new color
 }




 const [level, setLevel] = useState(1); //initial level


 const [randomCard, setRandomCard] = useState("PLAY");


 const level1Cards = [
   "Childhood show?",
   "What was your first impression of me",
   "A nickname you had growing up?",
   "What is the best gift you've ever recieved?",
   "What is the best gift you've ever given?",
   "What would you name a new pet?",
   "Where would people be suprised to see you?",
   "Favorite piece of clothing?",
   "If you could have any superpower, what would it be and why?",
   "What's your favorite holiday and why?",
   "Favorite household chore?",
   "Least favorite household chore?",
   "What's something you want to get into but haven't yet?",
   "Would you be ok with being famous?",
   "When you were a kid, what seemed like the best thing about being an adult?",
   "What does your phone wallpaper say about you?",
   "What was the last book you were obsessed with? What did you like about it?",
   "What odd talent do you have?",
   "What were you like as a child?",
   "What is one thing on your bucket list?",
   "How do you give gifts?",
   "Most recent song you've been obsessed with and why?",
   "How much effort do you put into your physical appearance?",
   "How does someone earn your respect?",
   "What privilege do you enjoy the most?",


   
   
   



 ]


 const level2Cards = [
   "What about me bothers you the most?",
   "Admit something.",
   "What's the most you've spent on a material item?",
   "What is one of your biggest fears?",
   "What is an insecurity of yours?",
   "Who are in your closest social circle?",
   "What has been your best purchase?",
   "When was the last time you felt out of your comfort zone?",
   "Which family member are you closest to?",
   "How are you different from your family members?",
   "Thoughts on any societal norms?",
   "If you opened a business, what would it be?",
   "What is something you've never told your friends about?",
   "What is something you've never told your parents?",
  //  "What is an insecurity you have about your appearance?",
   "What do people assume about you that you wish was actually true?",
   "What does your dream life look like?",
   "What do you miss about your childhood?",
   "What is one thing you'd be doing right now if you had no fear of being judged?",
   "What would you do if you had control over a day everyone would forget?",
   "How would your younger self view you now?",
   "What is the most hurtful thing someone said to you?",
   "What is something you wouldn’t change about yourself?",
   "What is something you want to change about yourself?",
   "Is there someone you haven’t talked to but should?",
   "What is something you are most proud of?",
   "What was the best/happiest point in your life?",
   "What was the worst/hardest point you’ve felt in your life?",
   "What has been an embarrassing moment recently?",
   "Swap seats.",
   "What is something you regret?",
   "What is something you are annoyed about?",
   "Anything bothering you recently?",
   "A pet peeve?",
   "An unconventional belief you have?",
   "What is something you’ve been complimented about recently?",
   "Do you have any advice for me?",
   "What makes you uncomfortable?",
   "How often do you lie? Or not tell the full truth?",
   "What is something you learned recently?",
   "Who is someone you wish you were closer to?",
   "Give a task for your partner to do outside their comfort zone in the next week.",
   "Pick a favorited photo and show your partner.",
   "Give them a compliment.",
   "What is something that has been bothering you recently?",
   "If you could only keep five possessions, what would they be? (excluding necessities)"
 ]


 const level3Cards = [
   "Have you lied at all during this conversation?",
   "Is there something you have avoided talked about in this conversation?",
   "At what part of this conversation did you feel the most vulnerable?",
   "What’s something you didn’t expect about me?",
   "What was your favorite question to answer?",
   "What surprised you the most about me?",
   "What question were you most afraid to answer?",


 ]
  
 const [shuffledCards, setShuffledCards] = useState([]);


 const shuffleCards = () => {
   let newCards = [];
   if(level === 1) { 
     newCards = [...level1Cards];
   } else if(level === 2) {
     newCards = [...level2Cards];
   } else if(level === 3) {
     newCards = [...level3Cards];
   }
   newCards.sort(() => Math.random() - 0.5);
   setShuffledCards(newCards);
 }


 useEffect(() => {
   shuffleCards();
 }, [level]);


 const changeCard = () => {
   let currentIndex = shuffledCards.indexOf(randomCard);
   let nextIndex = (currentIndex + 1) % shuffledCards.length;
   setRandomCard(shuffledCards[nextIndex]);
 }


 const changeLevel = () => {
   setLevel(level+1);
 }


 const changePreviousCard = () => {
   let currentIndex = shuffledCards.indexOf(randomCard);
   let previousIndex = currentIndex === 0 ? shuffledCards.length - 1 : currentIndex - 1;
   setRandomCard(shuffledCards[previousIndex]);
 }


 const width = 350;


 return (
   <View style={[styles.container, { backgroundColor }, ]}>
     <Text>we're not really strangers</Text>

    {/* <View style={styles.levelText}>
      <Text>Level {level}</Text>
    </View> */}
  <Text style={[styles.levelText]}>Level {level}</Text>

   <View style={styles.cardContainer}>
     <TouchableOpacity
       style={styles.card}
       onPressOut={({ nativeEvent }) => {
         if(nativeEvent.locationX < (width/2)) {
           changePreviousCard();
         } else {
           changeCard();
         }
       }}
     >
       <Text style={[styles.cardText, {padding: 15}]}>{randomCard}</Text>
     </TouchableOpacity>
   </View>


  
     {/* <Text>This is my first project</Text>
     <StatusBar style="auto" /> */}




     <View style={styles.buttonContainer}>
       <View style={[styles.button, {alignSelf: 'flex-start'}]}>
         <Button
           onPress={changePreviousCard}
           title="Previous Card"
           // color="#69118c"
         />
       </View>
       <View style={[styles.button, {alignSelf: 'flex-end'}]}>
         <Button
           onPress={changeCard}
           title="Next Card"
           // color="#69118c"
         />
       </View>
     </View>




     <Button
       onPress={changeBackground}
       title="dark mode"
       color="#453534"
     />
     <Button
       onPress={changeLevel}
       title="next level"
       color="#453534"
     />
    




     <TextInput
       style={styles.input}
      // onChangeText={onChangeNumber}
       //value={number}
       placeholder="type here"
       keyboardType="default"
     />


  


   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#d8e1e8',
   alignItems: 'center',
   justifyContent: 'center',
 },
 card: {
   fontSize: 25,
  
   backgroundColor: '#cfbadb',
   width: 350,
   height: 200,
   borderRadius: 15,
   borderWidth: 1,
   borderColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
   alignSelf: 'center'


 },
 cardText: {
   textAlign: 'center',
   fontSize: 30,
 },
 buttonContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%',
   padding: 10,
 },
 button: {
   width: '40%',
 },
 levelText: {
    fontSize: 25,
    fontFamily: 'Marker Felt',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20
 }


});
