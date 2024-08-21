import { BadRequestException, ForbiddenException, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { SelectQueryBuilder } from 'typeorm';
import * as jwt from 'jsonwebtoken';


export abstract class BaseService {

    protected __getBadRequestError(message:string){
        throw new BadRequestException({message})
    }

    protected _getInternalServerError(message: string) {
        throw  new InternalServerErrorException({ message });
      }

      protected _getForbiddenError(message:  string) {
        throw new ForbiddenException({ message });
      }
     
      protected _getNotFoundError(message: string) {
        throw new NotFoundException({ message });
      }


      protected _decodeUserToken(authorization){

        try {
          let token = authorization.slice(7);
          
            const decodeToken = jwt.decode(token)

            return decodeToken;

        } catch (error) {
            throw  new InternalServerErrorException({ error});
        }
      }
}


