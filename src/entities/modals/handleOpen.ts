/**
 * Handles a open action.
 * @param state - previous state.
 * @param modalName - name of modal.
 * @return Next state.
 */
const handleOpen = (state: any, { payload: { modalName, data } }: any) => {

  return {
    ...state,
    [modalName]: {
      data,
      open: true,
    },
  };
};

// Export.
export default handleOpen;
