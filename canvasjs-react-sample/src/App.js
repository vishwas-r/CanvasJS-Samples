import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
//var CanvasJSReact = require('./assets/canvasjs.react').default;
console.log(CanvasJSReact)
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {	
  render() {
	const options = {
	  theme: "light2",
	  animationEnabled: true,
	  exportEnabled: true,
	  title: {
		text: "Basic Column Chart in React"
	  },
	  data: [{				
			type: "column",
			dataPoints: [
				{ label: "Apple",  y: 10  },
				{ label: "Orange", y: 15  },
				{ label: "Banana", y: 25  },
				{ label: "Mango",  y: 30  },
				{ label: "Grape",  y: 28  }
			]
	   }]
   }
   
   const style = {
	   width: "80%",
	   height: "360px",
	   margin: "auto"
   }
		
   return (
	  <div>
		<CanvasJSChart options = {options} containerProps = {style}
			/* onRef = {ref => this.chart = ref} */
		/>
	  </div>
	);
  }
}



export default App;
