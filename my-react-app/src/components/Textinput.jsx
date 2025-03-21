import { useState } from "react";

export default function Textinput () {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        console.log(event)
        setText(event.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <br />
            <p>Text: {text}</p>
        </div>
    )

}