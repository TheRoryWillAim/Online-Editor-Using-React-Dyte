import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';

export default function CodeEditor(props){
    const {
        displayName,
        language,
        value,
        theme,
        onChange
    } = props
    function handleChange(editor , data , value){
        onChange(value)
    }
  return (

    <div className="Editor-Box">
        <div className="stylescoloumnTitle">
                    {displayName}
        </div>
    <Controlled 
        value = {value} 
        onBeforeChange = {handleChange}
        className="Mirror-Editor"
        options = {{
            mode: language,
            theme: theme,
            lineNumbers: true,
            lineWrapping: true,
            lint: true
        }} 
    />
    </div>
  );
}
