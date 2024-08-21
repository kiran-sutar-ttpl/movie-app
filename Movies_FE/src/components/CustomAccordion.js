import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import "../businesslogic/styles/global.scss";

export const CustomAccordion = ({
  id,
  headerText,
  expandIcon,
  disabled,
  defaultExpanded,
}) => {

  const user = [
    { label: "Address", value: "ABC street 1" },
    { label: "City", value: "Solapur" },
    { label: "Postal code", value: "123654" },
    { label: "State", value: "Maharashtra" },
    { label: "Country", value: "Bharat" },
  ];
  return (
    <Accordion disabled={disabled} defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={expandIcon || <ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography  color='#1976d2' sx={{ fontSize: "bold"}}>{headerText}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {user &&
          user?.map(({ label, value }) => (
            <Box
              key={label}
              className="d-flex flex-direction"
              sx={{ gap: "15px" }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#8b8b8b" }}>
                {label}:
              </Typography>
              <Typography sx={{fontSize:'15px'}}>{value}</Typography>
            </Box>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};
