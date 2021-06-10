import React, { Component } from 'react';
import { Box, View } from 'react-vr';

class Primitives extends Component {
    render() {
        return (
            <View>
                <Box
                    dimWidth = {0.5}
                    dimDepth = {0.5}
                    dimHeight = {0.3}
                    style = {{
                        color: 'yellow'
                    }}
                />
            </View>
        );
    }
}

export default Primitives;
