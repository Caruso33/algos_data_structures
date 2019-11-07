const PriorityQueue = require("./priorityQueue");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    while (this.adjacencyList[vertex].length) {
      const relation = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, relation);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1])
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v.node !== vertex2
      );
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v.node !== vertex1
      );
  }

  dijkstra(startVertex, endVertex) {
    const nodes = new PriorityQueue();
    const distances = {}, // summed distance to each vertex
      previous = {}; // what is previous vertex to each vertex along shortest path
    let smallest, // smallest priority queue iterable item
      path = []; // shortest path result

    // init state
    for (let vertex in this.adjacencyList) {
      previous[vertex] = null;

      if (vertex === startVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }

    // something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      // end case
      if (smallest === endVertex) {
        while (previous[smallest]) {
          // e.g. smallest 'F', previous[smallest] 'D'
          path.push(smallest); // reversed path
          smallest = previous[smallest]; // update smallest to iterate through previous
        }
        break; // we don't need to traverse more
      }

      if (smallest || distances[smallest] !== Infinity) {
        // all neighbors to smallest
        for (let neighbor in this.adjacencyList[smallest]) {
          let neighborNode = this.adjacencyList[smallest][neighbor];

          // distance to neighborNode
          const potentialWeight = distances[smallest] + neighborNode.weight;
          const potentialNode = neighborNode.node;

          // neighborNode has already some cost or Infinity
          if (potentialWeight < distances[potentialNode]) {
            // it's shortest way to this point, update variables
            distances[potentialNode] = potentialWeight;
            previous[potentialNode] = smallest;
            nodes.enqueue(potentialNode, potentialWeight);
          }
        }
      }
    }

    return [...path, smallest].reverse();
  }
}

// const g = new WeightedGraph();

// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");
// // g.addVertex("G");

// g.addEdge("A", "B", 4);
// g.addEdge("A", "C", 2);
// g.addEdge("B", "E", 3);
// g.addEdge("C", "D", 2);
// g.addEdge("C", "F", 4);
// g.addEdge("D", "E", 3);
// g.addEdge("D", "F", 1);
// g.addEdge("E", "F", 1);

// console.log("g", g.dijkstra("A", "G"));

module.exports = WeightedGraph;
