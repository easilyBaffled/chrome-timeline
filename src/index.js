import cs from 'console.tap';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import './styles.css';
console = cs;
const style = { width: 600, margin: 50 };
const marks = ['21', '45', '47', '49', '60 - now'];
const descriptions = [
  '',
  '',
  '',
  '',
] 
const examples = [
  `
function pickAndFormatTransaction( transaction ) {
  const amount = transaction.amount;
  const date = transaction.date;
  const description = transaction.description;
  const details = _.omit( 
    transaction, 
    [ 'amount', 'date', 'description' ] 
  );

  return {
    amount: Number( amount )
      ? formatCurrency( amount ) 
      : amount,
    date: moment( date ).format( 'DD/MM/YYY' ),
    description: description,
    details: details
  }
}
`,
  `
const pickAndFormatTransaction = ( transaction ) => {
  const amount = transaction.amount;
  const date = transaction.date;
  const description = transaction.description;
  const details = _.omit( 
    transaction, 
    [ 'amount', 'date', 'description' ] 
  );

  return {
    amount: Number( amount )
      ? formatCurrency( amount ) 
      : amount,
    date: moment( date ).format( 'DD/MM/YYY' ),
    description,
    details
  }
}
`,
  `
const pickAndFormatTransaction = ( transaction ) => {
  const amount = transaction.amount;
  const date = transaction.date;
  const description = transaction.description;
  const details = _.omit( 
    transaction, 
    [ 'amount', 'date', 'description' ] 
  );

  return {
    amount: Number( amount )
      ? formatCurrency( amount ) 
      : amount,
    date: moment( date ).format( 'DD/MM/YYY' ),
    description: description,
    details: details
  }
}
`,
  `
const pickAndFormatTransaction = ( transaction ) => {
	const {
		amount,    
		date,
		description,
		...details
	} = transactions
	
	return {
		amount: Number( amount )
			? formatCurrency( amount ) 
			: amount,
		date: moment( date ).format( 'DD/MM/YYY' ),
		description: description,
		details: details
	}
}
`,
  `
const pickAndFormatTransaction = ( {
		amount,    
		date,
		description,
		...details
} ) => ( {
	    amount: Number( amount )
			? formatCurrency( amount ) 
			: amount,
		date: moment( date ).format( 'DD/MM/YYY' ),    
		description,
    details,   
} );

`
];
function App() {
  const [timeIndex, setTimeIndex] = useState(0);
  return (
    <div className="App">
      <div style={style}>
        <SyntaxHighlighter language="javascript">
          {examples[timeIndex]}
        </SyntaxHighlighter>
        <Slider
          dots
          step={1}
          marks={marks}
          max={marks.length - 1}
          onChange={setTimeIndex}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
