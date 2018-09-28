import dataService from '../shared/services/data'

const getLanding = async ({commit}) => {
    const data = await dataService.getLanding()
    commit('SET_LANDING', data.data);
}

const getAbout = async ({commit}) => {
    const data = await dataService.getAbout()
    commit('SET_ABOUT', data.data);
}

export default {
    getLanding,
    getAbout
}