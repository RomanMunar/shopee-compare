import React, { ReactElement, useState } from "react";
import { ContainedRoute, Title } from "../Bookmarks/Bookmarks.styles";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Icon } from "../components/Icon";
import { ToolbarButton } from "../components/Toolbar";
import { Toolbar } from "../components/Toolbar/Styles";
import { SellerLocation } from "../interfaces";
import { MenuTitle } from "../Search/Compare/SelectionPanel/SelectionPanel.styles";
import toast from "../shared/hooks/toast";
import {
  Action,
  defaultSettings,
  getSettings,
  resetSettings,
  setSettings,
} from "../shared/utils/localStorage";
import { Label, SettingsContent } from "./Settings.styles";

const Settings = (): ReactElement => {
  const locations: SellerLocation[] = [
    "Metro Manila",
    "South Luzon",
    "North Luzon",
    "Visayas",
    "Mindanao",
    "-2",
  ];
  const actions: Action[] = [
    "DndInNoLayout",
    "addRow",
    "autoPin",
    "blockSeller",
    "expandBookmarks",
  ];

  const settings = getSettings();
  const [settingsSession, setSettingsSession] = useState(settings);
  const [prefSort, setPrefSort] = useState(
    settingsSession.preference.searchSort
  );
  const [prefLayout, setPrefLayout] = useState(
    settingsSession.preference.layout
  );
  // all philippines NCR overseas
  const [prefLocation, setPrefLocation] = useState<SellerLocation[]>(
    settingsSession.preference.sellerLocation
  );
  const [prefActions, setPrefActions] = useState(settingsSession.action);
  const onSubmit = () => {
    toast.show({
      type: "success",
      title: "Saved!",
      message: "Your new settings have been saved",
    });
    setSettings({
      preference: {
        searchSort: prefSort,
        sellerLocation: prefLocation,
        layout: prefLayout,
      },
      action: prefActions,
    });
    setSettingsSession({
      preference: {
        searchSort: prefSort,
        sellerLocation: prefLocation,
        layout: prefLayout,
      },
      action: prefActions,
    });
  };
  const onUndo = () => {
    setPrefSort(settings.preference.searchSort);
    setPrefLocation(settings.preference.sellerLocation);
    setPrefLayout(settings.preference.layout);
    setPrefActions(settings.action);
    toast.show({
      type: "primary",
      message: "Reverted settings",
    });
  };
  const onReset = () => {
    setPrefSort(defaultSettings.preference.searchSort);
    setPrefLocation(defaultSettings.preference.sellerLocation);
    setPrefLayout(defaultSettings.preference.layout);
    setPrefActions(defaultSettings.action);
    resetSettings();
    toast.show({
      type: "primary",
      message: "Saved to default settings",
    });
  };
  return (
    <Container>
      <ContainedRoute>
        <Flex style={{ width: "48%" }} justify='space-between' dir='row'>
          <Title>Settings</Title>
          <Toolbar withoutMargin place='default'>
            <ToolbarButton
              noTransform
              tooltipPlace='bottom'
              name='Save Changes'
              onClick={() => onSubmit()}
            >
              <Icon type='Save' size={16} />
              <span>Save</span>
            </ToolbarButton>
            <ToolbarButton
              noTransform
              tooltipPlace='bottom'
              onClick={() => onUndo()}
              name='Undo Changes'
            >
              <Icon type='Undo' size={16} />
              <span>Undo</span>
            </ToolbarButton>
            <ToolbarButton
              noTransform
              tooltipPlace='bottom'
              onClick={() => onReset()}
              name='Back to default'
            >
              <Icon type='Reset' size={16} />
              <span>Reset</span>
            </ToolbarButton>
          </Toolbar>
        </Flex>
        <div
          style={{
            width: "70%",
            marginTop: "20px",
            overflow: "auto",
            height: "90vh",
          }}
        >
          <Flex>
            <form>
              <Flex>
                <div style={{ margin: "0 25px 0 0" }}>
                  <MenuTitle>Preferred Defaults</MenuTitle>
                  <Flex padding='5px 0 25px 25px' dir='column'>
                    <div>
                      <label htmlFor='defaultSort'>
                        Preferred default sort for searching
                      </label>
                      <SettingsContent>
                        <div>
                          <div onClick={() => setPrefSort("latest")}>
                            <input
                              type='checkbox'
                              checked={prefSort === "latest"}
                              name='Relevance'
                            />
                            <Label
                              changed={
                                "latest" ===
                                  settingsSession.preference.searchSort &&
                                prefSort !== "latest"
                              }
                              htmlFor='Relevance'
                            >
                              By Latest
                            </Label>
                          </div>
                          <div onClick={() => setPrefSort("sales")}>
                            <input
                              type='checkbox'
                              checked={prefSort === "sales"}
                              name='Sales'
                            />
                            <Label
                              changed={
                                "sales" ===
                                  settingsSession.preference.searchSort &&
                                prefSort !== "sales"
                              }
                              htmlFor='Sales'
                            >
                              By Sales
                            </Label>
                          </div>
                          <div onClick={() => setPrefSort("price")}>
                            <input
                              type='checkbox'
                              checked={prefSort === "price"}
                              name='Price'
                            />
                            <Label
                              changed={
                                "price" ===
                                  settingsSession.preference.searchSort &&
                                prefSort !== "price"
                              }
                              htmlFor='Price'
                            >
                              By Price
                            </Label>
                          </div>
                        </div>
                      </SettingsContent>
                    </div>
                    <div>
                      <label htmlFor='defaultLayout'>
                        Preferred default compare layout
                      </label>
                      <SettingsContent>
                        <div>
                          <div onClick={() => setPrefLayout("main")}>
                            <input
                              type='checkbox'
                              checked={prefLayout === "main"}
                              name='Main'
                            />
                            <Label
                              changed={
                                prefLayout !== "main" &&
                                settingsSession.preference.layout === "main"
                              }
                              htmlFor='Main'
                            >
                              Main Layout
                            </Label>
                          </div>
                          <div onClick={() => setPrefLayout("double")}>
                            <input
                              type='checkbox'
                              checked={prefLayout === "double"}
                              name='Doubled'
                            />
                            <Label
                              changed={
                                prefLayout !== "double" &&
                                settingsSession.preference.layout === "double"
                              }
                              htmlFor='Doubled'
                            >
                              Doubled Layout
                            </Label>
                          </div>
                          <div onClick={() => setPrefLayout("none")}>
                            <input
                              type='checkbox'
                              checked={prefLayout === "none"}
                              name='No Layout'
                            />
                            <Label
                              changed={
                                prefLayout !== "none" &&
                                settingsSession.preference.layout === "none"
                              }
                              htmlFor='No Layout'
                            >
                              No Layout
                            </Label>
                          </div>
                        </div>
                      </SettingsContent>
                    </div>
                    <div>
                      <label htmlFor='Seller Location'>
                        Preferred Seller Location
                      </label>
                      <SettingsContent>
                        {locations.map((l, index) => (
                          <div
                            onClick={() => {
                              setPrefLocation((prev) =>
                                prev.includes(l)
                                  ? prev.filter((p) => p !== l)
                                  : [...prev, l]
                              );
                            }}
                          >
                            <input
                              type='checkbox'
                              checked={prefLocation.includes(l)}
                              name='All location'
                            />
                            <Label
                              changed={
                                (prefLocation.includes(l) &&
                                  !settingsSession.preference.sellerLocation.includes(
                                    l
                                  )) ||
                                (!prefLocation.includes(l) &&
                                  settingsSession.preference.sellerLocation.includes(
                                    l
                                  ))
                              }
                              htmlFor='sellerLocation'
                            >
                              {l === "-2" ? "Oveseas" : l}
                            </Label>
                          </div>
                        ))}
                      </SettingsContent>
                    </div>
                  </Flex>
                </div>
                <div style={{ margin: "0 25px 0 0" }}>
                  <MenuTitle>Actions</MenuTitle>
                  <Flex padding='5px 0 25px 25px' dir='column'>
                    {actions.map((a, index) => (
                      <div>
                        <input
                          type='checkbox'
                          name='Enable block a seller action'
                          checked={prefActions.includes(a)}
                          onClick={() => {
                            setPrefActions((prev) =>
                              prev.includes(a)
                                ? prev.filter((p) => p !== a)
                                : [...prev, a]
                            );
                          }}
                        />
                        <Label
                          changed={
                            (prefActions.includes(a) &&
                              !settingsSession.action.includes(a)) ||
                            (!prefActions.includes(a) &&
                              settingsSession.action.includes(a))
                          }
                          htmlFor='blockAction'
                        >
                          {a.replace(/([A-Z])/g, " $1").trim()}
                        </Label>
                      </div>
                    ))}
                  </Flex>
                </div>
              </Flex>
            </form>
          </Flex>
        </div>
      </ContainedRoute>
    </Container>
  );
};

export default Settings;
