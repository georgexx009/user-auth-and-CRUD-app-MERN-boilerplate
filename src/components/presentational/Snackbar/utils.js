export const unMountStyle = (setFunc) => {
  setFunc({
    opacity: 0,
    animation: "slide-down 1s ease",
  });
};

export const mountStyle = (setFunc) => {
  setFunc({
    opacity: 1,
    animation: "slide-up 1s ease",
  });
};

export const animationEnd = (props, setShow) => {
  if (!props.mounted) {
    setShow(false);
  }
};
