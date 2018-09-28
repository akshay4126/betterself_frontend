const aboutPage = (state) => {
    return state.about.length ? state.about[0].content : {}
};

const landingPage = (state) => {
    return state.landing
}

export default {
    aboutPage,
    landingPage
}