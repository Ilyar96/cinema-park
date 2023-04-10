import { RootState } from "@/store/store";

export const getAuthStatus = (state: RootState) => state.auth.status;
