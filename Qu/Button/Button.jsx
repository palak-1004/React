import React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({ children, ...props }) {
  return (
    <Button variant="outlined" sx {...props}>
      {children}
    </Button>
  );
}
