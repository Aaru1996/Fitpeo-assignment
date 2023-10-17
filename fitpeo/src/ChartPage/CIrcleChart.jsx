import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CircleChart = ()=>{
    CanvasJS.addColorSet("green",
    [//colorSet Array

   
   
    "#5A32EA",
    
    "#F2EFFF",
   
    "red" , 
   
                  
    ]);
    const options = {
        colorSet: "green",
        height:170,
        width:250,
        dataPointWidth: 25,
        title: {
            text: "Customers(Customers that buy products)"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "doughnut",
            dataPoints: [
                { label: "65% total new customers",  y: 18  },
                { label: "", y: 5  },
                { label: "", y: 8 },
                
            ]
        }
        ]
    }

    return(
        <div>
             <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
        </div>
    )
}

export default CircleChart

// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class App extends Component {
	// render() {
		// const options = {
		// 	title: {
		// 		text: "Basic Column Chart"
		// 	},
		// 	data: [
		// 	{
		// 		// Change type to "doughnut", "line", "splineArea", etc.
		// 		type: "column",
		// 		dataPoints: [
		// 			{ label: "Apple",  y: 10  },
		// 			{ label: "Orange", y: 15  },
		// 			{ label: "Banana", y: 25  },
		// 			{ label: "Mango",  y: 30  },
		// 			{ label: "Grape",  y: 28  }
		// 		]
		// 	}
		// 	]
		// }
	// 	return (
	// 	<div>
	// 		<CanvasJSChart options = {options}
	// 			/* onRef={ref => this.chart = ref} */
	// 		/>
	// 		{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
	// 	</div>
	// 	);
	// }
// }