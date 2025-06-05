import {
    Nav,
    NavItem,
    NavLink,
    TabContainer,
  } from "react-bootstrap";
  import styles from "./TabsForComparisonNavigation.module.css";
  import { Grid } from "@mui/material";
  import { useState } from "react";
  

  
  const TabForComparisonNavigation = ({
    tabs,
    activeTab,
    onSelectTab,
    onSearch,
  }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = () => {
      onSearch(query.trim().toLowerCase());
    };
    return (
      <Grid container spacing={2} className="mt-3">
        <Grid item lg={9} xs={6}>
          <TabContainer
            activeKey={activeTab}
            onSelect={onSelectTab}
            transition={true}
          >
            <Nav
              fill
              variant="underline"
              className={styles.nav}
              style={{ overflowX: "scroll", overflowY: "hidden" }}
            >
              {tabs?.map((tab, index) => (
                <NavItem key={index} className={styles.navItem}>
                  <NavLink
                    className={`${styles.navLink} ${
                      activeTab === tab.href ? styles.navLinkActive : ""
                    }`}
                    eventKey={tab.href}
                  >
                    {tab.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </TabContainer>
        </Grid>
        
      </Grid>
    );
  };
  
  export default TabForComparisonNavigation;
  