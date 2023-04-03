import { withChildren } from "@/types/utils";
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import { forwardRef } from "react";

export const Button = forwardRef(
  ({ sx, children, ...props }: MUIButtonProps, ref: any) => {
    return (
      <MUIButton
        ref={ref}
        sx={{
          fontSize: 14,
          boxShadow: "none",
          textTransform: "none",
          padding: "6px 12px",
          fontWeight: "500",
          "&:hover": {
            boxShadow: "none",
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </MUIButton>
    );
  }
);
