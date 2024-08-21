/* eslint-disable no-useless-constructor */
import DataService from './utils/dataServices/DataServices'

class _AppDataService extends DataService {
    constructor() {
        super()
    }
}

const AppDataService = new _AppDataService()
export default AppDataService