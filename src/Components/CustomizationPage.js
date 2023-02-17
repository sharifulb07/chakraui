import {MoonIcon, SunIcon} from '@chakra-ui/icons'

import {
    Button,Center,IconButton, Stack, useColorMode,
} from '@chakra-ui/react'

const CustomizationPage=()=>{
    const {colorMode,toggleColorMode}=useColorMode();
    return(
        <Center h='100vh' maxW="1200px" mx="auto">
            <Stack isInline>
                <IconButton
                icon={colorMode==="light"? <SunIcon />:<MoonIcon />}
                variant="outline"
                aria-label='Color mode switcher'
                onClick={toggleColorMode}
                >
                    Switch Mode 
                </IconButton>
                <Button variant="solid" colorScheme="blue">
                    Solid 
                </Button>
            </Stack>
        </Center>
    )
}

export default CustomizationPage;