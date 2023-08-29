import jwtDecode from 'jwt-decode';
export const JWTdecoder = (token) => {
    
   const decodedToken = jwtDecode(token);
   return decodedToken;
}
