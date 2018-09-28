import {api} from './api'

const getLanding = () => {
    return api.get('common/web_content/blocks/')
}

const getAbout = () => {
    return api.get('common/web_content/editor/?key=about')
}

const subscribe = (email) => {
    return api.post('user/subscribe_list/', {email: email})
}

const sendForm = (form) => {
    return api.post('user/contact_form/', form)
}

export default {
    getLanding,
    getAbout,
    subscribe,
    sendForm
}

