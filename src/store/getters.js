const aboutPage = (state) => {
    return state.about.length ? state.about[0].content : {}
};

const landingPage = (state) => {
    return state.landing;
};

const firstScreenSubheader = (state) => {
    return state.landing.find(item => item.key === 'firstscreen-subheader').text
};

const firstScreenDesription = (state) => {
    return state.landing.find(item => item.key === 'firstscreen-description').text
};


const visionHeader = (state) => {
    return state.landing.find(item => item.key === 'vision-header').text
};

const visionDesc = (state) => {
    return state.landing.find(item => item.key === 'vision-description').text
};



const aboutHeader = (state) => {
    return state.landing.find(item => item.key === 'about-header').text
};

const aboutSubHeader = (state) => {
    return state.landing.find(item => item.key === 'about-subheader').text
};

const aboutDesc = (state) => {
    return state.landing.find(item => item.key === 'about-description').text
};


const feateure1Header = (state) => {
    return state.landing.find(item => item.key === 'feature1-header').text
};
const feateure1Desc = (state) => {
    return state.landing.find(item => item.key === 'feature1-description').text
};
const feateure2Header = (state) => {
    return state.landing.find(item => item.key === 'feature2-header').text
};

const feateure2Desc = (state) => {
    return state.landing.find(item => item.key === 'feature2-description').text
};
const feateure3Header = (state) => {
    return state.landing.find(item => item.key === 'feature3-header').text
};

const feateure3Desc = (state) => {
    return state.landing.find(item => item.key === 'feature3-description').text
};

const mainPageTitle = (state) => {
    return state.landing.find(item => item.key === 'seo-main-title').text
}

const mainPageDesc = (state) => {
    return state.landing.find(item => item.key === 'seo-main-description').text
}

const aboutPageTitle = (state) => {
    return state.landing.find(item => item.key === 'seo-about-title').text
}

const aboutPageDesc = (state) => {
    return state.landing.find(item => item.key === 'seo-about-description').text
}

const aboutH1 = (state) => {
    return state.landing.find(item => item.key === 'seo-about-h1').text
}


export default {
    aboutPage,
    landingPage,
    firstScreenSubheader,
    firstScreenDesription,
    visionHeader,
    visionDesc,
    aboutHeader,
    aboutSubHeader,
    aboutDesc,
    feateure1Header,
    feateure1Desc,
    feateure2Header,
    feateure2Desc,
    feateure3Header,
    feateure3Desc,
    mainPageTitle,
    mainPageDesc,
    aboutPageTitle,
    aboutPageDesc,
    aboutH1
}