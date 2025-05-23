import { Col, Row } from "react-bootstrap";
import styles from "./CompareKaro.module.css";
import { Typography } from "@mui/material";
import { fontSize } from "../../../Theme/fontsize";
import CompareCard from "../../../Component/CompareCard/CompareCard";

export default function CompareKaro() {
  return (
    <div>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div className="container">
            <div>
              <Typography fontSize={fontSize.h1.medium}>CompareKaro</Typography>
            </div>
            <div className={styles.textTyping}>
              <p>Just compare it.</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12} lg={12}>
        <div className="container mt-5">
          <CompareCard vehicle1={"Honda CB350"} vehicle2={"Royal Enfield Meteor 350"} />
          </div>
          <div className="container mt-5">
          <CompareCard />
          </div>
        </Col>
      </Row>
    </div>
  );
}
