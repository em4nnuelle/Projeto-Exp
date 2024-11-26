import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themas.Colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }, 
    textButton: {
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold'
    }
})
