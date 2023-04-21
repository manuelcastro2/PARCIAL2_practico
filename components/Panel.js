import React from "react";
import { StyleSheet,Dimensions,Button,View } from "react-native";

export default ({onPressLeft, textLeft, togglePointsFilter})=>{
    return(
        <View style={styles.panel}>
            <Button style={styles.button} onPress={onPressLeft} title={textLeft}/>
            <Button title='Mostrar/Ocultar' onPress={togglePointsFilter}>
             console.log("lo presione");
            </Button>
        
        </View>
    )
}

const styles= StyleSheet.create({
    panel:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
       width:100,
       height:50
    }
});