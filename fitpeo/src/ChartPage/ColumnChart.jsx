import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ColumnChart = ()=>{
    CanvasJS.addColorSet("greenShades",
    [//colorSet Array

    "#F2EFFF",
    "#F2EFFF",
    "#F2EFFF",
    "#F2EFFF",
    "#F2EFFF",
    "#F2EFFF" , 
    "#F2EFFF",
    "#5A32EA",
    // "#5A32EA",
    "#F2EFFF",
    "#F2EFFF",
    "#F2EFFF",
    "#F2EFFF"               
    ]);
    const options = {
        colorSet: "greenShades",
        height:200,
        width:500,
        dataPointWidth: 25,
        title: {
            text: "Overview (Basic income)"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Jan",  y: 8  },
                { label: "Feb", y: 5  },
                { label: "Mar", y: 8 },
                { label: "Apl",  y: 9  },
                { label: "May",  y: 4  },
                { label: "Jun",  y: 9  },
                { label: "Jul", y: 9  },
                { label: "Aug", y: 9.5  },
                { label: "Sep",  y: 8  },
                { label: "Oct",  y: 7  },
                { label: "Nov",  y: 8  },
                { label: "Dec",  y: 8.5  },
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

export default ColumnChart

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