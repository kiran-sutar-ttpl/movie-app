import AppDataService from './AppDataService'
import { headerContentWithOutAuthorization } from './utils/constant'


export default class LoginService {

 
    static async postLoginUserWithCredentials(body) {
        return await AppDataService.post(`auth/login`, body, headerContentWithOutAuthorization)
    }

}