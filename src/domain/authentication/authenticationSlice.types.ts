export type UserInfo = {
  fullname: string;
  age: number;
};

export interface AuthenticationState {
  isConnected: boolean;
  userInfo: UserInfo | undefined;
}
