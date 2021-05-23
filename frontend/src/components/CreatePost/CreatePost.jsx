import {useState} from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from "react-router-dom";
import Navbar from '../Welcome-Nav/WelcomeNav';
import axios from "axios";
import "./CreatePost.css";

export default function CreatePost() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })
    const [editorInput, setEditorInput] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const history = useHistory();

    function handleClick(event) {
        event.preventDefault();
        let path = `welcome`; 
        const newArticle = {
            title: input.title,
            content2: editorInput
        }
        if (newArticle.title.length === 0 || newArticle.content2.length === 0) {

            history.push("create");

        } else {
            
            axios.post('https://decablog.herokuapp.com/create', newArticle);
            history.push(path);

        }
    }

    const handleClickToHome = () => {
    history.push("welcome");
  }

    return( 
        <>
        <Navbar />
    <div className='write-container'>
        <h1>Create Article</h1>
        <form>
            <div className='form-group'>
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className='form-control' placeholder="Article title"></input>
            </div>
            <br/>
            <div className='form-group'>
                {/* <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" required="required" className='form-control' placeholder="Article content"></textarea> */}
                {/* <br/> */}
                <CKEditor
                    editor={ ClassicEditor }
                    data={editorInput}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data });
                        setEditorInput(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                
            </div>
            <br/>
            <button onClick={handleClickToHome} className="btn-body" style={{ marginRight: "20px" }}>CANCEL</button>
            <button onClick={handleClick} className="btn-body">ADD ARTICLE</button>
        </form>
    </div>
    </>
    )
}
