import { createAction, handleActions } from "redux-actions";

const MODAL_TOGGLE = "modal/MODAL_TOGGLE";

export const modalToggle = createAction(MODAL_TOGGLE);

const initState = {
  modalVisible: false,
};

const modal = handleActions(
  {
    [MODAL_TOGGLE]: (state, action) => ({
      ...state,
      modalVisible: !state.modalVisible,
    }),
  },
  initState
);

export default modal;
