"use client";

import { fontSize } from "../../Theme/fontsize";
import {
  Autocomplete,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Phone.module.css";
import { useRef, useState } from "react";
import BasicDetailsAccordian from "../../Component/BasicDetailAccordion/BasicDetailAccordion";
import TabForComparisonNavigation from "../../Component/TabsForComparisonNavigation/TabsForComparisonNavigation";
import CustomizedAccordions from "../../Component/ComparisonAccordion/ComparisonAccordion";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const vehicleTabs = [
  { name: "SPECIFICATIONS", href: "Specification" },
  { name: "COLOURS", href: "Colours" },
  { name: "IMAGES", href: "Images" },
  { name: "HARDWARE", href: "hardware" },
  { name: "SOFTWARE", href: "software" },
  { name: "CONNECTIVITY", href: "connectivity" },
];

// var phoneSpecs=[]

const Phone = () => {
  const { vehicleSlug } = useParams();

  const [vehicle1Slug, vehicle2Slug] = vehicleSlug.split("-vs-");

  const vehicle1 = vehicle1Slug.replace(/-/g, " ");
  const vehicle2 = vehicle2Slug.replace(/-/g, " ");


  const [activeTab, setActiveTab] = useState("vehicleTrending");
  const rowRefs = useRef({});

  const [searchQuery, setSearchQuery] = useState("");
  const [phoneSpecs, setPhoneSpecsData] = useState([]);
  const [description, setDescription] = useState("")
  const [keySpecs, setKeySpecs] = useState([])

  const handleSelectTab = (key) => {
    setActiveTab(key);
    const targetElement = document.getElementById(key);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  useEffect(() => {
    const fetchComparisonData = async () => {
      try {
  
        const res = await axios.get(
          `https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/comparison`,
          { params: { vehicle1, vehicle2 } }
        );
  
        console.log(res.data, "comparison result");
        setPhoneSpecsData(res?.data[0]?.categories || []);
        setDescription(res?.data[0]?.description || "")
        setKeySpecs(res?.data[0].keySpecs || [])
      } catch (err) {
        console.error("Failed to fetch comparison data", err);
      }
    };
  
    fetchComparisonData();
  }, [vehicle1, vehicle2]);

  // const phoneSpecs = [
  //   {
  //     id: "Power & Performance",
  //     title: "Power & Peformance",
  //     type: "Specification",
  //     data: [
  //       {
  //         model: "Honda CB350",
  //         maxPower: "20.2 bhp @ 6,100 rpm",
  //         maxTorque: "27 Nm @ 4,000 rpm",
  //         topSpeed: "130",
  //         transmission: "5 Speed Manual",
  //         fuelType: "Petrol",
  //         displacement: "348.66cc",
  //         mileage: "35 kmpl",
  //         clutch: "Assist And Slipper Clutch",
  //         cylinders: "1",
  //       },
  //       {
  //         model: "Royal Enfield Classic 350",
  //         maPower: "20.2 bhp @ 6,100 rpm",
  //         maxTorque: "27 Nm @ 4,000 rpm",
  //         topSpeed: "115",
  //         transmission: "5 Speed Manual",
  //         fuelType: "Petrol",
  //         displacement: "349cc",
  //         mileage: "34",
  //         clutch: "Wet Multiplate",
  //         cylinders: "1",
  //       },
  //     ],
  //   },
  //   {
  //     id: "Brake & Wheels",
  //     title: "Brake & Wheels",
  //     type: "Colours",
  //     data: [
  //       {
  //         model: "Honda CB350",
  //         brakingSystem: "Dual Channel ABS",
  //         frontBrakeType: "Disc",
  //         frontBrakeSize: "310",
  //         rearBrakeType: "Disc",
  //         rearBrakeSize: "240mm",
  //         frontWheelSize: "19 inch",
  //         rearWheelSize: "18 inch",
  //         tyreType: "Tubeless",
  //         frontTyreSize: "100/90 - 19",
  //         rearTyreSize: "130/70 - 18",
  //       },
  //       {
  //         model: "Royal Enfield Classic 350",
  //         brakingSystem: "Single Channel ABS",
  //         frontBrakeType: "Disc",
  //         frontBrakeSize: "300",
  //         rearBrakeType: "Drum",
  //         rearBrakeSize: "152.5mm",
  //         frontWheelSize: "19 inch",
  //         rearWheelSize: "18 inch",
  //         tyreType: "Tubed",
  //         frontTyreSize: "100/90 - 19",
  //         rearTyreSize: "120/80 - 18",
  //       },
  //     ],
  //   },
  //   {
  //     id: "Images",
  //     title: "Images of bike",
  //     type: "Images",
  //     data: [
  //       {
  //         model: "Honda CB350",
  //         maxPower: "20.2 bhp @ 6,100 rpm",
  //         maxTorque: "27 Nm @ 4,000 rpm",
  //         topSpeed: "130",
  //         transmission: "5 Speed Manual",
  //         fuelType: "Petrol",
  //         displacement: "348.66cc",
  //         mileage: "35 kmpl",
  //         clutch: "Assist And Slipper Clutch",
  //         cylinders: "1",
  //       },
  //       {
  //         model: "Royal Enfield Classic 350",
  //         maPower: "20.2 bhp @ 6,100 rpm",
  //         maxTorque: "27 Nm @ 4,000 rpm",
  //         topSpeed: "115",
  //         transmission: "5 Speed Manual",
  //         fuelType: "Petrol",
  //         displacement: "349cc",
  //         mileage: "34",
  //         clutch: "Wet Multiplate",
  //         cylinders: "1",
  //       },
  //     ],
  //   },
  // ];
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const mergedKeys = Array.from(
    new Set(
      phoneSpecs?.flatMap((spec) =>
        spec?.data?.flatMap((item) => Object.keys(item))
      )
    )
  ).filter((key) => key !== "model");

  const uniqueTypes = [...new Set(phoneSpecs.map((item) => item.type))];
  const uniqueTypeCount = uniqueTypes.length;

  return (
    <Container className={styles.main}>
      <Typography fontSize={fontSize.h2.medium}>
        {vehicle1.toUpperCase()} vs {vehicle2.toUpperCase()}
      </Typography>

      <BasicDetailsAccordian
        description={description}
        keySpecs={keySpecs}
      ></BasicDetailsAccordian>

      <div className="mb-5">
        <Grid container spacing={2} className="mt-3">
          <Grid item lg={9} xs={6}>
            <TabForComparisonNavigation
              onSearch={handleSearch}
              tabs={vehicleTabs}
              activeTab={activeTab}
              onSelectTab={(key) => handleSelectTab(key)}
            />
          </Grid>
          <Grid item lg={3} xs={6}>
            <div className="d-flex justify-content-end align-items-center mt-4 w-100">
              <Autocomplete
                fullWidth
                id="autocomplete"
                options={mergedKeys}
                getOptionLabel={(option) => option}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                sx={{ width: 300 }}
                onChange={(event, value) => value && handleSearch(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    SelectProps={{
                      input: {
                        ...params.InputProps,
                        type: "search",
                      },
                    }}
                  />
                )}
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {Array.from({ length: uniqueTypeCount })?.map((_, index) => (
        <div id={uniqueTypes[index]}>
          <CustomizedAccordions
            phoneSpecs={phoneSpecs?.filter(
              (spec) => spec.type === uniqueTypes[index]
            )}
            searchQuery={searchQuery}
            rowRefs={rowRefs}
            title={uniqueTypes[index]}
          />
        </div>
      ))}

      {/* <div id="colours">
        <CustomizedAccordions
          phoneSpecs={phoneSpecs?.filter((spec) => spec.type === "Colours")}
          searchQuery={searchQuery}
          rowRefs={rowRefs}
          title="Colour"
        />
      </div>
      <div id="images">
        <CustomizedAccordions
          phoneSpecs={phoneSpecs?.filter((spec) => spec.id === "Images")}
          searchQuery={searchQuery}
          rowRefs={rowRefs}
          title="Images"
        />
      </div> */}
    </Container>
  );
};

export default Phone;
