import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {JsonPlaceHolderReducer} from "../reducer/JsonPlaceHolderReducer";
import thunk, { ThunkAction } from "redux-thunk";

let RootReducer=combineReducers({
    jphReducer:JsonPlaceHolderReducer
})

export type RootReducerType= ReturnType<typeof RootReducer>

export let store=createStore(RootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
    >