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
  DialogSubheading,
  DialogTitle,
  SubText,
} from "../../Help";
import { DialogWrapper } from "../CompareSummary/CompareSummary.styles";

const CompareGuide = () => {
  const { closeCompareGuide, openOverlay, closeOverlay } = useUI();
  const $compareGuideRef = useRef<HTMLDivElement>(null);
  useOnOutsideClick($compareGuideRef, () => {
    closeOverlay();
    closeCompareGuide();
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
        <Flex padding='0 20px' align='center' justify='space-between'>
          <DialogTitle>Compare Guide</DialogTitle>
          <ToolbarButton
            size={24}
            name='Close'
            tooltipPlace='bottom'
            onClick={handleClose}
            icon='Close'
          />
        </Flex>
        <DialogBody>
          <DialogSection>
            <Flex dir='column'>
              <DialogSubheading>How to use</DialogSubheading>
              <DialogContent>
                Drag an item from the Selected Items Panel to the Compare Panel
                to replace an item in the compare panel. Your goal here is to
                narrow down your options and pick the best item there is. .
                Gambate Kudasai 👋👋
              </DialogContent>
            </Flex>
          </DialogSection>
          <DialogSection>
            <Flex dir='column'>
              <div>
                <DialogSubheading>Layouts</DialogSubheading>
                <SubText style={{ display: "inline" }}>
                  The options are placed at the top center of the compare panel
                </SubText>
              </div>
              <DialogContent>
                <DialogSubheading>Main</DialogSubheading>
                <DialogContent>
                  This layout only previews a single item, drag an item form
                  selected items panel to replace the currently previewed item.
                </DialogContent>
                <DialogSubheading>Double</DialogSubheading>
                <DialogContent>
                  This is the default layout, but is configurable trough the
                  settings. Previews two items, first item can;t be replaced,
                  but is draggable back to the selected items panel.
                </DialogContent>
                <DialogSubheading>No Layout</DialogSubheading>
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
                <DialogSubheading>Recommendation</DialogSubheading>
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
                <DialogSubheading>Notes</DialogSubheading>
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
