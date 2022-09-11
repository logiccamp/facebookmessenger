import react, {useState, useEffect, forwardRef} from 'react'
import {Button, InputLabel, Input, FormControl} from '@material-ui/core';
import db from './firebase.js';
import { onSnapshot, collection, addDoc, Timestamp, orderBy, query } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import Message from './components/Message'
import './App.css'
import './Message.css'


function App () {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')

    async function sendMessage (event) {
        event.preventDefault();

        await addDoc(collection(db, "messages"), {
            username : username == '' || username == null ? 'Unknown' : username, 
            message : input,
            timestamp : Timestamp.fromDate(new Date()),
        });
        setInput('')
    }

    useEffect(()=>{
        const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshop) => {
            setMessages(snapshop.docs.map(doc => ({id : doc.id, message : doc.data()})))
        })
    }, [])


    useEffect(() => {
    //   setUsername("Yemi")
      setUsername(prompt("Enter your username"))
    }, [])
    
    return (
        <div className='App'> 
            <img src='/logo512.png' height="100" />
            <h3>Welcome : {username == '' || username == null ? 'Unknown' : username}</h3>
            <form className='app__form' onSubmit={sendMessage}> 
                <FormControl className="formControl app_formcontrol">
                    <Input className='app__input' placeholder="Enter a message" value={input}  onChange={event => setInput(event.target.value)} />
                    <IconButton disabled={!input} type="submit" onClick={sendMessage} color="primary" aria-label="Send" component="span" className='app__button'>
                        <SendIcon />
                    </IconButton>
                </FormControl>
            </form>
            
            <FlipMove>
            {
                messages.map(({id, message})=> (
                   <Message key={id} message={message} username={username} />
                ))
            }
            </FlipMove>
        </div>
    )
}

export default App;