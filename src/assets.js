import reactLogo from './static/react-logo.json';
import pythonLogo from './static/python-logo.json';
import sqlLogo from './static/sql.json';
import rorLogo from './static/ror.json';
import javascriptLogo from './static/javascript.json';
import gcpLogo from './static/gcp.json';
import awsLogo from './static/aws.json';
import dockerLogo from './static/docker.json';
import cssLogo from './static/css.json';
import apiLogo from './static/api.json';
import contact from './static/contact.json';

export const contactLottie = {
  refId: 'contact-logo',
  logoFile: contact,
  title: null,
  textContent: null,
};

export const lotties = [
  {
    refId: 'react-logo',
    logoFile: reactLogo,
    title: 'React',
    textContent: 'React, Material-UI Framework',
  },
  {
    refId: 'python-logo',
    logoFile: pythonLogo,
    title: 'Python',
    textContent:
      'Python 3 experience with Web Scraping, ETL processes, and more',
  },
  {
    refId: 'sql-logo',
    logoFile: sqlLogo,
    title: 'SQL',
    textContent: 'SQL experience in BigQuery, SnowFlake, and PostgreSQL',
  },
  {
    refId: 'javascript-logo',
    logoFile: javascriptLogo,
    title: 'JavaScript',
    textContent: 'JavaScript experience with automation, web apps, and more',
    small: true,
  },
  {
    refId: 'ror-logo',
    logoFile: rorLogo,
    title: 'Ruby on Rails',
    textContent: 'Ruby on Rails based API building experience',
  },
  {
    refId: 'gcp-logo',
    logoFile: gcpLogo,
    title: 'Google Cloud Platform',
    textContent:
      'GCP experience in Cloud Run, Cloud Functions, Pub/Sub, BigQuery, App Engine, API Gateway, Secrets Manager, IAM, GCS, gCloud, and more',
  },
  {
    refId: 'aws-logo',
    logoFile: awsLogo,
    title: 'Amazon Web Services',
    textContent:
      'AWS experience in S3, boto3, ECR, Fargate/ECS, Secrets Manager, and more',
  },
  {
    refId: 'docker-logo',
    logoFile: dockerLogo,
    title: 'Docker/GCP Cloud Build',
    textContent: 'Docker Image building/Dockerfile creation experience',
  },
  {
    refId: 'css-logo',
    logoFile: cssLogo,
    title: 'CSS',
    textContent:
      'Experience with CSS, Sass, and Material-UIs styling (Emotion)',
  },
  {
    refId: 'api-logo',
    logoFile: apiLogo,
    title: 'API',
    textContent:
      'API archiecture and API integrations/communications experience',
  },
];

export const events = [
  {
    date: {
      from: 2013,
      to: 2017,
    },
    role: 'Student',
    company: 'University of Denver',
    location: 'Denver, CO',
    content:
      "Graduated from the Daniel's College of Business. Majored in Business Information Systems/Business Analytics, and Minored in Leadership.",
  },
  {
    date: {
      from: 2018,
      to: 2020,
    },
    role: 'Automation Analyst/Developer',
    company: 'Metric Theory',
    location: 'Denver, CO',
    content:
      'Built API integrations, ETL packages. Utilized GCP (Cloud Functions, BigQuery, Cloud Storage) and Xplenty ETL Software.',
  },
  {
    date: {
      from: 2020,
      to: 2021,
    },
    role: 'ETL Automation Developer/Data Engineer',
    company: 'Digible',
    location: 'Denver, CO',
    content:
      'Built Google Analytics API Integration. Worked on the in-house Data Pipeline in AWS. Worked with Web Scrapers to gather consistent data.',
  },
  {
    date: {
      from: 2021,
      to: 'Present',
    },
    role: 'Senior Developer',
    company: 'Metric Theory',
    location: 'Denver, CO',
    content:
      'Built and played a role in designing in-house Data Pipeline, which runs within GCP. Work and play a role in designing internal Web Application, which houses tool for peers, utilizes React, Material UI v5, and more.',
  },
];
