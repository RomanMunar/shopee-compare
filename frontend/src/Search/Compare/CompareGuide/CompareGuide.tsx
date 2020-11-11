import React, { useEffect, useRef } from "react";
import Flex from "../../../components/Flex";
import { ToolbarButton } from "../../../components/Toolbar";
import { useUI } from "../../../shared/contexts/useUIContext";
import useOnOutsideClick from "../../../shared/hooks/useOnOutsideClick";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogSection,
  DialogHeading,
  DialogTitle,
  SubText,
} from "../../../components/Dialog/Dialog.styles";
import { DialogWrapper } from "../CompareSummary/CompareSummary.styles";
import { DialogHeader } from "../../../components/Dialog";
import { useKeyPress } from "../../../shared/hooks/useKeyPressed";

const CompareGuide = () => {
  const { closeCompareGuide, openOverlay, closeOverlay } = useUI();
  const $compareGuideRef = useRef<HTMLDivElement>(null);
  const keyPressed = useKeyPress("Escape");
  useEffect(() => {
    if (keyPressed) {
      handleClose();
    }
  }, [keyPressed]);
  useOnOutsideClick($compareGuideRef, () => {
    handleClose();
  });
  useEffect(() => {
    openOverlay();
  }, []);
  const handleClose = () => {
    closeOverlay();
    closeCompareGuide();
  };
  return (
    <DialogWrapper guide='compare' ref={$compareGuideRef}>
      <Dialog>
        <DialogHeader handleClose={handleClose}>Compare Guide</DialogHeader>
        <DialogBody>
          <DialogSection>
            <DialogHeading>How to use</DialogHeading>
            <DialogContent>
              Drag an item from the Selected Items Panel to the Compare Panel to
              replace an item in the compare panel. Your goal here is to narrow
              down your options and pick the best item there is. . Gambate
              Kudasai 👋👋
            </DialogContent>
          </DialogSection>
          <DialogSection>
            <Flex dir='column'>
              <div>
                <DialogHeading>Layouts</DialogHeading>
                <SubText style={{ display: "inline" }}>
                  The options are placed at the top center of the compare panel
                </SubText>
              </div>
              <DialogContent>
                <DialogHeading>Main</DialogHeading>
                <DialogContent>
                  This layout only previews a single item, drag an item form
                  selected items panel to replace the currently previewed item.
                </DialogContent>
                <DialogHeading>Double</DialogHeading>
                <DialogContent>
                  This is the default layout, but is configurable trough the
                  settings. Previews two items, first item can;t be replaced,
                  but is draggable back to the selected items panel.
                </DialogContent>
                <DialogHeading>No Layout</DialogHeading>
                <DialogContent>
                  This layout previews all selected items. Useful if you want to
                  quickly browse all items to remove obviously inferior items
                  before proceeding to compare them side by side.
                </DialogContent>
              </DialogContent>
            </Flex>
          </DialogSection>
          <DialogSection>
            <Flex align='center' justify='center' dir='row-reverse'>
              <div>
                <DialogHeading>Recommendation</DialogHeading>
                <DialogContent>
                  Assuming that you're on a doubled layout, my recommended flow
                  is to compare the second item to the first item then remove
                  the item that you find inferior, then that removed item wil l
                  automatically be replaced by the first item from the selected
                  items panel, repeat this process till you're only left with
                  one item.
                </DialogContent>
              </div>
              <div>
                <DialogHeading>Notes</DialogHeading>
                <DialogContent>
                  Drag items from the left panel called Search Panel to the
                  right panel called Select Panel and click compare to begin
                  comparing those dragged items.
                </DialogContent>
              </div>
            </Flex>
          </DialogSection>
        </DialogBody>
      </Dialog>
    </DialogWrapper>
  );
};

export default CompareGuide;
