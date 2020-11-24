import React from "react";
import ModalComponent from "../../components/modal/ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import ListMyComponent from "../../components/list/ListMyComponent";

const ListMyContainer = () => {
  const dispatch = useDispatch();

  return <ListMyComponent />;
};

export default ListMyContainer;
