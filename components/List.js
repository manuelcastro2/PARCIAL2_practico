import React from "react";
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from "react-native";

export default ({ puntos }) => {
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
                <Button title='cerrar' />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom15,
    },
    list: {
        height: Dimensions.get('window').height - 250,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15,
    }
})