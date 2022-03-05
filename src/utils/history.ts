import { store } from "app/store";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";



const {createReduxHistory} = createReduxHistoryContext({ history: createBrowserHistory() });

export const history = createReduxHistory(store);

