import { useState } from "react";

function TodoListItem({props}) {
    const [value, setValue] = useState;

    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
}

export default TodoListItem;