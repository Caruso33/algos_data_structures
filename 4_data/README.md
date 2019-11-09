# Useful website

[Visualgo](https://visualgo.net/en/list)

## Big O

### Comparison Data Structures

#### Singly - Doubly

| Structure          | Insertion | Removal     | Searching | Access | Comment        |
| ------------------ | --------- | ----------- | --------- | ------ | -------------- |
| Singly             | O(1)      | O(1) / O(n) | O(n)      | O(n)   |
| Doubly             | O(1)      | O(1)        | O(n)      | O(n)   |
| -                  |           |             |           |        |
| Stack              | O(1)      | O(1)        | O(n)      | O(n)   |
| Queue              | O(1)      | O(1)        | O(n)      | O(n)   |
| -                  |           |             |           |        |
| Binary Search Tree | O(log(n)) | O(n)        | O(log(n)) | O(n)   | Not guaranteed |
| Binary Heaps       | O(log(n)) | O(log(n))   | O(n)      | O(n)   | Not guaranteed |
| HashTable          | O(1)      | O(1)        | O(n)      | O(1)   |

Lists:

- Are alternative to array when insertion and deletion at beginning are frequently required (Array have built in index, lists do not).
- Doubly is almost identical to Singly, but easier access which comes with more space requirement

Stacks and Queues:

- Priorty is insertion and removal
- Stacks act upon LIFO. Use is handle function invocations (call stack), operations like undo/redo, and routing. Not built in data structure in JS.
- Queue act upon FIFO. Used for waiting (who waited the longest), background tasks, task processing (printing)

Trees:

- have nodes which have parent / child relationship
- Lists are linear, tree non-linear
- Use is html dom, networking routing, abstract syntax tree, artificial intelligence, folder in OSs.

BT:

- have at most two children

BST:

- Quick to search and insert
- BFS and DFS have same time complexity
- if it is a wide tree use a DFS, if it is a deep tree use a BFS
- DFS-inOrder will keep the order from left to right
- DFS-preOrder is you want to export e.g. save it to a file (first is the root, then it is a child, etc.)

Heap:

- Value of each parent is ALWAYS (MaxBinaryHeap) greater than children, smaller if MinBinaryHeap
- binary heap is as compact as possible, each children node is as full as possible
- used for priority queues / graph traversals

HashTable / HashMap:

- store key-values pairs in large arrays ordered by hashing the keys
- hashing should be fast, distributed uniformly and deterministic
- separate chaining and linear probing are two strategies used for keys with same index
- keys are not ordered
- are fast for finding, adding, removing values
