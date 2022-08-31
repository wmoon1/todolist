import { useRef, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home(props) {
    const [todos, setTodos] = useState([])
    const inputName = useRef(1);
    const onChange = (e) => {
        setTodos(e.target.name);
    }
    const onDel = (id) => {
        setTodos(todos.filter(todos => todos.id !== id))
    }

    const onToggle = (id) => {
        setTodos(todos.map(item=> item.id ===id? {...item, check: !item.check}: item))
    }

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id: inputName.current++,
                text,
                check: false
            }
        ])
    }

    return(
        <div>
            <h1>Todays to do</h1>
            <Form onSubmit={this}>
            <Form.Group>
                <Form.Label> What to do today</Form.Label>
                <input type="text" name="todos" id="todos" placeholder="Enter your todos" onChange={onChange} />
            </Form.Group>  
            
            <Button variant="primary" type="submit">
                Add
            </Button>
            </Form>
        </div>
    );
    
}

export default Home;