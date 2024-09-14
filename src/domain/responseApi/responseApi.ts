
export class ResponseApi {
    constructor(
      public readonly status: boolean,
      public readonly msg: string,
      public readonly value: any
    ) {}


    static success(value: any, message: string): ResponseApi {
        return new ResponseApi(true, message, value);
    }

    static error(message: string): ResponseApi {
        return new ResponseApi(false, message, null);
    } 
}  