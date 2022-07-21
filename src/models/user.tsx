export default interface UserModel {
    id?: any | null,
    username?: string | null,
    email?: string,
    password?: string,
    password2?: string,
    first_name?: string,
    last_name?: string
    // roles?: Array<string>
  }