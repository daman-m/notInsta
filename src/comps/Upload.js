import { useState } from "react";
import ProgressBar from "./ProgressBar";


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
    }
    
    return (
        <form>
            <input onChange={changeHandler} type="file" name="file" id="file" />
            <label htmlFor="file" > + </label>
            <div className="output">
            {/*below we are using ternary operators to check if there is an error of file present, AND depending on which is present, a div will be created displaying the error msg or the file name   */}
            {error && <div className="error"> { error }</div> }
            {file && <div> { file.name } </div>}
            {file && <ProgressBar  file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default Upload;