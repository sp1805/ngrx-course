import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const SelectAuthState = createFeatureSelector<AuthState>(
    "auth"
);

export const isLoggedIn = createSelector(
    SelectAuthState,
    (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    (loggedIn) => !loggedIn
);