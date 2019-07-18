import React from 'react';
import ReactDom from 'react-dom';
import FormContainer from './js/components/containers/FormContainer.jsx';

const root = document.getElementById("root");
root ? ReactDom.render(<FormContainer/>, root) : null;