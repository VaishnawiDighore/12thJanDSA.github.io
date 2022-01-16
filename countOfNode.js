class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}
let root;
function getfullCount()
{
    if (root == null)
        return 0;

    let queue = [];
    queue.push(root);
    let count = 0;
     
    while (queue.length != 0)
    {
        let temp = queue.shift();
        if (temp.left != null && temp.right != null)
            count++;
        if (temp.left != null)
        {
            queue.push(temp.left);
        }
        if (temp.right != null)
        {
            queue.push(temp.right);
        }
    }
    return count;
}

root = new Node(5);
root.left = new Node(10);
root.right = new Node(15);
root.left.right = new Node(20);
root.left.right.left = new Node(25);
root.left.right.right = new Node(30);
root.right.right = new Node(35);
root.right.right.left = new Node(40);
 
console.log(getfullCount());