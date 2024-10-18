import { useState } from "react"; //used to store data return data from API

const Create = () => {
    //state - current state value
    //setState - allows state value to update
    const[title, setTitle] = useState(''); 
    const[year, setYear] = useState('');
    const[poster, setPoster] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //so it's not called multiple times
        console.log(title); //output titles 
        console.log(year); //output year 
        console.log(poster); //output poster 
    }

    return (
        <div>
            <h2>Create Component</h2>
            {/* upload data to a server */}
            <form onSubmit={handleSubmit}> 

                <div className = "form-group">
                    <label>add movie title:</label>
                    <input type="text"
                    className = "form-control"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}} //adds
                    />
                </div>

                <div className = "form-group">
                    <label>add year:</label>
                    <input type="text"
                    className = "form-control"
                    value={year}
                    onChange={(e) => {setYear(e.target.value)}} //adds
                    />
                </div>

                <div className = "form-group">
                    <label>add poster:</label>
                    <input type="text"
                    className = "form-control"
                    value={poster}
                    onChange={(e) => {setPoster(e.target.value)}} //adds
                    />
                </div>
                <input type="submit" value="add poster"/> 
                
            </form>
        </div>
    )
   
}
export default Create;

//comments - explain
//state
//useeffect
//axios