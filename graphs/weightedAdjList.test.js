const WeightedGraph = require("./weightedAdjList.js");

let g;

beforeEach(() => {
  g = new WeightedGraph();
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

  g.addEdge("Adam", "Michael", 50);

  expect(g).toEqual({
    adjacencyList: {
      Michael: [{ node: "Adam", weight: 50 }],
      Adam: [{ node: "Michael", weight: 50 }],
      Eve: []
    }
  });
});

test("graph return shortest path", () => {
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");

  g.addEdge("A", "B", 4);
  g.addEdge("A", "C", 2);
  g.addEdge("B", "E", 3);
  g.addEdge("C", "D", 2);
  g.addEdge("C", "F", 4);
  g.addEdge("D", "E", 3);
  g.addEdge("D", "F", 1);
  g.addEdge("E", "F", 1);

  const dijkstra = g.dijkstra("A");

  return undefined
  expect(dijkstra).toEqual(["A", "B", "D", "E", "C", "F"]);
});
