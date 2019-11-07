const Graph = require("./adjacentList.js");

let g;

beforeEach(() => {
  g = new Graph();
});

test("graph adds vertices", () => {
  g.addVertex("Michael");
  g.addVertex("Adam");
  g.addVertex("Eve");

  expect(g).toEqual({ adjacencyList: { Michael: [], Adam: [], Eve: [] } });
});

test("graph adds edges", () => {
  g.addVertex("Michael");
  g.addVertex("Adam");
  g.addVertex("Eve");

  g.addEdge("Adam", "Michael");

  expect(g).toEqual({
    adjacencyList: { Michael: ["Adam"], Adam: ["Michael"], Eve: [] }
  });
});

test("graph removes edges", () => {
  g.addVertex("Michael");
  g.addVertex("Adam");
  g.addVertex("Eve");

  g.addEdge("Adam", "Michael");

  g.removeEdge("Adam", "Michael");

  expect(g).toEqual({
    adjacencyList: { Michael: [], Adam: [], Eve: [] }
  });
});

test("graph removes vertex", () => {
  g.addVertex("Michael");
  g.addVertex("Adam");
  g.addVertex("Eve");

  g.addEdge("Adam", "Michael");

  g.removeVertex("Adam");

  expect(g).toEqual({
    adjacencyList: { Michael: [], Eve: [] }
  });
});

test("graph traverses depth first", () => {
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");

  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("F", "F");

  const traversedDFRecursive = g.traverseRecursiveDepthFirstGraph("A");
  const traversedDFIterative = g.traverseIterativeDepthFirstGraph("A");
  const traversedBFIterative = g.traverseRecursiveBreadthFirstGraph("A");

  expect(traversedDFRecursive).toEqual(["A", "B", "D", "E", "C", "F"]);
  expect(traversedDFIterative).toEqual(["A", "C", "E", "D", "F", "B"]);
  expect(traversedBFIterative).toEqual(["A", "B", "C", "D", "E", "F"]);
});
