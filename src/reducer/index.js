import { combineReducers } from "redux";
import { AddUsers } from "./AddUsers";
import { SetUser } from "./SetUser";

export const reducer=combineReducers({
  AddUsers,
  SetUser
})
