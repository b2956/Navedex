export default (setTouchOpacity) => {
    setTouchOpacity(true);

    setTimeout(() => {
        setTouchOpacity(false);
    }, 100);
}