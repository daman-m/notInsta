import { useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import { FormControl, HStack, Input, FormLabel, Heading, Button, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// Step 1 :Upload Forum


// func to for user to upload images 
const Upload = () => {

    // need to create state for file as it will be changing everytime user selects - 
        //therefore page will be rerendering so we have to setState to update it  
        // inital value is null because to begin with no file is selected.
    const [file, setFile] = useState(null);

    // need to also create state for Error msg to appear because thats something that will change on depending on user selection
    const [error, setError] = useState(null);


    // make array of allowed file types to reference in our conditional statement 
    const types = [ 'image/png', 'image/jpeg'];

    //rest fun from react-hook-form
    const {reset} = useForm()

    //create ref to the file input element
    const inputRef = useRef()

    //func to trigger click event on the file input element
    const handleUploadClick = () => {
        inputRef.current.click();
    }

    //  func - addevent handler on the form input 
    // listens for any change 
    const changeHandler = (e) => {

        //save user selection to a var
        let selected = e.target.files[0];

        // error handling to ensure user can only submit images 
        // using conditional statement we check if A file is even selected  AND check it if the file type is one of the strings in the types array 
        if (selected && types.includes(selected.type))  {
            
            // make sure that we actually have a file selected and save it to state below
            setFile(selected);
            // reset error msg below
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')

        }
        reset()
        
    }
    
    return (
        <form>
            <HStack margin="5" justify="space-between" py="10px" borderBottom="2px" borderColor="blue.200">
                <Heading
                fontSize="2xl"
                color="blue.200">
                    New Post
                </Heading>
                <FormControl width="fit-content">
                {/* Hidden file input element */}
                    <Input
                    ref={inputRef}
                    onChange={changeHandler}
                    type="file"
                    id="file"
                    accept="image/*"
                    display="none"
                    />
                    <FormLabel htmlFor="file">
                        {/* Button to trigger file input click event */}
                        <Button 
                        cursor="pointer" 
                        onClick={handleUploadClick}
                        border="2px"
                        borderRadius="md"
                        borderColor="blue.200"
                        bg="whiteAlpha.400"
                        color="blue.200"
                        fontWeight="semibold"
                        _hover={{bg: "blackAlpha.100"}}

                        >
                        Upload
                        </Button>
                    </FormLabel>
                </FormControl>
            </HStack>
            
            <Box>
            {error && <div className="error"> { error }</div> }
            {file && <div> { file.name } </div>}
            {file && <ProgressBar  file={file} setFile={setFile} />}
            </Box>
        </form>
    )
}

export default Upload;