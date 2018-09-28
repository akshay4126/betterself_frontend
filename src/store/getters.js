const aboutPage = (state) => {
    return state.about ? state.about[0].content : {}
};

export default {
    aboutPage
}