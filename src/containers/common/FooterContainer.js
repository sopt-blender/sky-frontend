import React from "react";
import Footer from "../../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../modal/ModalContainer";
import { modalToggle } from "../../modules/modal";

const FooterContainer = () => {
  const dispatch = useDispatch();

  const { modalVisible } = useSelector(({ modal }) => ({
    modalVisible: modal.modalVisible,
  }));

  console.log(modalVisible);

  const onToggleModal = () => {
    dispatch(modalToggle());
  };

  return (
    <>
      <Footer onToggleModal={onToggleModal} />
    </>
  );
};

export default FooterContainer;
