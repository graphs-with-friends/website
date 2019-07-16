import './index.css'
import * as d3 from 'd3'

const width = self.innerWidth
const height = self.innerHeight

const MAX_GROUPS = 6

const nodeLayout = {
  type: 'rect',
  width: 50,
  height: 50
}

const svg = d3.select('svg#graph')
const color = d3.scaleOrdinal(d3.schemePastel1)

function rand (max) {
  return Math.floor(Math.random() * max)
}

function randArrayEntry (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const nodes = []
const links = []

for (let i = 0; i < MAX_GROUPS; i++) {
  nodes.push({
    id: `node-${i}`,
    group: i
  })
}

nodes.forEach((node, index) => {
  let source = nodes[index + 1]

  if (!source) {
    source = nodes[0]
  }

  links.push({
    source: node,
    target: source
  })
})

for (let i = 0; i < 30; i++) {
  addNode()
}

var simulation = d3.forceSimulation(nodes)
  .force('charge', d3
    .forceManyBody()
    .strength(-50)
  )
  .force('link', d3
    .forceLink()
    .distance(100)
    .strength(0.1)
  )
  .force('center', d3.forceCenter(width/2, height/2))
  .alphaTarget(1)
  .on('tick', ticked)
  .stop()

var g = svg.append('g')
var link = g.append('g')
  .attr('stroke', 'rgba(0, 0, 0, 0.5')
  .attr('stroke-width', 10)
  .selectAll('.link')
var node = g.append('g')
  .attr('stroke', 'rgba(0, 0, 0, 0.5')
  .attr('stroke-width', 10)
  .selectAll('.node')

restart()

function restart() {
  node = node.data(nodes, d => d.id)

  node.exit().transition()
    .attr('width', 0)
    .attr('height', 0)
    .remove();

  node = node.enter()
    .append(nodeLayout.type)
    .attr('width', 10)
    .attr('height', 10)
    .attr('x', 10)
    .attr('y', 10)
    .attr('fill', d => color(d.group))
    .call(node => {
      node.transition()
        .attr('width', nodeLayout.width)
        .attr('height', nodeLayout.height)
    })
    .merge(node)

  // Apply the general update pattern to the links.
  link = link.data(links, d => `${d.source.id}-${d.target.id}`)

  // Keep the exiting links connected to the moving remaining nodes.
  link.exit().transition()
    .attr('stroke-opacity', 0)
    .attrTween('x1', d => d.source.x)
    .attrTween('x2', d => d.target.x)
    .attrTween('y1', d => d.source.y)
    .attrTween('y2', d => d.target.y)
    .remove()

  link = link.enter().append('line')
    .call(link => {
      link.transition().attr('stroke-opacity', 1)
    })
    .merge(link)

  // Update and restart the simulation.
  simulation.nodes(nodes)
  simulation.force('link').links(links)
  simulation.alpha(1).restart()
}

function ticked () {
  node
    .attr('x', d => d.x - nodeLayout.width / 2)
    .attr('y', d => d.y - nodeLayout.height / 2)

  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);
}

restart()

const updateInterval = setInterval(() => {
  if (nodes.length === 50) {
    return clearInterval(updateInterval)
  }

  addNode()
  restart()
}, 5000)

function addNode () {
  var node = {
    id: `node-${nodes.length}`,
    group: rand(MAX_GROUPS)
  }
  nodes.push(node)

  // link to 1-3 other nodes in the same group
  let numLinks = 2
  let linkTo = {}
  const group = nodes
    .filter(n => n.group === node.group)
    .filter(n => n.id !== node.id)

  for (let i = 0; i < (rand(numLinks) + 1); i++) {
    const other = randArrayEntry(group)
    linkTo[other.id] = other
  }

  Object.values(linkTo).forEach(target => {
    links.push({
      source: node,
      target
    })
  })
}
