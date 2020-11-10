import React from "react";
import ModalComponent from "../../components/modal/ModalComponent";
import { useDispatch, useSelector } from "react-redux";

const ModalContainer = () => {
  const dispatch = useDispatch();
  const { modalVisible } = useSelector(({ modal }) => ({
    modalVisible: modal.modalVisible,
  }));

  return !modalVisible ? <ModalComponent /> : <></>;
};

export default ModalContainer;
