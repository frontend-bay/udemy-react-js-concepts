import {useState} from "react";

const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    return (
        <form>
            <div>
                <label>Title</label>
                <input type="text"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                        ></input>
                <h1>{title}</h1>
            </div>
            <div>
                <label>Description</label>
                <input type="text"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                ></input>
                <h1>{description}</h1>
            </div>
        </form>
    )
}

export default NoteForm;