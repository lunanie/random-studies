let arvore = {
  left: {
    left: undefined,
    right: {
      value: 3,
    },
    value: 2,
  },
  right: undefined,
  value: 10,
};

function preOrder(tree) {
  console.log(tree.value);
  tree.left && preOrder(tree.left);
  tree.right && preOrder(tree.right);
}

function inOrder(tree) {
  tree.left && inOrder(tree.left);
  console.log(tree.value);
  tree.right && inOrder(tree.right);
}

function posOrder(tree) {
  tree.left && posOrder(tree.left);
  tree.right && posOrder(tree.right);
  console.log(tree.value);
}

console.log("preorder");
preOrder(arvore);
console.log("inorder");
inOrder(arvore);
console.log("posorder");
posOrder(arvore);
