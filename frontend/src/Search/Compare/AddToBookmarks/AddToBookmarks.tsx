import React, { useEffect, useRef, useState } from "react";
import { DialogHeader } from "../../../components/Dialog";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeading,
  DialogSection,
} from "../../../components/Dialog/Dialog.styles";
import Flex from "../../../components/Flex";
import { BookMark, SearchItem } from "../../../interfaces";
import { useUI } from "../../../shared/contexts/useUIContext";
import toast from "../../../shared/hooks/toast";
import { useKeyPress } from "../../../shared/hooks/useKeyPressed";
import useOnOutsideClick from "../../../shared/hooks/useOnOutsideClick";
import { color } from "../../../shared/styles";
import { arrayToNArray } from "../../../shared/utils/utils";
import { addBookmark } from "../../../shared/utils/localStorage";
import SelectItem from "../../SelectPanel/SelectItem/SelectItem";
import { DialogWrapper } from "../CompareSummary/CompareSummary.styles";
import {
  CancelButton,
  InputElement,
  SaveButton,
  TextAreaElement,
} from "./AddToBookmarks.styles";

interface Props {
  selectedItems: SearchItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<SearchItem[]>>;
}

const AddToBookmarks = ({ setSelectedItems, selectedItems }: Props) => {
  const { closeAddToBookmarks, openOverlay, closeOverlay } = useUI();
  const $compareGuideRef = useRef<HTMLDivElement>(null);
  const keyPressed = useKeyPress("Escape");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (keyPressed) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);
  useOnOutsideClick($compareGuideRef, () => handleClose());
  useEffect(() => {
    openOverlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    switch (e.target.id) {
      case "#bookmarkTitle":
        setTitle(e.target.value);
        break;
      case "#bookmarkDescription":
        setDescription(e.target.value);
        break;
    }
  };
  const handleClose = () => {
    closeOverlay();
    closeAddToBookmarks();
  };
  const handleSubmit = ({
    items,
    title,
    pinned,
    description,
  }: Omit<BookMark, "id">) => {
    if (!title || title === "" || title === undefined) {
      toast.show({
        type: "danger",
        title: "Failed",
        message: "Please add a title",
      });
      if (selectedItems.length < 3) {
        toast.show({
          type: "danger",
          title: "Failed",
          message: "Failed, please add more Items",
        });
        return;
      }
      return;
    }
    toast.show({
      type: "success",
      title: "Saved",
      message: "Successfully added to bookmarks",
    });
    handleClose();
    const newBookmark: BookMark = {
      id: Date.now(),
      pinned,
      items,
      title,
      description,
    };
    addBookmark(newBookmark);
    // const prevBookmarks = addBookmark(newBookmark);
    // Uncomment if we want to peek bookmarks
  };
  const results = arrayToNArray(selectedItems, 2);
  const onRemoveClick = (itemid: number) => {
    setSelectedItems((prev) => prev.filter((res) => itemid !== res.itemid));
  };

  return (
    <DialogWrapper guide='bookmarks' ref={$compareGuideRef}>
      <Dialog>
        <DialogHeader handleClose={handleClose}>Add to bookmarks</DialogHeader>
        <DialogBody>
          <DialogSection>
            <DialogHeading>
              Title <span style={{ color: color.danger }}>*</span>
            </DialogHeading>
            <DialogContent>
              <InputElement id='#bookmarkTitle' onChange={(e) => onChange(e)} />
            </DialogContent>
            <DialogHeading>Description</DialogHeading>
            <DialogContent>
              <TextAreaElement
                id='#bookmarkDescription'
                onChange={(e) => onChange(e)}
              />
            </DialogContent>
          </DialogSection>

          <DialogSection>
            <Flex justify='space-between' align='center'>
              <DialogHeading>Items to be Saved</DialogHeading>
              <div>
                <CancelButton onClick={handleClose}>Cancel</CancelButton>{" "}
                <SaveButton
                  onClick={() =>
                    handleSubmit({
                      pinned: false,
                      items: selectedItems,
                      title,
                      description,
                    })
                  }
                >
                  Save +
                </SaveButton>
              </div>
            </Flex>
            <Flex margin='20px 0' dir='row'>
              <Flex padding='0 60px 0 0' dir='column'>
                {results[0].map((i) => (
                  <SelectItem
                    onRemoveClick={() => onRemoveClick(i.itemid)}
                    item={i}
                  />
                ))}
              </Flex>
              <Flex padding='0 60px 0 0' dir='column'>
                {results[1].map((i) => (
                  <SelectItem onRemoveClick={() => ""} item={i} />
                ))}
              </Flex>
            </Flex>
          </DialogSection>
        </DialogBody>
      </Dialog>
    </DialogWrapper>
  );
};

export default AddToBookmarks;
