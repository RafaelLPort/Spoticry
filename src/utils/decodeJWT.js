import { jwtDecode } from 'jwt-decode';

export const decodeJWT = (token) => {
  try {
    const decoded = jwtDecode(token); // Decodifica o token
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token JWT:', error);
    return null;
  }
};
