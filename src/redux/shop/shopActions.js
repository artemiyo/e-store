import shopTypes from "./shopTypes";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const fetchCollectionsStart = () => dispatch => {
  dispatch({
    type: shopTypes.FETCH_COLLECTIONS_START
  });
};

const fetchCollectionsSuccess = collectionsMap => dispatch => {
  dispatch({
    type: shopTypes.FETCH_COLLETCTIONS_SUCCESS,
    payload: collectionsMap
  });
};

const fetchCollectionsFailure = errorMessage => dispatch => {
  dispatch({
    type: shopTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  });
};

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");

  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error)));
};
