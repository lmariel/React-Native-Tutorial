import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
    componentDidMount(){
        //Toggle the state every second
        setInterval(() => (this.setState(previousState => (
            {isShowingText: !previousState.isShowingText}
        ))), 1000)
    }

    //state object
    state = {isShowingText: true};

    render() {
        if(!this.state.isShowingText) {
            return null;
        }

        return(
            <Text>
                {this.props.text}
            </Text>
        )
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text="Could I BE wearing any more clothes?"/>
                <Blink text="Pants are shorts but longer."/>
                <Blink text="I wasn't supposed to put beef in the trifle!"/>
                <Blink text="I'm going to pound on you a little bit."/>
                <Blink text="What's the opposite of 'man'? Jam."/>
                <Blink text="Isn't that just kick you in the crotch spit on your neck fantastic."/>
            </View>
        )
    }
}