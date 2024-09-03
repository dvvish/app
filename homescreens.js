import { StyleSheet, Text, View, SafeAreaView, Image,ScrollView } from "react-native";
import React ,{useContext} from "react";
import Fitnesscards from "../components/Fitnesscards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {  
    workout,
   
    calories,
     
    minutes,
     }=useContext(FitnessItems) 
  return (
    <ScrollView style={{marginTop:30}}>
      <View> 
      <View
        style={{
          backgroundColor: "#36454F",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
              
            >
             
            {workout}</Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WORKOUTS
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
           
            {calories} </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
             
           {minutes} </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
          
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "95%",
              height: 75,
              marginBottom:20,
              marginTop: 20,
              
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
         
    
          </View>

       
    
      <Fitnesscards/>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;




