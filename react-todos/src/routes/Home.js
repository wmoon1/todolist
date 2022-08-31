import { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home(props) {
    const [todos, setTodos] = useState({ name: ''})
    const [showLoading, setShowLoading] = useState(false);
    const saveTodos = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = {name: todos.name}
    }
    const onChange = (e) => {
        e.persist();
        setTodos({...todos, [e.target.name]: e.target.value});
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