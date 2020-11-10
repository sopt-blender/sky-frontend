import { createAction, handleActions } from "redux-actions";

const MODAL_TOGGLE = "modal/MODAL_TOGGLE";

export const modalToggle = createAction(
  MODAL_TOGGLE,
  (modalVisible) => modalVisible
);

modalToggle(true);

const initState = {
  modalVisible: false,
};

const modal = handleActions(
  {
    [MODAL_TOGGLE]: (state, action) => ({
      ...state,
      modalVisible: !action.payload.modalVisible,
    }),
  },
  initState
);

export default modal;
