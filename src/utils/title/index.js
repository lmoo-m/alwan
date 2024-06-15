const headTitle = (title) => {
    const TITLE = `Alwan.net | ${title === "" ? "Home" : title}`;
    document.title = TITLE;
};

export default headTitle;
