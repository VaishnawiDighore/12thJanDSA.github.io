class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
    var root = null;
    function printPostorder(node) {
        if (node == null)
            return;
        printPostorder(node.left);
        printPostorder(node.right);
 
        console.log(node.key + " ");
    }
    function printInorder(node) {
        if (node == null)
            return;
        printInorder(node.left);
        console.log(node.key + " ");
        printInorder(node.right);
    }
    function printPreorder(node) {
        if (node == null)
            return;
        console.log(node.key + " ");
        printPreorder(node.left);
        printPreorder(node.right);
        
    }
        root = new Node(10);
        root.left = new Node(20);
        root.right = new Node(30);
        root.left.left = new Node(40);
        root.left.right = new Node(50);
 
        console.log("Preorder traversal of binary tree is");
        printPreorder(root);
 
        console.log("Inorder traversal of binary tree is");
        printInorder(root);
 
        console.log("Postorder traversal of binary tree is ");
        printPostorder(root);