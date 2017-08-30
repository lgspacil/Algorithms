function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype.add = function(value){
    //create a new item object, place data in
    var node = {
        value: value,
        left: null,
        right: null
    }

    var current;

    //special case, no items in the tree yet
    if(this._root == null){
        this._root = node;
    }else{
        current = this._root;

        while(true){

            //if the new value is less than this node's value, go left
            if (value < current.value){

                //if there's no left, then the new node belongs there
                if (current.left === null){
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }

            //if the new value is greater than this node's value, go right
            } else if (value > current.value){

                //if there's no right, then the new node belongs there
                if (current.right === null){
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }       

            //if the new value is equal to the current one, just ignore
            } else {
                break;
            }
        }

    }
}

BinarySearchTree.prototype.contains = function(value){
    var found = false;
    var current = this._root;

    //make sure there's a node to search
    while(!found && current){

        //if the value is less than the current node's, go left
        if (value < current.value){
            current = current.left;

        //if the value is greater than the current node's, go right
        } else if (value > current.value){
            current = current.right;

        //values are equal, found it!
        } else {
            found = true;
        }
    }

    //only proceed if the node was found
    return found;
}

BinarySearchTree.prototype.inorder = function(node){
    if(node){
        //First recur on left child
        this.inorder(node.left);
        //print the data of the node
        console.log(node.value);
        
        //now recur on right child
        this.inorder(node.right);

    }
}

BinarySearchTree.prototype.postorder = function(node){
    if(node){
        //First recur on left child
        this.postorder(node.left);
        
        //now recur on right child
        this.postorder(node.right);

        //print the data of the node
        console.log(node.value);

    }
}

BinarySearchTree.prototype.preorder = function(node){
    if(node){
        //print the data of the node
        console.log(node.value);

        //First recur on left child
        this.preorder(node.left);
        
        //now recur on right child
        this.preorder(node.right);

    }
}



BinarySearchTree.prototype.minNode = function(node){
    //if there is no node, print 0;
    if(!node){
        return 0;
    }

    //keep going left until you reach the min node
    if(node.left){
        return minNode(node.left)
    }
    //retun the smallest;
    return node.value;
}



var bst = new BinarySearchTree();
bst.add(3);
bst.add(2);
bst.add(4);
bst.add(1);
bst.add(5);
// console.log(bst.contains(2));
// bst.inorder(bst._root);
// bst.preorder(bst._root);
console.log(bst._root);



