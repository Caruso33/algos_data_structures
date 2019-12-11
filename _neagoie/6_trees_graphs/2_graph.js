class Node {
  constructor(val) {
    this.val = val;
  }
}

class Graph {
  constructor(undirected) {
    this.numberOfNodes = 0;
    this.adjacentList = {};
    this.undirected = undirected || true;
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1].includes(node2))
      this.adjacentList[node1].push(node2);

    if (this.undirected) {
      if (!this.adjacentList[node2].includes(node1))
        this.adjacentList[node2].push(node1);
    }
  }

  bfs(startingVertex) {
    const result = [];
    const visitedVertices = { [startingVertex]: true };
    const queue = [startingVertex];

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacentList[currentVertex].forEach(neighbor => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  dfs(startingVertex) {
    const result = [];
    const visitedVertices = {};

    const recursion = vertex => {
      if (vertex === undefined) return null;

      result.push(vertex);
      visitedVertices[vertex] = true;

      this.adjacentList[vertex].forEach(
        neighbor => !visitedVertices[neighbor] && recursion(neighbor)
      );
    };
    recursion(startingVertex);

    return result;
  }

  showConnections() {
    for (const node of Object.keys(this.adjacentList)) {
      let connections = [];
      for (const edge of this.adjacentList[node]) {
        connections.push(edge);
      }
      console.log(`${node} --> ${connections}`);
    }
  }
}

const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 2);

graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 6);

// graph.addVertex(6);
// console.log(JSON.stringify(graph, undefined, 2));

// graph.showConnections();

console.log(graph.bfs(0));
console.log(graph.dfs(0));
