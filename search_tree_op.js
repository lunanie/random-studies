const arvore = {};

function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value);
    } else {
      insert(tree.left, value);
    }
  } else {
    tree.value = value;
    tree.right = {};
    tree.left = {};
  }
}

insert(arvore, 10);
// console.log(arvore);
insert(arvore, 9);
// console.log(arvore);
insert(arvore, 11);
// console.log(arvore);
insert(arvore, 8);
// console.log(arvore);
insert(arvore, 7);
// console.log(arvore);
insert(arvore, 12);
// console.log(arvore);

function search(tree, value) {
  if (!tree.value || tree.value === value) {
    return tree.value;
  }
  if (value < tree.value) {
    return search(tree.left, value);
  }
  return search(tree.right, value);
}
search(arvore, 10)
console.log(search(arvore, 10))
console.log(search(arvore, 14))