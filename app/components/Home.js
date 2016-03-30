import React from 'react';
import Pattern from'babel!svg-react!../images/pattern.svg?name=Pattern';
import PromptContainer from '../containers/PromptContainer';

export default React.createClass({
	render: function() {
		return (
			<div>
				<Pattern className="pattern" />
				<div className="content">
					<PromptContainer title='Enter a City and State' />
				</div>
			</div>
			
		)
	}
});