import {useState} from "react";

const CompleteNoteFormDemo = () => {

    const [completeFormData, setCompleteFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: '',
    });

    const handleChange = (e) => {
        setCompleteFormData({
            ...completeFormData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form>
            <div>
                <label>Title</label>
                <input
                    name="title"
                    type="text"
                    value={completeFormData.title}
                    onChange={(e) => handleChange(e)}
                ></input>
                <h1>{completeFormData.title}</h1>
            </div>
        </form>
    )
}

export default CompleteNoteFormDemo;