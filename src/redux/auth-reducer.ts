import { authAPI } from '../redux/api.ts';

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_ERROR = 'LOGIN_ERROR';
const REGISTER_ERROR = 'REGISTER_ERROR';

export interface AuthState {
    userId: string | null;
    email: string | null;
    username: string | null;
    isAuth: boolean;
    error: string | null;
}

const initialState: AuthState = {
    userId: null,
    email: null,
    username: null,
    isAuth: false,
    error: null
};

interface SetAuthUserDataAction {
    type: typeof SET_USER_DATA;
    payload: {
        userId: string | null;
        email: string | null;
        username: string | null;
        isAuth: boolean;
    };
}

interface LoginErrorAction {
    type: typeof LOGIN_ERROR;
    error: string;
}

interface RegisterErrorAction {
    type: typeof REGISTER_ERROR;
    error: string;
}

type AuthActionTypes = SetAuthUserDataAction | LoginErrorAction | RegisterErrorAction;

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                error: null
            };
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export const setAuthUserData = (
    userId: string | null,
    email: string | null,
    username: string | null,
    isAuth: boolean
): SetAuthUserDataAction => ({
    type: SET_USER_DATA,
    payload: { userId, email, username, isAuth }
});

export const login = (email: string, password: string) => async (dispatch: any) => {
    try {
        const response = await authAPI.login(email, password);
        if (response && response.id) {
            const {
                id,
                username,
                email,
                avatar,
                subscriptions,
                subscribers
            } = response;

            dispatch(setAuthUserData(id, email, username, true));

            localStorage.setItem('currentUser', JSON.stringify({
                id,
                username,
                email,
                avatar: avatar || '',
                subscriptions: subscriptions || [],
                subscribers: subscribers || []
            }));
        } else {
            dispatch({ type: LOGIN_ERROR, error: 'User data not received' });
        }
    } catch (error) {
        dispatch({
            type: LOGIN_ERROR,
            error: error.message || 'Login failed'
        });
    }
};

export const register = (username: string, email: string, password: string) => async (dispatch: any) => {
    try {
        const response = await authAPI.register(username, email, password);
        if (response && response._id) {
            const { _id, avatar, subscriptions, subscribers } = response;

            dispatch(setAuthUserData(_id, email, username, true));

            localStorage.setItem('currentUser', JSON.stringify({
                id: _id,
                username,
                email,
                avatar: avatar || '',
                subscriptions: subscriptions || [],
                subscribers: subscribers || []
            }));
        } else {
            dispatch({ type: REGISTER_ERROR, error: 'Ошибка: данные пользователя не получены' });
        }
    } catch (error) {
        dispatch({
            type: REGISTER_ERROR,
            error: error.response?.data?.message || 'Произошла ошибка при регистрации пользователя'
        });
    }
};

export default authReducer;