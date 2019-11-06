class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexName) {
    if (!this.adjacencyList[vertexName]) this.adjacencyList[vertexName] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
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
        v => v !== vertex2
      );
    if (this.adjacencyList[vertex2])
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
  }

  traverseRecursiveDepthFirstGraph(startingVertex) {
    const result = [];
    const visitedVertices = {};

    const recursion = vertex => {
      if (!vertex) return null;

      result.push(vertex);
      visitedVertices[vertex] = true;

      this.adjacencyList[vertex].forEach(
        neighbor => !visitedVertices[neighbor] && recursion(neighbor)
      );
    };
    recursion(startingVertex);

    return result;
  }

  traverseIterativeDepthFirstGraph(startingVertex) {
    const result = [];
    const visitedVertices = { [startingVertex]: true };
    const stack = [startingVertex];
    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  traverseRecursiveBreadthFirstGraph(startingVertex) {
    const result = [];
    const visitedVertices = { [startingVertex]: true };
    const queue = [startingVertex];

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");
// g.addEdge("C", "E");
// g.addEdge("D", "E");
// g.addEdge("D", "F");
// g.addEdge("F", "F");

// console.log("g", g.traverseRecursiveBreadthFirstGraph("A"));

module.exports = Graph;
