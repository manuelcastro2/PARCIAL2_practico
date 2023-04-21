import React from "react";
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from "react-native";

export default ({ puntos,closeModal }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={puntos.map(x => x.name)}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title='cerrar' onPress={closeModal}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
      paddingBottom:15,
      paddingRight:15
    },
    list: {
        height: Dimensions.get('window').height-105,
    },
    item: {
        fontSize:25,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width:200,
        heigh: 50,
        paddingHorizontal:40,
        paddingVertical:10,
       alignItems: 'center',
       justifyContent:'center',
        color:'black'
    }
})