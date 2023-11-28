// src/store/actions/auth.js
import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction('auth/loginSuccess');
export const registerSuccess = createAction('auth/registerSuccess');
export const loginFailure = createAction('auth/loginFailure');
export const registerFailure = createAction('auth/registerFailure');
