import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import reducer from '../redux/reducers'

export const store = configureStore({
    reducer,
    middleware: (buildGetDefaultMiddleware)=> buildGetDefaultMiddleware().concat(thunk)
})