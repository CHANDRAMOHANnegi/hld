export const useTraverseTree = () => {
  const insertNode = (data, nodeId, item, isFolder) => {
    console.log({
      data,
      nodeId,
      item,
      isFolder,
    });

    if (data.id === nodeId && data.isFolder) {
      data.items.unshift({
        id: new Date().getTime(),
        isFolder,
        name: item,
        items: [],
      });
      return data;
    } else {
      const items = [];
      for (let i = 0; i < data.items.length; i++) {
        items.push(insertNode(data.items[i], nodeId, item, isFolder));
      }
      return { ...data, items };
    }
  };
  const deleteNode = () => {};
  const updateNode = () => {};

  return {
    insertNode,
    deleteNode,
    updateNode,
  };
};
