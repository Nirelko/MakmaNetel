import React from 'react';
import {Flex, Box} from 'reflexbox'

import SearchEvent from './search-events';

export default (props) => {
    return (
        <Flex align="baseline">
            <Box>
                <span>MakmaNetel</span>
            </Box>
            <Flex auto justify="center">
                <SearchEvent {...props}  />
            </Flex>
        </Flex>);
}