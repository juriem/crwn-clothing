import { takeLatest, call, put, all } from 'redux-saga/effects';

import { googleProvider, auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import UserActionTypes from "./user.types";
import {
    signInSuccess,
    signInFailure,
    signOutSuccess
} from "./user.actions";

/**
 * @param userAuth
 * @returns {Generator<<"CALL", CallEffectDescriptor>|<"PUT", PutEffectDescriptor<{payload: *, type: string}>>|*, void, ?>}
 */
function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch ( error ) {
        yield put(signInFailure(error.message));
    }
}

function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch ( error ) {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

function* emailAndPasswordSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch ( error ) {
        yield put(signInFailure(error.message))
    }
}

function* onEmailAndPasswordSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_AND_PASSWORD_SIGN_IN_START, emailAndPasswordSignIn)
}

function* signOutUser() {
    yield auth.signOut();
    yield put(signOutSuccess())
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser)
}


export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailAndPasswordSignInStart),
        call(onSignOutStart)
    ])
}