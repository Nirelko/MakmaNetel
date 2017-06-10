import React from 'react';
import {Flex, Box} from 'reflexbox'

import SearchEvent from './search-event';

export default function Header() {
    return (
        <Flex align="baseline">
            <Box>
                <span>MakmaNetel</span>
            </Box>
            <Flex auto justify="center">
                <SearchEvent />
            </Flex>
        </Flex>);
}