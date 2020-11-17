import React, { useState, useRef } from "react";
import ModalComponent from "../../components/modal/ModalComponent";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../modules/modal";

const ModalContainer = () => {
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  const dispatch = useDispatch();
  const { modalVisible } = useSelector(({ modal }) => ({
    modalVisible: modal.modalVisible,
  }));

  const inputRef = useRef();

  const handleClick = (e) => {
    inputRef.click();
  };

  const onToggleModal = () => {
    dispatch(modalToggle());
  };

  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      console.log(base64);
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
      console.log(event.target.files[0]);
    }
  };

  return modalVisible ? (
    <ModalComponent
      imgBase64={imgBase64}
      handleChangeFile={handleChangeFile}
      onToggleModal={onToggleModal}
    />
  ) : (
    <></>
  );
};

export default ModalContainer;
