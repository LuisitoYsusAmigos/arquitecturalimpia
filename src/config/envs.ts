import 'dotenv/config';
import { get } from 'env-var' 


export const envs = {
    PORT: 3000
    //PORT: get('PORT').required().asPortNumber(),
}
