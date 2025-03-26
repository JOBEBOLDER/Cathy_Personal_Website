import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    NAAAP: {
      jobTitle: "Web Developer @",
      duration: "JAN 2025 - PRESENT",
      desc: [
        "- Architected leadership development platform using React/Node.js + Strapi CMS, empowering 2,500+ Asian professionals through anti-discrimination resource sharing and community building.",
        "- Authored comprehensive technical documentation for developers and content managers, streamlining onboarding and improving feature adoption by 40%.",
        "- Social Impact: Built multilingual responsive UI supporting cross-device accessibility, increasing member engagement by 35% across 15+ community chapters"
      ]
    },
    Tendesign: {
      jobTitle: "Full-stack Engineer @",
      duration: "Aug 2022 – Mar 2023",
      desc: [
        "- Optimized ArcGIS JavaScript API integration with React using React Suspense and Webpack code-splitting, reducing map loading latency from 2.5s to 1.2s. This improvement allowed real-time updates of pipe network data, enhancing the responsiveness of field operations.",
        "- Implemented Stripe payment functionality using object-oriented design to support both subscription-based and one-time payments. Developed a complete payment flow using Node.js, including backend handlers for securely processing payment events and managing webhook notifications.",
        "- Developed Google login functionality with OAuth 2.0 using Node.js and Express, securing user authentication through JWT and storing user data in MongoDB.",
        "- Built a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Git and Heroku, reducing deployment time by 50%. This streamlined the development process by enabling automated testing and deployment, leading to faster iteration cycles and more frequent feature releases."
      ]
    },
    Semir_Digital_Center: {
      jobTitle: "Software Engineer PM intern @",
      duration: "MAY 2021 - SEPT 2021",
      desc: [
        "Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
        " Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik."
      ]
    },
    Centivizer: {
      jobTitle: "Software Developer @",
      duration: "SEPT 2019 - APR 2020",
      desc: [
        "- Developed a React.js dashboard to track marketing performance, using React Hooks for dynamic state management and Axios for API calls to a Java-based backend via RESTful APIs. Provided real-time visualization of key metrics, which reduced manual data analysis efforts for the marketing team",
        "- Created an AWS Lambda function in Java to automate customer order data processing from Amazon S3. The function validated, transformed, and stored the data in Amazon RDS, replacing manual data entry with scheduled automated triggers, which improved reporting accuracy and minimized errors.",
        " - Integrated AWS API Gateway with a Java SpringBoot backend to build a reliable API for handling large file uploads. Implemented multi-part uploads with Amazon S3, ensuring that files over 5GB could be uploaded without errors or timeouts, improving efficiency for the business team.",
        " - Developed an internal error reporting system using React.js and Java SpringBoot in an Agile (JIRA/Trello)",
        "environment. Implemented a user-facing form to capture detailed error reports, serialized them into JSON using",
        "Jackson stored them in PostgreSQL for efficient analysis, handling over 2,000 bug reports."
      ]
    },
    
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
