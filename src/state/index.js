import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import workflowExecutionActiveNode from "./workflowExecutionActiveNode";
import activity from "./activity";
import contactJoe from "./contactJoe";
import navbarLinks from "./navbarLinks";
import privacyStatement from "./privacyStatement";
import reportBug from "./reportBug";
import tasks from "./tasks";
import teams from "./teams";
import user from "./user";
import workflow from "./workflow";
import workflowExecution from "./workflowExecution";
import workflowRevision from "./workflowRevision";

const rootReducer = combineReducers({
  routing: routerReducer,
  workflowExecutionActiveNode,
  activity,
  contactJoe,
  navbarLinks,
  privacyStatement,
  reportBug,
  tasks,
  teams,
  user,
  workflow,
  workflowExecution,
  workflowRevision
});

export default rootReducer;
