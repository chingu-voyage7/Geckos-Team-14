import { HANDLE_DRAG_AND_DROP } from "./types";

export const handleDragAndDrop = (destination, source, draggableId, type) => {
  return {
    type: HANDLE_DRAG_AND_DROP,
    payload: {
      destination,
      source,
      draggableId,
      type
    }
  };
};
