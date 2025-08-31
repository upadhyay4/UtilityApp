import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    StatusBar
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../store/colorSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const color = useSelector((state) => state.color.value); //reading the state 
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const onPressMovieList = () => {
        console.log('hhhh');
        navigation.navigate("MovieList");
    }
    
    return (
        <View>
            <StatusBar style="dark" />
             <TouchableOpacity
                onPress={onPressMovieList} //Dispatch action
                style={styles.button}
            >
                <Text style={{ fontSize: 20 }}>Movies List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => dispatch(setColor())} //Dispatch action
                style={styles.button}
            >
                <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
            </TouchableOpacity>
            <FlatList
                keyExtractor={(item) => item}
                data={color}
                style={{ marginTop: 15 }}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                backgroundColor: item,
                                height: 150,
                                width: 150,
                                alignSelf: "center",
                                margin: 10,
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
});