const BinarySearchTree = require('./BST');

// 1. Draw a BST
// Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary
// search tree, what would the tree look like? (Draw the tree, no coding needed here.)

// Draw the BST with the keys - E A S Y Q U E S T I O N

  // See DrawBST_RemoveRoot.png

// 2. Remove the root
// Show how the above trees would look like if you deleted the root of each tree.
// (Draw the trees, no coding needed here.)

  // See DrawBST_RemoveRoot.png


// 3. Create a BST class

// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree.
// Compare your result with the result from the 1st exercise.

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);

  // console.log(BST);

  console.log('---Tree---');
  console.log(tree(BST));

  console.log('---Height---');
  console.log(heightOfBST(BST));

  console.log('---BST?---');
  console.log(isBst(BST));

  console.log('---3rd Largest Node---');
  console.log(thirdLargest(BST));

  console.log('---Balanced BST?---');
  console.log(balanced(BST));

  return BST;
}

main();


// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree.
// Compare your result with the result from the 1st exercise.

function mainLetters() {
  const BST = new BinarySearchTree();
  BST.insert('E');
  BST.insert('A');
  BST.insert('S');
  BST.insert('Y');
  BST.insert('Q');
  BST.insert('U');
  BST.insert('E');
  BST.insert('S');
  BST.insert('T');
  BST.insert('I');
  BST.insert('O');
  BST.insert('N');

  // console.log(BST);

  return BST;
}

mainLetters();


// 4. What does this program do?
// Without running this code in your code editor, explain what the following program does.

function tree(t){
  // if the tree is empty return 0
    if(!t){
        return 0;
    }
    // adds up all the values of the tree recursively
    return tree(t.left) + t.value + tree(t.right)
}

// Show with an example the result of executing this program.
  // console.log(tree(BST));      // 37

// What is the runtime of this algorithm?
  // O(n) - it iterates though each one


// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree.

function heightOfBST(bst) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (!bst) {
    return 0;
  }
  else {
    leftHeight = heightOfBST(bst.left);
    rightHeight = heightOfBST(bst.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    }
    else {
      return rightHeight + 1;
    }
  }
}

// What is the time complexity of your algorithm?


// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree,
// assuming the tree does not contain duplicates.

function isBst(bst) {
  if (!bst.key) {
    return false;
  }

  if (bst.left) {
    // check to see if the values to the left are less than root
    if (bst.left.key > bst.key) {
      return false;
    }
    else {
      return isBst(bst.left);
    }
  }

  // check to see if the values to the right are less than root
  if (bst.right) {
    if (bst.right.key < bst.key) {
      return false;
    }
    else {
      return isBst(bst.right);
    }
  }

  // check for 2 children
  if (bst.right && bst.left) {
    isBst(bst.right);
    isBst(bst.left);
  }

  // check for end of the tree
  if (!bst.right && !bst.left) {
    return true;
  }
}

// 7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

function thirdLargest(bst) {
  const height = heightOfBST(bst);
  if (height < 2) {
    return null;
  } else if (height < 3) {
    if (bst.left && bst.right) {
      return bst.left.value;
    } else return null;
  } else if (height > 3) {
    return thirdLargest(bst.right);
  } else return bst.key;
}


// 8. Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ
// in distance from the root by more than 1).

function balanced(bst) {
  let leftHeight = heightOfBST(bst.left);
  let rightHeight = heightOfBST(bst.right);

  if (Math.abs(rightHeight - leftHeight) <= 1) {
    return true;
  } else if (Math.abs(rightHeight - leftHeight) > 1) {
    return false;
  }
}


// 9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two
// binary search trees. Write a program that will tell whether the two BSTs will be identical
// or not without actually constructing the tree. You may use another data structure such as
// an array or a linked list but don't construct the BST. What is the time complexity of your
// algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but
// will create the exact same BSTs and your program should return true.

function sameBSTs(arr1, arr2) {
  // works better with arrLength, index1, index2 as extra params
  // index1 === arrLength
  // base case
  if (arr1[0] !== arr2[0]) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length === 1 && arr2.length === 1) {
    return true;
  }
  let root = arr1[0];
  // make sure both BSTs are the same height
  // if a child is < root then apply recursive fn on left child for node comparison
  // if a child is > root then apply recursive fn on right child for node comparison
  let leftArray1 = [];
  let rightArray1 = [];
  let leftArray2 = [];
  let rightArray2 = [];
  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < root) {
      leftArray1.push(arr1[i]);
    } else if (arr1[i] > root) {
      rightArray1.push(arr1[i]);
    }
    if (arr2[i] < root) {
      leftArray2.push(arr2[i]);
    } else if (arr2[i] > root) {
      rightArray2.push(arr2[i]);
    }
  }
  return sameBSTs(leftArray1, leftArray2) && sameBSTs(rightArray1, rightArray2);
}

let arr1 = [3, 5, 4, 6, 1, 0, 2];
let arr2 = [3, 1, 5, 2, 4, 6, 0];

console.log('---Same BSTs?---');
console.log(sameBSTs(arr1, arr2));