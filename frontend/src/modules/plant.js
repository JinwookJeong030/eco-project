import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/plant';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_PLANT,
  READ_PLANT_SUCCESS,
  READ_PLANT_FAILURE,
] = createRequestActionTypes('plant/READ_PLANT');
const UNLOAD_POST = 'plant/UNLOAD_PLANT'; // 포스트 페이지에서 벗어날 때 데이터 비우기


export const readPost = createAction(READ_PLANT, id => id);
export const unloadPost = createAction(UNLOAD_POST);

const readPlantSaga = createRequestSaga(READ_PLANT, postsAPI.readPlant);
export function* plantSaga() {
  yield takeLatest(READ_PLANT, readPlantSaga);
}

const initialState = {
  plant: null,
  error: null,
};

const plant = handleActions(
  {
    [READ_PLANT_SUCCESS]: (state, { payload: plant }) => ({
      ...state,
      plant: plant.result.plant,
    }),
    [READ_PLANT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_POST]: () => initialState,
  },
  initialState,
);

export default plant;