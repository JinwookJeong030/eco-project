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

const [
  DELETE_PLANT,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_FAILURE,
] = createRequestActionTypes('plant/DELETE_PLANT');

const [
  POINT_UP_PLANT,
  POINT_UP_PLANT_SUCCESS,
  POINT_UP_PLANT_FAILURE,
] = createRequestActionTypes('plant/POINT_UP_PLANT');



const UNLOAD_PLANT = 'plant/UNLOAD_PLANT'; // 포스트 페이지에서 벗어날 때 데이터 비우기

const PLUS_POINT_PLANT= 'plant/PLUS_POINT_PLANT';



export const readGrowPlant = createAction(READ_GROW_PLANT, user_id => user_id);
export const readCompletePlant = createAction(READ_COMPLETE_PLANT, user_id => user_id);
export const unloadPlant = createAction(UNLOAD_PLANT);
export const plusPointPlant = createAction(PLUS_POINT_PLANT);
export const deletePlant  = createAction(DELETE_PLANT, pt_id => pt_id);
export const pointUpPlant  = createAction(POINT_UP_PLANT, ({growPlant, point}) => ({growPlant, point}));


const readGrowPlantSaga = createRequestSaga(READ_GROW_PLANT, plantAPI.readGrowPlant);
const readCompletePlantSaga = createRequestSaga(READ_COMPLETE_PLANT, plantAPI.readCompletePlant);
const deletePlantSaga = createRequestSaga(DELETE_PLANT, plantAPI.deletePlant);
const pointUpPlantSaga = createRequestSaga(POINT_UP_PLANT, plantAPI.pointUpPlant);

export function* plantSaga() {
  yield takeLatest(READ_GROW_PLANT, readGrowPlantSaga);
  yield takeLatest(READ_COMPLETE_PLANT, readCompletePlantSaga);
  yield takeLatest(DELETE_PLANT, deletePlantSaga);
  yield takeLatest(POINT_UP_PLANT, pointUpPlantSaga);
}

const initialState = {
  growPlant: null,
  completePlant: null,
  error: null,
  selectPlant: null,
  point:0,
  result:null,
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
    [DELETE_PLANT_SUCCESS]: (state, { payload: result }) => ({
      ...state,
      result:result
    }),
    [DELETE_PLANT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [POINT_UP_PLANT_SUCCESS]: (state, { payload: result }) => ({
      ...state,
      result:result
    }),
    [POINT_UP_PLANT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [PLUS_POINT_PLANT]: (state,{payload: plant}) => ({
      ...state,
      selectPlant: plant.selectPlant,
      point: plant.plantPoint,
    }),

    [UNLOAD_PLANT]: () => initialState,
  },
  initialState,
);

export default plant;