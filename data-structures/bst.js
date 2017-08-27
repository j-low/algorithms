function BST() {

    this.root = null;
    this.insert = insert;
    this.iterativeContains = iterativeContains;
    this.recursiveContains = recursiveContains;
    this.getMin = getMin;
    this.getMax = getMax;

    // traversal methods
    this.preOrder = preOrder;
    this.inOrder = inOrder;
    this.postOrder = postOrder;

    function insert(val) {
        var newNode = new Node(val, null, null);
        var path = '';

        if (!this.root) {
            this.root = newNode;

            path += this.root.data;
        } else {
            var opComplete = false;
            var current = this.root;
            var parent;

            path += this.root.data;

            while(!opComplete) {
                parent = current;

                path += ' -> ';

                if (val <= current.data) {
                    current = current.left;

                    if (!current) {
                        parent.left = newNode;

                        opComplete = true;
                    } else {
                        path += current.data;
                    }
                } else {
                    current = current.right;

                    if (!current) {
                        parent.right = newNode;
                        opComplete = true;
                    } else {
                        path += current.data;
                    }
                }
            }

            path += newNode.data;
        }

        return path;
    }

    function preOrder(node) {
      if (node) {
        console.log(node.data);
        inOrder(node.left);
        inOrder(node.right);
      }
    }

    function inOrder(node) {
        if (node) {
            inOrder(node.left);
            console.log(node.data);
            inOrder(node.right);
        }
    }

    function postOrder(node) {
        if (node) {
            inOrder(node.left);
            inOrder(node.right);
            console.log(node.data);
        }
    }

    function getMin() {
        var current = this.root;

        while(current.left) {
            current = current.left;
        }

        return current.data;
    }

    function getMax() {
        var current = this.root;

        while (current.right) {
            current = current.right;
        }

        return current.data;
    }

    function recursiveContains(val) {
        var found = [];

        search(val, this.root);

        found = found.reduce(function iterator(total, current) {
            return total += current;
        });

        return found > 0 ? true : false;

        function search(val, currentNode) {
            var current = currentNode || this.root;

            if (val === current.data) {
                found.push(true);
            }

            if (current.left) {
                search(val, current.left);
            }

            if (current.right) {
                search(val, current.right);
            }

            if (!current.left && !current.right) {
                found.push(false);
            }
        }
    }

    function iterativeContains(val) {
        var current = this.root;

        while (val !== current.data) {

            if (val <= current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            if (current === null) {
                return false;
            }
        }

        return true;
    }

    function Node(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
