'use strict'

const treemap = d3.treemap()

// console.log(treemap);

$.ajax({
  url: 'http://localhost:3000/api/maps',
  success : function(data){
    // console.log(data);
    var test = [10, 45, 30, 45, 70, 90, 100]

    d3.select('#bar-chart')
      .selectAll('svg')
      .data(test)
      .enter()
      .append('svg')
      .text((d) => d)
      .style('height', (d) => `${d}`)
      .style('width', '25')
      .style('margin-right', '5')
      .style('background-color', "lightblue")

    d3.select('#mind-map')
      .selectAll('div')
      .data(data.children)
      .enter()
      .append('p')
      .text((d) => (d.name))
  }
})
