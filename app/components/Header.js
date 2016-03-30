import React from 'react';
import {Link} from 'react-router'
import PromptContainer from '../containers/PromptContainer';

export default function Header (props) {
  return (
    <header className="header">
    	<Link to="/"><h1 className="header-heading">Cleaver Header</h1></Link>
    	<PromptContainer  />
    </header>
  )
}