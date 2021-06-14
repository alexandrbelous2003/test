/**
 *@param login        // Имя пользователя
 *@param password     // Пароль пользователя
 */
export interface ISignInPayload {
  login: string;
  password: string;
}

/**
 * @param accessToken  // TODO Добавить описание
 */
export interface ISignInResponse {
  accessToken: string;
}
