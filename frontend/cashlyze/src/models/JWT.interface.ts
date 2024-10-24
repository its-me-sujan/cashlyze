import type { UserDetail } from "./User.interface";

export interface UserLoginInfo {
  username: string;
  password: string;
}

export interface JWT {
  access: string;
  refresh?: string;
}

export interface DecodedJWTPayload {
  exp: number;
  jti: string;
  token_type: string;
  user_id: number;
  username: string;
  userDetail: UserDetail;
}
