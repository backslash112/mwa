const find = target => {
  return tree => {
    console.log(tree.name);
    if (tree.files.includes(target)) {
      return true;
    }

    while (tree.subFolders.length > 0) {
      if (find(target)(tree.subFolders.pop())) {
        return true;
      }
    }
    return false;
  }
}
