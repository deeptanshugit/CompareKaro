import { Col, Row } from "react-bootstrap";
import { Collapse, Typography } from "@mui/material";
import "./BasicDetailAccordion.module.css";
import { fontSize } from "../../Theme/fontsize";
import { useState } from "react";
import { fontWeight } from "../../Theme/fontWeight";
import KeySpecsComparison from "../KeySpecsComparison/KeySpecsComparison";

const ReadMore = ({ children, keySpecs}, description) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const showbasicComparison = () => {
    return (
      <div>
        <KeySpecsComparison
          data={keySpecs}
        />
      </div>
    );
  };
  return (
    <div className="text">
      <Collapse
        in={!isReadMore}
        timeout={{ enter: 1500, exit: 1500 }}
        collapsedSize={50}
      >
        <Typography
          sx={{
            wordWrap: "break-word", // Same as above for consistency
            overflowWrap: "break-word",
          }}
          fontSize={fontSize.h3.small}
          fontWeight={fontWeight.W400}
          component="span"
        >
          {isReadMore ? text.slice(0, 200) + "..." : text}
        </Typography>
        {!isReadMore && showbasicComparison()}
      </Collapse>

      <div
        onClick={toggleReadMore}
        className="read-or-hide d-flex justify-content-end"
        style={{ color: "rgb(0,136,209)", cursor: "pointer" }}
      >
        {isReadMore ? "Read More" : "Read Less"}
      </div>
    </div>
  );
};

export default function BasicDetailsAccordian(props) {
  return (
    <Row>
      <Col>
        <ReadMore keySpecs={props?.keySpecs}>
          {props?.description}
        </ReadMore>
      </Col>
    </Row>
  );
}
