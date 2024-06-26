import React from "react";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { stylesMui } from "./styles";

const PrimaryButton = ({ buttonText, onClick }) => {
  const isPlayButton = buttonText.toLowerCase().startsWith("run");
  const isAddButton = buttonText.toLowerCase().startsWith("add");
  const isRemoveButton = buttonText.toLowerCase().startsWith("remove");
  const isAddGroup = buttonText === "Add Group";
  const isRemoveGroup = buttonText === "Remove Group";
  const isAddShiftFilter = buttonText === "Add Shift Filter";
  const isCreate = buttonText === "Create";
  const isAuth = buttonText === "Login" || buttonText === "Logout";

  return (
    <>
      <Button
        variant="contained"
        sx={{
          ...stylesMui.primaryButton,
          ...(isRemoveGroup && stylesMui.primaryButtonAlt),
          ...(isAddShiftFilter && stylesMui.primaryButtonCustom),
          ...(isCreate && stylesMui.primaryButtonAuth),
          ...(isAuth && stylesMui.primaryButtonAuth),
        }}
        onClick={onClick}
      >
        {isRemoveButton ? (
          <>
            <RemoveIcon />
            {isRemoveGroup ? buttonText : null}
          </>
        ) : isAddButton ? (
          <AddIcon />
        ) : isPlayButton ? (
          <PlayArrowIcon />
        ) : null}
        {!isPlayButton && !isAddButton && !isRemoveButton && !isPlayButton
          ? buttonText
          : null}
      </Button>
    </>
  );
};

export default PrimaryButton;
