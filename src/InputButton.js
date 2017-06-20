/**
 * Created by ananyagoel on 21/06/17.
 */

import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {

    render() {
        return (
            <TouchableHighlight style={Style.inputButton}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }

}
