function getUniqueInterval(interval) {
  interval.sort((a,b) => a[1] - b[1] === 0 ? a[0] - b[0] :  a[1] - b[1] );
  const start = 0, end = 1;
  var temp = null;
  var result = [];
  for(let i = 0; i < interval.length; i++){
    if(result.length == 0 || interval[i][start] > result[result.length-1][end]) {
      result.push(interval[i]);
    }
    if(result[result.length-1][end] < interval[i][end]){
      result[result.length-1][end] = interval[i][end];
    }
  }
  return result;
}
getUniqueInterval([[1,2], [2,3], [0,1], [1,3], [2,3], [4,9]]);


/*******************************************************************************/
function permute(str) {
  var result = [];
  if(str.length == 1) return [str];
  if (str.length === 2) return [str, str[1]+str[0]];
  var strArray = str.split('');
  strArray.forEach((chr, idx, arr) => {
    var temp = [].concat(arr);
    temp.splice(idx,1);
    permute(temp.join('')).forEach((perm) => {
      result.push(chr+perm);
      });
  });
  return result;
}
permute("abc");


/*******************************************************************************/
function findStringPeriod(str) {
  var len = str.length;
  var period = null;
  var n = 0;
  for(let i = 1; i <= len/2; i++) {
    if( len % i === 0 ){
      var substr = str.substring(0,i);
      var j = i;
      n = 1;
      while(j < len) {
        if(substr === str.substring(j, i+j)) {
          n++;
          period = substr;
          j = j+i;
          if(j === len ){
            return { period, n};
          }
        }
        else {
           break;
        }
      }
    }
  }
  return period;
}

findStringPeriod("ababab");


/*******************************************************************************/
// all combinations of an array
function getAllPowerSets (arr) {
  var result = [[]];
  for (let i = 1; i < Math.pow(2,arr.length); i++) {
    var subset = [];
    for ( let j = 0; j < arr.length; j++) {
      if (i & (1 << j) ) {
        subset.push(arr[j]);
      }
    }
    result.push(subset);
  }
  return result;
}

console.log(getAllPowerSets([1,2,3]));


/*******************************************************************************/
// [2, 3 , 4, 4, 1, 8]  target = 8
function findNumberPairs(arr, target) {
  var len = arr.length;
  var pairLookup = {};
  var pair =[]
  for (var i = 0; i < len; i++) {
    var absVal = Math.abs(arr[i]);
    if (pairLookup[absVal]){
      pair.push(pairLookup[absVal], arr[i])
    }
    pairLookup[target-absVal] = arr[i];
  }
  console.log(pair);

}
findNumberPairs([2, 5, 2, 4, 6, 8, 20, -1], 20)


/*******************************************************************************/
function longestSub(arr) {
  var len = arr.length;
  var mapLookup = {};
  var maxSeq = 1;
  for(let i = 0; i < len; i++) {
    mapLookup[arr[i]] = true;
  }
// O(N^2)
  for (var key in mapLookup) {
      var current = key;
      var count = 1;
      while(mapLookup[++current]){
        count++;
      }
      if(count > maxSeq){
        maxSeq = count;
      }
  }
  return maxSeq;
}

console.log(longestSub([1,2, 4, 5, 16, 11, 34, 36, 38, 7, 6, 4, 3]));
/*********************************************/


class Node {

  constructor ( data, left=null, right= null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}



/*******************************************************************************/
class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        }

        else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
     }
    }

  inOrderTraversal(root){
    if (root.left) {
      this.inOrderTraversal(root.left);
    }
    console.log(root.data);
    if (root.right) {
      this.inOrderTraversal(root.right);
    }
  }

  preOrderTraversal(root) {
    console.log(root.data);
    if(root.left ) {
      this.preOrderTraversal(root.left);
    }
    if(root.right) {
      this.preOrderTraversal(root.right);
    }
  }

  postOrderTraversal(root) {
     if(root.left ) {
      this.postOrderTraversal(root.left);
    }
    if(root.right) {
      this.postOrderTraversal(root.right);
    }
     console.log(root.data);
  }

  breadFirstTraversal (root) {
    var current = [root];
    while (current.length > 0) {
      var next = [];
      for (var node of current) {
        console.log(node.data);
        if (node.left) next.push(node.left);
        if (node.right) next.push(node.right);
      }
      current = next;
    }
  }

  findMin(root) {
    var currentNode = root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    console.log(currentNode.data);
  }

  findMax(root){
    var currentNode = root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    console.log(currentNode.data);
  }

  isPresent(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      else if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

var BST = new BinarySearchTree();
BST.insert(10);
BST.insert(15);
BST.insert(5);
BST.insert(2);
BST.insert(3);
BST.insert(12);
BST.insert(17);
BST.insert(13);
BST.insert(21);


BST.findMin(BST.root);
BST.findMax(BST.root);
console.log(BST.isPresent(100));
console.log("level order traversal");
BST.breadFirstTraversal(BST.root);
console.log("in order traversal");
BST.inOrderTraversal(BST.root);
console.log("pre order traversal");
BST.preOrderTraversal(BST.root);
console.log("post order traversal");
BST.postOrderTraversal(BST.root);

/*************************************
******************************************/
function findElement(arr1, arr2, k){
  var i=0, j=0, count=0;
  var len1 = arr1.length;
  var len2= arr2.length;
  while (i < len1 || j < len2) {
    if (arr1[i] < arr2[j]) {
      count++;
      if(count === k) {
        return arr1[i];
      }
      i++;
    }
    else {
      count++;
      if (count === k) {
        return arr2[j];
      }
      j++;
    }
  }
}

console.log(findElement([1, 2, 3, 5, 6, 19, 29, 57], [4, 38, 49, 69, 74], 11));

/*
A = [1, 2, 6, 8, 0,0, 0, 0, 0]
B = [2, 3, 4, 10, 15]
*/

function mergeArrays (master, subarr) {
  var sr = subarr.length - 1;
  var mp = master.length - subarr.length - 1;
  var mr = master.length - 1;
  while (sr >= 0) {
    if (subarr[sr] > master[mp]) {
      master[mr] = subarr[sr];
      sr--;
      mr--;
    }
    else {
      master[mr] = master[mp];
      mr--;
      mp--;
    }
  }
  return master;
}



var longestPalindrome = function(s) {
    var len = s.length;
    var lsPalin = "";
    var l, r;
    if (len === 1) return s;
    for (let i = 0; i < len; i++) {

        //for even length of array or two center points
        l = i;
        r = i;
        while (l >= 0 && r < len && s[l] == s[r]){
            l--;
            r++;
        }
        if( (r- (l+1)) > lsPalin.length) {
            lsPalin = (l===r)  ? s[r] :  s.slice(l+1, r) ;
        }

        //for even length of array or two center points
        l = i;
        r = i+1;
         while (l >= 0 && r < len && s[l] == s[r]){
            l--;
            r++;
        }
        if( (r- (l+1)) > lsPalin.length) {
           lsPalin = (l===r)  ? s[r] : s.slice(l+1, r) ;
        }
    }
    return lsPalin;
};


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var result = [];
    var product = 1;
    var czero = 0;
    if(nums.length <= 1) return nums;
    else if (nums.length === 2) return [nums[1], nums[0]];
    for (let i = 0 ; i < len ; i++) {
      if (nums[i] === 0) {
        czero++;
      }
      if (nums[i] !== 0) {
         product *= nums[i];
      }
    }
    if (czero >= 2) {
        return nums.map(num => 0);
    }
    else {
        for (let i = 0 ; i < len ; i++) {
          if (nums[i] == 0) result[i] = product;
          else if(czero === 1) {
            result[i] = 0;
          } else {
            result[i] = product/nums[i];
          }
        }
    }
    return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length <= 2 ) return 0;
    var len = height.length;
    var maxL = [];
    maxL[0] = height[0];
    var maxR = [];
    maxR[len-1] = height[len-1];
    var wsum = 0;
    for (var i=1; i < len; i++) {
        maxL[i] = Math.max(maxL[i-1], height[i]);
    }
    for (var i=len-2; i >= 0; i--) {
        maxR[i] = Math.max(maxR[i+1], height[i]);
    }
    for (var i=0; i < len; i++) {
      wsum = wsum + (Math.min(maxL[i], maxR[i]) - height[i]);
    }
    return wsum;
};


function placeZero (nums) {
  var len = nums.length;
  if (len <= 1) return nums;
  var l=0, r=len-1;
  while (l < r) {
    if (nums[r] === 0 ){
      r--;
    }
    if(nums[l] === 0){
      nums[l] = nums[r];
      nums[r] = 0;
      l++;
      r--;
    }
    else{
      l++;
    }
  }
  return nums;
}

// Dynamic Programming
function fibonacci(n, mem = {}) {
  var map = mem;
  if (n < 1) {
    return 0;
  }
  if(map[n]) {
    return map[n];
  }
  if (n === 1 || n === 2) {
    map[n] = 1;
  }
  else {
     map[n] = fibonacci(n-1, map) + fibonacci(n-2, map);
  }
  return map[n];
}

console.log(fibonacci(35));


// Dynamic programming
function coinSum(a, b, c, n) {
  var map = {};
  map[0] = true;
  for (let i = 1 ; i <= n ; i++) {
    if (map[i-a]||map[i-b]||map[i-c]) {
      console.log(i);
      map[i] = true;
    }
  }
}
coinSum(10,15,20, 100);


//Facebook 2nd round
function maxLogPieces(arr, minCutPieces) {
  var maxElem = -1;

  if(minCutPieces === 0 || arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>maxElem) maxElem = arr[i];
  }
  console.log(maxElem);
  getCutPieces = (cutSize) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      count += parseInt(arr[i]/cutSize);
    }
    console.log(cutSize, count);
    return count;
  }

  let currentCutPieces = getCutPieces(maxElem);
  while(currentCutPieces < minCutPieces && maxElem > 0) {
    maxElem--;
    currentCutPieces = getCutPieces(maxElem);
  }
  if(maxElem === 0){
    return "Not Possible to Cut";
  }
  return maxElem;
}
console.log(maxLogPieces([5,4,8,7,3,209], 116));



//Compare Version
var compareVersion = function(version1, version2) {
    let vOne = version1.split('.');
    let vTwo = version2.split('.');
    console.log(vOne, vTwo);
    let len = vOne.length > vTwo.length ? vOne.length : vTwo.length;

    for (let i = 0; i < len ; i++) {
        if ((vTwo[i] === undefined && vOne[i] > 0) || (parseInt(vOne[i]) > parseInt(vTwo[i]))) {
            return 1;
        } else if ((vOne[i] === undefined && vTwo[i] > 0) || (parseInt(vOne[i]) < parseInt(vTwo[i]))) {
            return -1;
        }
    }
    return 0;
};
console.log(compareVersion('1.01', '1.001'));


//BFS AND DFS Graph
class Graph {
  constructor() {
    this.graph = {};
  }
  addEdge(u,v) {
    if(this.graph[u] === null || this.graph[u] === undefined ) {
      this.graph[u] = [];
      this.graph[u].push(v);
    } else {
      this.graph[u].push(v);
    }
  }
  bfsTraversal(s) {
    console.log(this.graph);
    var visited = {};
    for (var key in this.graph) {
      visited[key] = false;
    }
    var queue = [];
    queue.push(s);
    visited[s] = true;
    while (queue.length > 0) {
     var n = queue.shift();
     console.log(n);
     var connectedNodes = this.graph[n];
     var len = connectedNodes.length;
     for(let i = 0 ; i < len; i++) {
       if(visited[connectedNodes[i]] === false) {
         queue.push(connectedNodes[i]);
         visited[connectedNodes[i]] = true;
       }
     }
    }
  }

  dfsUtil(s, visited) {
    visited[s] = true;
    console.log(s);
    for(let i = 0 ; i < this.graph[s].length ; i++) {
      if(visited[this.graph[s][i]] === false) {
        this.dfsUtil(this.graph[s][i], visited);
      }
    }
  }
  dfsTraversal(s) {
    console.log(this.graph);
    var visited = {};
    for (var key in this.graph) {
      visited[key] = false;
    }
    this.dfsUtil(s, visited);
  }
}

g = new Graph() ;
g.addEdge(0, 1) ;
g.addEdge(0, 2) ;
g.addEdge(1, 4) ;
g.addEdge(4, 5) ;
g.addEdge(1, 2) ;
g.addEdge(2, 0) ;
g.addEdge(2, 3) ;
g.addEdge(3, 3) ;
g.addEdge(5, 5) ;
g.bfsTraversal(2) ;
g.dfsTraversal(2) ;
