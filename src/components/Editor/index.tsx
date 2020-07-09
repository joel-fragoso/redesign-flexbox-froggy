import React, { FunctionComponent } from 'react';

import { Container } from './styles';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/dracula.css');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/edit/closebrackets.js');
require('codemirror/mode/css/css.js');

const Editor: FunctionComponent = () => {
  return (
    <Container
      value={`/* CSS File */\n\n#root {\n\tdisplay: flex;\n\n}\n`}
      options={{
        mode: 'css',
        theme: 'dracula',
        lineNumbers: true,
        tabSize: 2,
        matchBrackets: true,
        autoCloseBrackets: true,
      }}
      onChange={(editor, data, value) => {
        console.log(editor);
        // console.log(data);
        // console.log(value);
      }}
    />
  );
};

export default Editor;
