const Graph = require("./adjacentList.js");
console.log("Graph", Graph);
let g;

beforeEach(() => {
  g = new Graph();
});

test("graph adds vertecis", () => {
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
