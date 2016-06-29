function renderTemp(tempData){
	var level = tempData;
  
  var coldValue = 0;
  var optimumValue = 0;
  var hotValue = 0;

  if(level <= 20){
    coldValue = level;
  }else{
    coldValue = 20;
    if( level <= 30){
      optimumValue = level - 20;
    }else{
      optimumValue = 10;
      hotValue = level -30;
    }
  }


var traceCold = {
  x: ['temperature'],
  y: [coldValue],
  name: 'cold',
  type: 'bar',
  marker: {color:'rgba(0, 0, 255, 0.8)'}
};

var traceOptimum = {
  x: ['temperature'],
  y: [optimumValue],
  name: 'optimum',
  type: 'bar',
  marker: {color:'rgba(0, 255, 0, 0.8)'}
};

var traceHot= {
  x: ['temperature'],
  y: [hotValue],
  name: 'hot',
  type: 'bar',
  marker: {color:'rgba(255, 0, 0, 0.8)'}
};

var data = [traceCold, traceOptimum, traceHot];

var layout = {
  barmode: 'stack',
  xaxis: {zeroline:false, showgrid: false, range: [0, 2]},
  yaxis: {zeroline:false, showgrid: false, range: [0, 40]},
  title: 'Thermometer: ' + level + ' C'
};

Plotly.newPlot('temp', data, layout);
}


function renderHydro(data){
// The hydro measurement
var level = data;

// Trig to calc meter point
var degrees = 100 - level,
     radius = .5;
var radians = degrees * Math.PI / 180;
var x = radius * Math.cos(radians);
var y = radius * Math.sin(radians);

// Path: may have to change to create a better triangle
var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
     pathX = String(x),
     space = ' ',
     pathY = String(y),
     pathEnd = ' Z';
var path = mainPath.concat(pathX,space,pathY,pathEnd);

var data = [{ type: 'scatter',
   x: [0], y:[0],
    marker: {size: 28, color:'850000'},
    showlegend: false,
    name: '"%',
    text: level,
    hoverinfo: 'text+name'},
  { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
  rotation: 90,
  text: ['', '', '', '',
            '', '', ''],
  textinfo: 'text',
  textposition:'inside',
  marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
                         'rgba(202, 209, 95, .5)', 'rgba(206, 207, 120, .5)',
                         'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
                         'rgba(255, 255, 255, 0)']},
  labels: ['84-100 %', '68-83 %', '51-67 %', '34-50 %', '18-33 %', '0-17 %', ''],
  hoverinfo: 'label',
  hole: .5,
  type: 'pie',
  showlegend: false
}];

var layout = {
  shapes:[{
      type: 'path',
      path: path,
      fillcolor: '850000',
      line: {
        color: '850000'
      }
    }],
  title: 'Hydrometer: '+ level + '%',
  height: 400,
  width: 400,
  xaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]},
  yaxis: {zeroline:false, showticklabels:false,
             showgrid: false, range: [-1, 1]}
};

Plotly.newPlot('hydro', data, layout);
}

function renderHistory(data){
	TESTER = document.getElementById('history');
	Plotly.plot( TESTER, [{
	x: [1, 2, 3, 4, 5],
	y: [1, 2, 4, 8, 16] }], {
	margin: { t: 0 } } );
}