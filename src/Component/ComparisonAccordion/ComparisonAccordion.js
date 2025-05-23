import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ComparisonTable from "../ComparisonTable/ComparisonTable";
import { fontSize } from "../theme/fontsize";
import { fontWeight } from "../../Theme/fontWeight";
import styles from "../BasicDetailAccordion/BasicDetailAccordion.module.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions(props) {
  const [expandedAccordion, setExpandedAccordion] = React.useState();

  const handleSearch = (query) => {
    // Find the Accordion ID containing the query key
    const searchKeyInSpecs = (key) => {
      for (const spec of props.phoneSpecs) {
        for (const data of spec.data) {
          if (key in data) {
            console.log("Found in:", spec.id);
            return spec.id; // Return the ID of the accordion containing the key
          }
        }
      }
      return null; // Return null if the key is not found
    };
    const accordionId = searchKeyInSpecs(query); // Find the accordion ID
    if (accordionId) {
      setExpandedAccordion(accordionId); // Expand the accordion with the matching ID
    }
    // Delay scrolling until the accordion is expanded
    setTimeout(() => {
      const row = props.rowRefs.current[query.toLowerCase()];
      if (row) {
        console.log("Scrolling to:", row);
        row.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        console.warn("Row not found for query:", query);
      }
    }, 300); // Adjust the delay as needed
  };

  React.useEffect(() => {
    handleSearch(props.searchQuery);
  }, [props.searchQuery]);

  return (
    <div>
      <div className={styles.accordianTitle}>
        <Typography fontSize={fontSize.h2.medium} fontWeight={fontWeight.W400}>
          {props.title}
        </Typography>
      </div>
      {props.phoneSpecs?.map((specs) => {
        return (
          <Accordion
            key={specs.id}
            expanded={expandedAccordion === specs.id}
            onClick={() =>
              setExpandedAccordion(() =>
                expandedAccordion === null ? specs.id : null
              )
            }
          >
            <AccordionSummary
              className="p-2"
              sx={{ borderBottom: "1px solid grey" }}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                fontSize={fontSize.h3.medium}
                fontWeight={fontWeight.W300}
              >
                {specs.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ComparisonTable
                rowRefs={props.rowRefs}
                comparisonData={specs.data}
                searchQuery={props.searchQuery}
              ></ComparisonTable>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
