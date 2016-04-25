/*$(function () {
var chart = c3.generate({

    bindto: '#chart',

    data: {
    columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
    ],
    types: {
    data1: 'line',
    data2: 'line'
    }
},

axis: {
    x: {
    type: 'categorized'
    }
}

});



});*/
// travel history page chart
$(function() {
    var chart = c3.generate({
        bindto: '#travelBarChart',
          data: {
            X : 'X',
            columns: [
                ['duration',30,40,10,20,30,40,20,20,40,30,60,80,40,70,60,10,40,50,80,90,20,30,60,80,20,10,],

            ],

            colors: {
                duration: '#29b6f6',

            },
            types: {
                duration: 'bar',
            },
        },
        
        size: {
            width: 600
        },
        
        grid: {
            x: {
                show: true,
                lines:[
                    {value:1},{value:2},{value:3},   {value:4},  {value:5},  {value:6},  {value:7},
                    {value:8},  {value:9},  {value:10}, {value:11},   {value:12},   {value:13}, {value:14},
                    {value:15}, {value:16},  {value:17}, {value:18}, {value:19}, {value:20},
                    {value:21}, {value:22},  {value:23}, {value:24}, {value:25}, {value:26},
                ]
            },
            y:{
                show:true
            }
        },
      
        axis: {
            x: {
                type: 'number',
                tick: {
                    count: 26,
                    values:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
                    
                },
           
            }
        }
    });

});
$(function() {
    var chart = c3.generate({
        bindto: '#combine-chart',
          data: {
         columns: [
 
                ['TotalDistance', '120', '40', '20', '70', '120', '45', '65'],
                ['EngineRunTime', 70, 70, 70, 70, 70, 70, 70],
                ['EngineIdleTime', 30, 30, 30, 30, 30, 30, 30]
            ],

            colors: {
                TotalDistance: '#29b6f6',
                EngineRunTime: '#6c40e8',
                EngineIdleTime: '#a686ff'
            },
            types: {
                TotalDistance: 'bar',
                EngineRunTime: 'bar',
                EngineIdleTime: 'bar'
            },
            groups: [
                ['EngineRunTime', 'EngineIdleTime']
            ]
        },
        axis: {
            x: {
                type: 'category',
                
            }
        },
        bar: {
         width:60
        },
        size: {
            width: 640,
            height:280
        },
        
        grid: {
            x: {
                show: true
            },
            y:{
                show:true
            }
        },
      
     
        
    });

});
$(function() {
    var chart = c3.generate({
        bindto: '#acStatusChart',
          data: {
            // x : 'x',
            columns: [
                ['acOn', 120, 40, 20, 70, 120, 45, 65],
                ['acOff', 70, 70, 70, 70, 70, 70, 70],
                ['engine', 30, 30, 30, 30, 30, 30, 30]
            ],

            colors: {
                acOn: '#29b6f6',
                acOff: '#6c40e8',
                engine: '#a686ff'
            },
            types: {
                acOn: 'bar',
                acOff: 'bar',
                engine: 'bar'
            },
            groups: [
                ['EngineRunTime', 'EngineIdleTime']
            ]
        },
        
        size: {
            width: 480,
            height:400
        },
        bar:{
            width: 50
        },
        grid: {
            x: {
                show: true
            },
            y:{
                show:true
            }
        },
      
        axis: {
            x: {
                type: 'category'
            }
        }
    });

});

//code for driving chart end
// $(function() {

//     var chart = c3.generate({
//         data: {
//             // columns: [
//             //     ['data1', 30],
//             //     ['data2', 120],
//             // ],
//             type: 'donut',
//             onclick: function(d, i) {
//                 console.log("onclick", d, i);
//             },
//             onmouseover: function(d, i) {
//                 console.log("onmouseover", d, i);
//             },
//             onmouseout: function(d, i) {
//                 console.log("onmouseout", d, i);
//             }
//         },
//         donut: {
//             title: "Iris Petal Width"
//         }
//     });


// });
