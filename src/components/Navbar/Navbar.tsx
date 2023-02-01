import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';


const Navbar: React.FC = () => {

    return (
        <Flex bg='white' height='44px' padding='6px 12px'>
            <Flex align='center'>
                <Image 
                    src='https://imagizer.imageshack.com/img923/7038/l9kZ1f.png' 
                    alt='reddit face' 
                    height='30px' 
                />
                <Image 
                    src='https://imagizer.imageshack.com/img924/1289/F7R2fm.png' 
                    alt='reddit text' 
                    height='46px' 
                    // media queries ↓
                    display={{ base:'none', md:"unset"}} 
                />
            </Flex>
            <SearchInput />
            {/* <Directory />
            <RightContent /> */}
        </Flex>
    );
}
export default Navbar;