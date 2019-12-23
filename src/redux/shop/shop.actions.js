import ShopActionTypes from "./shop.types";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";

export const updateCollections = (collections) => (
    {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collections
    }
);

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFail = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {

    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get()
            .then(snapshot => {
                const collections = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collections));
            })
            .catch(error => dispatch(fetchCollectionsFail(error.message)))
        ;
    }
};


