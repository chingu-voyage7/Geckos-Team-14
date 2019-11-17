import { ADD_LIST, DELETE_LIST, HANDLE_LIST_TITLE, COPY_LIST } from "./types";

export const addList = () => {
  return {
    type: ADD_LIST
  };
};

export const deleteList = id => {
  return {
    type: DELETE_LIST,
    id
  };
};

export const handleListTitleChange = (id, titleText) => {
  return {
    type: HANDLE_LIST_TITLE,
    id,
    titleText
  };
};

export const copyList = (idToCopy, title = "") => {
  return {
    type: COPY_LIST,
    idToCopy,
    title
  };
};
