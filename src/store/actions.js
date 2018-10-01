import dataService from '../shared/services/data'

const getLanding = async ({commit}) => {
    const data = await dataService.getLanding()
    commit('SET_LANDING', data.data);
}

const initApp = ({dispatch, state}) => {
    if (!Object.keys(state.landing).length && !state.about.length) {
        return Promise.all([
            dispatch('getLanding'),
            dispatch('getAbout')
        ])
    }
    else if (Object.keys(state.landing).length) {
        dispatch('getAbout')
    } else if (state.about.length) {
        dispatch('getLanding')
    }
}

const getAbout = async ({commit}) => {
    const data = await dataService.getAbout()
    commit('SET_ABOUT', data.data);
}

export default {
    getLanding,
    getAbout,
    initApp
}