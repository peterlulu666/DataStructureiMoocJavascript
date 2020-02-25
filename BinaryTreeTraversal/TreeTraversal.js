class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;

    }

}

class TreeTraversal {
    inOrderTraversal(node) {
        if (node === null) {
            return;

        }

        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);

    }

    preOrderTraversal(node) {
        if (node === null) {
            return;

        }

        console.log(node.data);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);

    }

    postOrderTraversal(node) {
        if (node === null) {
            return;

        }

        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.data);

    }

    Breadth_first_search(root) {
        var queue = [];
        var data = [];
        queue.push(root);
        while (queue.length !== 0) {
            var node = queue.shift();
            data.push(node.data);
            if (node.left != null) {
                queue.push(node.left);

            }
            if (node.right != null) {
                queue.push(node.right);

            }

        }
        return data.toString();

    }

    insert(data) {
        var newNode = new Node(data);
        return newNode;

    }

}

var treeTraversal = new TreeTraversal();
var root = treeTraversal.insert("file");
root.left = treeTraversal.insert("edit");
root.left.left = treeTraversal.insert("view");
root.left.right = treeTraversal.insert("navigate");
root.right = treeTraversal.insert("code");
root.right.left = treeTraversal.insert("refactor");
root.right.right = treeTraversal.insert("run");
// treeTraversal.inOrderTraversal(root);
// treeTraversal.preOrderTraversal(root);
// treeTraversal.postOrderTraversal(root);
console.log(treeTraversal.Breadth_first_search(root));







