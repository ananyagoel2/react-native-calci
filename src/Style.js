/**
 * Created by ananyagoel on 21/06/17.
 */

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#193441'
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#3E606F'
    },
    clearContainer:{
      flex:1,
        backgroundColor:'#ffff00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    }
});

export default Style;