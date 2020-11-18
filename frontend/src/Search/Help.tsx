import React, { useEffect, useRef, useState } from "react";
import {
  DialogHeader,
  IconDescription,
} from "../components/Dialog";
import {
  ContentDescription,
  Dialog,
  DialogBody,
  DialogComponent,
  DialogContent,
  DialogHeading,
  DialogSection,
  DialogWrapper,
  SubText,
} from "../components/Dialog/Dialog.styles";
import Flex from "../components/Flex";
import GridStats from "../components/GridStats";
import { Icon } from "../components/Icon";
import { ToolbarButton } from "../components/Toolbar";
import { Toolbar } from "../components/Toolbar/Styles";
import { useUI } from "../shared/contexts/useUIContext";
import { useKeyPress } from "../shared/hooks/useKeyPressed";
import useOnOutsideClick from "../shared/hooks/useOnOutsideClick";
import { ResultItemTitle, RItem } from "./Results/ResultItem/ResultItem.stlyes";
import { ResultItemImage } from "./Results/ResultItemImage";

const Help = () => {
  const [selected, setSelected] = useState(false);
  const { closeHelp, openOverlay, closeOverlay } = useUI();
  const $helpRef = useRef<HTMLDivElement>(null);
  const keyPressed = useKeyPress("Escape");
  useEffect(() => {
    if (keyPressed) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);
  useOnOutsideClick($helpRef, () => {
    closeOverlay();
    closeHelp();
  });
  useEffect(() => {
    openOverlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClose = () => {
    closeOverlay();
    closeHelp();
  };
  const item = {
    has_lowest_price_guarantee: true,
    itemid: 6539310796,
    name:
      "【Noise Cancelling Microphone&Headphone】New Upgrade online class headset noise cancellation mic with Dual 3.5mm port and built-in noise reduction headphones",
    adsid: 1423743,
    brand: "No Brand",
    image: "c64b792e4163a401233d483d6fe55efa",
    images: [
      "c64b792e4163a401233d483d6fe55efa",
      "d99f8b6b86a20557aa12876404ecf4c2",
      "c7de1b9bd3688d6647ed704e3d75bb44",
      "1100512d6bf48f1360801fd04a23c87a",
      "c9cd90eb2e846c2953816eeff5550c5f",
      "aff4a7ea8b9d11cb228b8dae5d577371",
      "c2cbe8b4fdfe31b5583f1943f2cef992",
      "43097c1f0bf98ce025135eb78b804a86",
      "d3469b08df904e91e17b835561dd90d9",
    ],
    item_rating: {
      rating_count: [11503, 115, 54, 219, 898, 10217],
      rating_star: 4.830261,
      rcount_with_context: 3853,
      rcount_with_image: 2369,
    },
    price_min: 24000000,
    price_max: 66900000,
    price: 24000000,
    sold: 3443,
    shopee_verified: true,
    shopid: 181860033,
    shop_location: "Overseas",
    tier_variations: [
      {
        images: [
          "558ae7630c7207f045febfd7ad92745f",
          "76ca44b377c44b505a3e5c20ed152b2d",
          "28ab2fd9eaba0c7069bbed7074526f29",
          "91aca3db6b3aa56c57f500829ec24d15",
          "2252e4de59d4026fc554051a63d3f106",
          "b576ca60a5da046de54b40e28cac3b41",
          "ca51c54a1954659e81b14e60e9ecc631",
          "5d5750297cbfc30def165f57fbe52d57",
        ],
        name: "Type",
        options: [
          "Noise Reduction Mic",
          "Grey（Dual 3.5MM）",
          "Grey（Single 3.5MM)",
          "White(Dual 3.5mm）",
          "Gold(Dual 3.5mm）",
          "Gold（Single 3.5MM）",
          "Headset stand Black",
          "Headset stand White",
        ],
      },
    ],
    liked_count: 8072,
    is_adult: false,
    raw_discount: 86,
  };

  return (
    <DialogWrapper guide={"search"} ref={$helpRef}>
      <Dialog>
        <DialogHeader handleClose={handleClose}>OnBoarding Guide</DialogHeader>
        <DialogBody>
          <DialogSection dir='column'>
            <DialogHeading>How to use</DialogHeading>
            <DialogContent>
              Drag items from the left panel called Search Panel to the right
              panel called Select Panel and click compare to begin comparing
              those dragged items.
            </DialogContent>
            <DialogHeading sub>Note</DialogHeading>
            <DialogContent style={{ fontSize: "13px" }}>
              - The item's border turns to green if the item has already been
              selected or dragged. Representationally, you may see this by
              hovering your mouse's cursor over the sample item below.
            </DialogContent>
            <DialogContent style={{ fontSize: "13px" }}>
              - You may open this dialog again by clicking the{" "}
              <Icon type='Help' size={15} /> icon right beside the sort menu.
            </DialogContent>
          </DialogSection>
          <DialogSection dir='column'>
            <DialogHeading style={{ marginBottom: "15px" }}>
              Reference
            </DialogHeading>
            <DialogSection sub dir='row'>
              <DialogContent>
                <DialogComponent border='15px'>
                  <Toolbar withoutMargin place='default'>
                    <ToolbarButton tooltipPlace='bottom' name='Alphabetical'>
                      A<Icon type='Sort' size={16} />
                    </ToolbarButton>
                    <ToolbarButton tooltipPlace='bottom' name='Price'>
                      ₱<Icon type='Sort' size={16} />
                    </ToolbarButton>
                    <ToolbarButton tooltipPlace='bottom' name='Sales/mon'>
                      <Icon type='Fire' size={17} />
                      <Icon type='Sort' size={16} />
                    </ToolbarButton>
                  </Toolbar>
                </DialogComponent>
              </DialogContent>
              <DialogSection style={{ marginLeft: "20px" }} sub>
                <DialogHeading>
                  Sort menu<SubText>found below the search bar</SubText>
                </DialogHeading>
                <DialogContent>
                  <Flex dir='column' align='flex-start'>
                    <Flex align='center' margin='2px 0'>
                      <ToolbarButton tooltipPlace='bottom' name='Alphabetical'>
                        A<Icon type='Sort' size={16} />
                      </ToolbarButton>
                      <ContentDescription>
                        Sorts the results in an alphabetical order
                      </ContentDescription>
                    </Flex>
                    <Flex align='center' margin='2px 0'>
                      <ToolbarButton tooltipPlace='bottom' name='Price'>
                        ₱<Icon type='Sort' size={16} />
                      </ToolbarButton>
                      <ContentDescription>
                        Sorts the results by price
                      </ContentDescription>
                    </Flex>
                    <Flex align='center' margin='2px 0'>
                      <ToolbarButton tooltipPlace='bottom' name='Sales/mon'>
                        <Icon type='Fire' size={17} />
                        <Icon type='Sort' size={16} />
                      </ToolbarButton>
                      <ContentDescription>
                        Sorts by the amount of people buying the item
                      </ContentDescription>
                    </Flex>
                  </Flex>
                </DialogContent>
              </DialogSection>
            </DialogSection>
            <DialogSection>
              <DialogSection dir='row'>
                <RItem
                  style={{
                    marginLeft: "20px",
                    marginBottom: "-10px",
                    boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.6)",
                  }}
                  onMouseEnter={() => setSelected(true)}
                  onMouseLeave={() => setSelected(false)}
                  big={false}
                  key={`initialItem-${item.itemid}`}
                  selected={selected} //initialSelectedItems.map((i) => i.itemid).includes(itemid)
                  isDragging={false}
                >
                  <ResultItemImage src={"751996009153746830caf407458a0390"} />
                  <div style={{ padding: "2px 8px 5px 8px" }}>
                    <ResultItemTitle>
                      {item.name.replace(/[^a-zA-Z0-9 ]/g, "")}
                    </ResultItemTitle>
                    <GridStats item={item} on='results' />
                  </div>
                </RItem>
                <div style={{ marginLeft: "20px" }}>
                  <DialogHeading style={{ marginBottom: "15px" }}>
                    Legends
                  </DialogHeading>
                  <DialogContent>
                    <IconDescription icon='Checkmark'>
                      Signifies The seller is verified by shopee
                    </IconDescription>
                    <IconDescription icon='PriceLow'>
                      Item is among the lowests price
                    </IconDescription>
                    <IconDescription icon='LowStarsCount'>
                      The average 1s and 2 stars rating of the item
                    </IconDescription>
                    <IconDescription icon='Discount'>
                      Discount percentage of the item
                    </IconDescription>
                    <IconDescription icon='Fire'>
                      Signifies people buy this item favorably
                    </IconDescription>
                  </DialogContent>
                </div>
              </DialogSection>
            </DialogSection>
          </DialogSection>
        </DialogBody>
      </Dialog>
    </DialogWrapper>
  );
};

export default Help;
