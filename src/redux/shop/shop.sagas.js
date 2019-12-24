import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsFail, fetchCollectionsSuccess } from "./shop.actions";

function* fetchCollectionStartAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshop
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch ( error ) {
        yield put(fetchCollectionsFail(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionStartAsync);
}