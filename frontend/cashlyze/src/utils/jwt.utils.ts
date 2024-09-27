import type { UserTypes } from "@/models/User.interface";
import { useJwtStore } from "@/stores/jwt";

export function roleChecker(roles: UserTypes[]): boolean {
  const JwtStore = useJwtStore();
  const userRoles = JwtStore.UserDetail.roles;
  for (const role of roles) {
    if (userRoles.includes(role)) {
      return true;
    }
  }
  return false;
}

export async function WaitUntilRefreshed(): Promise<void> {
  const JwtStore = useJwtStore();
  while (JwtStore.RefreshingToken) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

export function HasJwtExpired(): boolean {
  const JwtStore = useJwtStore();
  const exp = JwtStore.DecodedPayload.exp;
  const now = Math.floor(new Date().getTime() / 1000);
  if (exp <= now) {
    return true;
  }
  return false;
}
