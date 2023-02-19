import { CheckboxGroup,Checkbox,Stack } from "@chakra-ui/react";

export default function CheckboxGroupTest(){
    return(
        <>
        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={[1,5]} direction={['row','column']}>
                <Checkbox value="naruto">Naruto</Checkbox>
                <Checkbox value="Sasuke">Sasuke</Checkbox>
                <Checkbox value="kakashi">Kakashi</Checkbox>
            </Stack>
        </CheckboxGroup>
        </>
    )
}