import history from "../history";
import jsonServer from "../apis/jsonServer";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch,getState) => {
  const {userId} = getState().auth
  const response = await jsonServer.post("/streams", {...formValues, userId});

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push('/')
};
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await jsonServer.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await jsonServer.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await jsonServer.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await jsonServer.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
