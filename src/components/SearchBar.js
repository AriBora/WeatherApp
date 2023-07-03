import React,{useEffect, useState} from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ onQuery }) => {
    const [clicked,setClicked] = useState(false);
    const [searchPhrase, setSearchPhrase] = useState(searchPhrase);

    const handleSubmit =()=>{
        Keyboard.dismiss();
        setClicked(false);
        onQuery(searchPhrase);
    }
  return (
    <View style={styles.container}>
      <View
        style={clicked? styles.searchBar_clicked: styles.searchBar_unclicked}
      >
        <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }}/>
        <TextInput style={styles.input} placeholder="Search" value={searchPhrase}
          onChangeText={(value)=>setSearchPhrase(value)}
          onFocus={() => {setClicked(true)}}
        />
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {clicked && (
        <View style={{margin:5}}>
          <Button
            title="Submit"
            onPress={handleSubmit}
          ></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      margin: 15,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "90%",
  
    },
    searchBar_unclicked: {
      padding: 10,
      flexDirection: "row",
      width: "95%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
    },
    searchBar_clicked: {
      padding: 10,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: "90%",
    },
  });
export default SearchBar;

