import React, { FC, useMemo } from "react";

/*
  setSelectedItems
  setIsSearchPanelMaximized
  setInitialSelectedItems
 */
interface State {
  displaySearchPanel: boolean;
  displayMaxSearchPanel: boolean;
  displaySelectPanel: boolean;
  displayOverlay: boolean;
  displayCompareSummary: boolean;
}

const initialState = {
  displaySearchPanel: false,
  displayMaxSearchPanel: false,
  displaySelectPanel: false,
  displayOverlay: false,
  displayCompareSummary: false,
};

type Action =
  | {
      type: "OPEN_SEARCH_PANEL";
    }
  | {
      type: "CLOSE_SEARCH_PANEL";
    }
  | {
      type: "MAXIMIZE_SEARCHPANEL";
    }
  | {
      type: "MINIMIZE_SEARCHPANEL";
    }
  | {
      type: "OPEN_SELECT_PANEL";
    }
  | {
      type: "CLOSE_SELECT_PANEL";
    }
  | {
      type: "OPEN_OVERLAY";
    }
  | {
      type: "CLOSE_OVERLAY";
    }
  | {
      type: "OPEN_COMPARE_SUMMARY";
    }
  | {
      type: "CLOSE_COMPARE_SUMMARY";
    };

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_SEARCH_PANEL": {
      return {
        ...state,
        displaySearchPanel: true,
      };
    }
    case "CLOSE_SEARCH_PANEL": {
      return {
        ...state,
        displaySearchPanel: false,
      };
    }
    case "MAXIMIZE_SEARCHPANEL": {
      return {
        ...state,
        displayMaxSearchPanel: true,
      };
    }
    case "MINIMIZE_SEARCHPANEL": {
      return {
        ...state,
        displayMaxSearchPanel: false,
      };
    }
    case "OPEN_SELECT_PANEL": {
      return {
        ...state,
        displaySelectPanel: true,
      };
    }
    case "CLOSE_SELECT_PANEL": {
      return {
        ...state,
        displaySelectPanel: false,
      };
    }
    case "OPEN_OVERLAY": {
      return {
        ...state,
        displayOverlay: true,
      };
    }
    case "CLOSE_OVERLAY": {
      return {
        ...state,
        displayOverlay: false,
      };
    }
    case "OPEN_COMPARE_SUMMARY": {
      return {
        ...state,
        displayCompareSummary: true,
      };
    }
    case "CLOSE_COMPARE_SUMMARY": {
      return {
        ...state,
        displayCompareSummary: false,
      };
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);
  const openSearchPanel = () => dispatch({ type: "OPEN_SEARCH_PANEL" });
  const closeSearchPanel = () => dispatch({ type: "CLOSE_SEARCH_PANEL" });
  const maximizeSearchPanel = () => dispatch({ type: "MAXIMIZE_SEARCHPANEL" });
  const minimizeSearchPanel = () => dispatch({ type: "MINIMIZE_SEARCHPANEL" });
  const toggleMaxSearchPanel = () =>
    state.displayMaxSearchPanel
      ? dispatch({ type: "MINIMIZE_SEARCHPANEL" })
      : dispatch({ type: "MAXIMIZE_SEARCHPANEL" });
  const closeSearchPanelIfPresent = () =>
    state.displaySearchPanel && dispatch({ type: "CLOSE_SEARCH_PANEL" });

  const openSelectPanel = () => dispatch({ type: "OPEN_SELECT_PANEL" });
  const closeSelectPanel = () => dispatch({ type: "CLOSE_SELECT_PANEL" });
  const closeSelectPanelIfPresent = () =>
    state.displaySearchPanel && dispatch({ type: "CLOSE_SELECT_PANEL" });

  const openOverlay = () => dispatch({ type: "OPEN_OVERLAY" });
  const closeOverlay = () => dispatch({ type: "CLOSE_OVERLAY" });

  const openCompareSummary = () => dispatch({ type: "OPEN_COMPARE_SUMMARY" });
  const closeCompareSummary = () => dispatch({ type: "CLOSE_COMPARE_SUMMARY" });

  const value = useMemo(
    () => ({
      ...state,
      openSearchPanel,
      closeSearchPanel,
      maximizeSearchPanel,
      minimizeSearchPanel,
      toggleMaxSearchPanel,
      closeSearchPanelIfPresent,
      openSelectPanel,
      closeSelectPanel,
      closeSelectPanelIfPresent,
      openOverlay,
      closeOverlay,
      openCompareSummary,
      closeCompareSummary,
    }),
    [state]
  );

  return (
    <UIContext.Provider value={value} {...props}>
      {props.children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
