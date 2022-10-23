import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as plantAPI from '../lib/api/plant';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_GROW_PLANT,
  READ_GROW_PLANT_SUCCESS,
  READ_GROW_PLANT_FAILURE,
] = createRequestActionTypes('plant/READ_PLANT');

const [
  READ_COMPLETE_PLANT,
  READ_COMPLETE_PLANT_SUCCESS,
  READ_COMPLETE_PLANT_FAILURE,
] = createRequestActionTypes('plant/READ_COMPLETE_PLANT');

const UNLOAD_PLANT = 'plant/UNLOAD_PLANT'; // 포스트 페이지에서 벗어날 때 데이터 비우기

const PLUS_POINT_PLANT= 'plant/PLUS_POINT_PLANT';



export const readGrowPlant = createAction(READ_GROW_PLANT, user_id => user_id);
export const readCompletePlant = createAction(READ_COMPLETE_PLANT, user_id => user_id);
export const unloadPlant = createAction(UNLOAD_PLANT);
export const plusPointPlant = createAction(PLUS_POINT_PLANT);

const readGrowPlantSaga = createRequestSaga(READ_GROW_PLANT, plantAPI.readGrowPlant);
const readCompletePlantSaga = createRequestSaga(READ_COMPLETE_PLANT, plantAPI.readCompletePlant);
export function* plantSaga() {
  yield takeLatest(READ_GROW_PLANT, readGrowPlantSaga);
  yield takeLatest(READ_COMPLETE_PLANT, readCompletePlantSaga);
}

const initialState = {
  growPlant: null,
  completePlant: null,
  error: null,
  selectPlant: null,
  plantPoint:0,
};

const plant = handleActions(
  {
    [READ_GROW_PLANT_SUCCESS]: (state, { payload: plant }) => ({
      ...state,
      growPlant: plant.result.plant,
    }),
    [READ_GROW_PLANT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [READ_COMPLETE_PLANT_SUCCESS]: (state, { payload: plant }) => ({
      ...state,
      completePlant: plant.result.plant,
    }),
    [READ_COMPLETE_PLANT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [PLUS_POINT_PLANT]: (state,{payload: plant}) => ({
      ...state,
      selectPlant: plant.selectPlant,
      plantPoint: plant.plantPoint+1,
    }),

    [UNLOAD_PLANT]: () => initialState,
  },
  initialState,
);

export default plant;