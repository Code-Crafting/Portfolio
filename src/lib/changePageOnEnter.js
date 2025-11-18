export const changePageOnEnter = (e, id, setterFnc) => {
  if (e.key === "Enter" || e.key === " ") {
    setterFnc(id);
  }
};
