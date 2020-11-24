import React from "react";
import ModalComponent from "../../components/modal/ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import ListAllComponent from "../../components/list/ListAllComponent";

const ListAllContainer = () => {
  const dispatch = useDispatch();

  return <ListAllComponent />;
};

export default ListAllContainer;
