/**
 * Handles a hide action.
 * @param state - previous state.
 * @param modalName - name of modal.
 * @return Next state.
 */
const handleHide = (state: any, { payload: modalName }: any) => {

  return {
    ...state,
    [modalName]: {
      ...state[modalName],
      open: false,
    },
  };
};

// Export.
export default handleHide;
