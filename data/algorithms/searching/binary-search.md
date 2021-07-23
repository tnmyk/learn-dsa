Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.<br/><br/><br/>

#### Complexity

Time Complexity: O(log(n)) - since we split search area by two for every next iteration.
