const addWin = () => {
  const oldCount = Number.parseInt(localStorage.getItem("winsCounter"));
  localStorage.setItem("winsCounter", oldCount + 1);
};

export default addWin;
