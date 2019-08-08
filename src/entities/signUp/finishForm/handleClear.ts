/**
 * Handles a clear action.
 * @param state - previous state.
 * @return Next state.
 */
const handleClear = (state: any) => {
  const signUp = {};

  Object.keys(state).forEach(key => signUp[key] = {});

  return {
    ...signUp,
  };
};

// Export.
export default handleClear;
