import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as plantAPI from '../lib/api/plant';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_PLANT,
  READ_PLANT_SUCCESS,
  READ_PLANT_FAILURE,
] = createRequestActionTypes('plant/READ_PLANT');
const UNLOAD_PLANT = 'plant/UNLOAD_PLANT'; // 포스트 페이지에서 벗어날 때 데이터 비우기


export const readPlant = createAction(READ_PLANT, user_id => user_id);
export const unloadPlant = createAction(UNLOAD_PLANT);

const readPlantSaga = createRequestSaga(READ_PLANT, plantAPI.readPlant);
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
    [UNLOAD_PLANT]: () => initialState,
  },
  initialState,
);

export default plant;