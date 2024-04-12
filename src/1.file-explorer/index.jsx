import React, { useState } from "react";
import { Folder } from "./folder";
import { explorer } from "./data";
import { useTraverseTree } from "./use-traverse-tree";

export const FileExplorer = ({ data }) => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    console.log(finalTree);
    setExplorerData(finalTree);
  };

  return (
    <>
      <Folder data={explorer} handleInsertNode={handleInsertNode} level={1} />
    </>
  );
};
