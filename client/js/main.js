// mind map
var svg = d3.select("#MindMap svg"),
width = +svg.attr("width"),
height = +svg.attr("height"),
g = svg.append("g").attr("transform", "translate(60,0)");

var tree = d3.cluster()
  .size([height, width - 270]);

var stratify = d3.stratify()
  .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });


d3.json("http://localhost:3000/api/maps", function(error, treeData) {
  if (error) throw error;

  var root = d3.hierarchy(treeData);
  tree(root);

  // connect
  var link = g.selectAll(".link")
    .data(root.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
      return "M" + d.y + "," + d.x
        + "C" + (d.parent.y + 100) + "," + d.x
        + " " + (d.parent.y + 100) + "," + d.parent.x
        + " " + d.parent.y + "," + d.parent.x;
      });
  // node
  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")";
    })

  node.append("circle")
    .attr("r", 2.5);

  node.append("text")
    .attr("dy", 3)
    .attr("x", function(d) { return d.children ? -8 : 8; })
    .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
    .text(function(d) {
      return d.data.name;
    });
});
