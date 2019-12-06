# Useful website

[Comparison](https://www.toptal.com/developers/sorting-algorithms)

[Visualgo](https://visualgo.net/en/sorting)

## Big O

### Comparison Sorts

#### Quadratic Algos

| Algo      | Time (Best) | Time (Avg) | Time (Worst) | Space | Comment                  |
| --------- | ----------- | ---------- | ------------ | ----- | ------------------------ |
| Bubble    | O(n)        | O(n^2)     | O(n^2)       | O(1)  |
| Insertion | O(n)        | O(n^2)     | O(n^2)       | O(1)  | Good for streaming input |
| Selection | O(n^2)      | O(n^2)     | O(n^2)       | O(1)  |

#### Improved Algos

| Algo  | Time (Best)    | Time (Avg)     | Time (Worst)   | Space     | Comment |
| ----- | -------------- | -------------- | -------------- | --------- | ------- |
| Merge | O(n \* log(n)) | O(n \* log(n)) | O(n \* log(n)) | O(n)      |
| Quick | O(n \* log(n)) | O(n \* log(n)) | O(n^2)         | O(log(n)) |

#### Number Sort

| Algo  | Time (Best) | Time (Avg) | Time (Worst) | Space  | Comment             |
| ----- | ----------- | ---------- | ------------ | ------ | ------------------- |
| Radix | O(nk)       | O(nk)      | O(nk)        | O(n+k) | k: number of digits |
