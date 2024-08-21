import axios from 'axios'
axios.defaults.withCredentials = true

class DataService {

    constructor() {
        this._baseUrl = process.env.REACT_APP_API_URL+"/api"
    }

    get(relativeUrl, config = {}) {
        try {
            return axios.get(this._generateUrl(relativeUrl), config)
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }

    post(relativeUrl, data = null, config = {}) {
        try {
            return axios.post(this._generateUrl(relativeUrl), data, config)
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }

    put(relativeUrl, data = null, config = {}) {
        try {
            return axios.put(this._generateUrl(relativeUrl), data, config)
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }

    patch(relativeUrl, data = null, config = {}) {
        try {
            return axios.patch(this._generateUrl(relativeUrl), data, config)
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }

    delete(relativeUrl, data = null, config = {}) {
        try {
            if (data)
                return axios.delete(this._generateUrl(relativeUrl), { data: data }, config)
            else return axios.delete(this._generateUrl(relativeUrl), config)
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }

    setCommonHeader(key, value) {
        axios.defaults.headers.common[key] = value
    }

    setBaseUrl(baseUrl) {
        this._baseUrl = baseUrl
    }

    _generateUrl(relativeUrl) {
        return `${this._baseUrl}/${relativeUrl}`
    }

}

export default DataService