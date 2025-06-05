import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContainer,
  } from "react-bootstrap";
  import styles from "./FeaturedBikeNavigation.module.css";
  
  const FeaturedBikeNavigation = ({
    tabs,
    activeTab,
    onSelectTab,
  }) => {
    return (
      <TabContainer
        activeKey={activeTab}
        onSelect={onSelectTab}
        transition={true}
      >
        <Row>
          <Col>
            <Nav fill variant="underline" className={styles.nav}>
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
          </Col>
        </Row>
      </TabContainer>
    );
  };
  
  export default FeaturedBikeNavigation;
  