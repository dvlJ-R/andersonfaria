export const caseStudiesIntro = {
  eyebrow: 'Case studies',
  title: 'Featured Case Studies',
  subtitle:
    'Selected QA contexts where I apply risk analysis, API validation, E2E automation, documentation and continuous improvement. Private projects are presented at a high level to protect sensitive details.',
  focusTags: [
    'Risk-based QA',
    'API validation',
    'E2E automation',
    'Federal systems',
    'CI/CD feedback'
  ],
  pillars: [
    { value: 'QA', label: 'Testing Strategy' },
    { value: 'API', label: 'Backend Validation' },
    { value: 'E2E', label: 'Automation Focus' },
    { value: 'CI/CD', label: 'Delivery Feedback' }
  ]
};

export const caseStudies = [
  {
    title: 'Playwright + TypeScript E2E Automation Framework',
    category: 'Automation',
    status: 'In Progress',
    visual: 'E2E',
    shortSummary:
      'A portfolio automation project designed to demonstrate maintainable E2E testing practices with Playwright, TypeScript and CI/CD readiness.',
    context:
      'This is a public portfolio project that simulates how a professional QA automation framework can be structured for product teams that need reliable regression feedback.',
    challenge:
      'The goal is to show a maintainable automation approach without relying on confidential systems, invented metrics or unverifiable production claims.',
    role:
      'I structured the automation project, organized test scenarios, designed Page Object patterns, configured cross-browser execution and prepared the project for CI/CD evolution.',
    strategy: [
      'Prioritize critical user flows and high-value regression scenarios.',
      'Use Page Objects and fixtures to reduce duplication and improve maintainability.',
      'Prepare the suite for cross-browser execution and readable reporting.',
      'Keep the project public and inspectable as evidence of practical QA automation skills.'
    ],
    tools: [
      'Playwright',
      'TypeScript',
      'Page Objects',
      'Fixtures',
      'GitHub Actions',
      'CI/CD',
      'HTML Report'
    ],
    deliverables: [
      'Initial E2E automation framework structure.',
      'Organized tests by product context and behavior.',
      'Reusable Page Object model for maintainable scenarios.',
      'HTML reporting setup for clearer analysis.',
      'Foundation for pipeline execution.'
    ],
    impact: [
      'Created a public proof of how I approach E2E automation architecture.',
      'Established reusable patterns that can evolve into a stronger QA portfolio asset.',
      'Demonstrates current growth toward more advanced SDET practices.'
    ],
    confidentialityNote: null,
    repoUrl: 'https://github.com/dvlJ-R/andersonfaria'
  },
  {
    title: 'GeoRadar - Federal Geospatial QA',
    category: 'Federal',
    status: 'Private Project',
    visual: 'GEO',
    shortSummary:
      'QA work in a federal geospatial context, focused on reliable workflows, integration validation and regression discipline.',
    context:
      'GeoRadar is presented as a federal geospatial QA case study involving complex workflows, data visualization and operational reliability expectations.',
    challenge:
      'Geospatial platforms require careful validation of maps, filters, data consistency, integrations and regressions that may affect user trust.',
    role:
      'I contributed to test planning, scenario design, automation support, integration validation and evidence documentation for quality discussions with the team.',
    strategy: [
      'Identify critical workflows and the main product risks before selecting test coverage.',
      'Combine UI validation with API and data-oriented checks where applicable.',
      'Use regression scenarios to protect stable behavior across releases.',
      'Document evidence and defects clearly so developers and stakeholders can act on them.'
    ],
    tools: ['Cypress', 'Postman', 'GitLab CI/CD', 'ReactJS', 'Django', 'QA Documentation'],
    deliverables: [
      'Structured regression scenarios for key workflows.',
      'Functional validation of geospatial interactions and related data behavior.',
      'Support for automation and integration checks.',
      'Evidence and defect reports written for technical follow-up.'
    ],
    impact: [
      'Helped strengthen confidence in complex federal workflows.',
      'Improved the clarity of QA evidence and regression thinking around the product.',
      'Reinforced experience with public-sector systems that require careful validation.'
    ],
    confidentialityNote:
      'Details are intentionally high level. Internal workflows, endpoints, data, environments and non-public operational information are not exposed.',
    repoUrl: null
  },
  {
    title: 'Pactum - Federal Agreement Platform',
    category: 'Federal',
    status: 'Private Project',
    visual: 'AGR',
    shortSummary:
      'QA for a federal agreement platform, focused on business rules, traceability, API validation and dependable regression coverage.',
    context:
      'Pactum is presented as a QA case study for a regulated agreement workflow where process integrity, evidence and collaboration matter.',
    challenge:
      'Agreement platforms require careful validation of business rules, user flows, permissions, API behavior and traceable evidence for defects.',
    role:
      'I worked on critical scenario definition, regression validation, integration checks, defect investigation and QA documentation aligned with team needs.',
    strategy: [
      'Map business rules and workflow risks before defining scenarios.',
      'Validate critical paths across front-end behavior and API responses.',
      'Keep regression checks focused on high-risk flows.',
      'Use clear documentation to support audits, collaboration and defect resolution.'
    ],
    tools: ['Cypress', 'Selenium', 'Postman', 'Jira', 'Confluence', 'Regression Testing'],
    deliverables: [
      'Critical test scenarios for agreement workflows.',
      'Regression checks for important business rules.',
      'API validation support for integrated behavior.',
      'Bug reports and QA documentation for team alignment.'
    ],
    impact: [
      'Supported safer releases for regulated workflows.',
      'Improved traceability between expected behavior, evidence and defects.',
      'Strengthened practical experience in federal systems and quality governance.'
    ],
    confidentialityNote:
      'This case study avoids sensitive details about internal rules, data, environments, users and operational processes.',
    repoUrl: null
  },
  {
    title: 'SISFOGO - IBAMA',
    category: 'Federal',
    status: 'Active QA Work',
    visual: 'FIRE',
    shortSummary:
      'QA work for a federal environmental system in the IBAMA context, focused on critical workflows, business rules, evidence and process quality.',
    context:
      'SISFOGO is presented as a federal environmental QA case study involving sensitive operational workflows where consistency, traceability and clear evidence are important.',
    challenge:
      'The main quality challenge is validating critical flows and business rules while communicating defects clearly and protecting non-public project details.',
    role:
      'I work on requirements analysis, test scenario design, functional validation, bug investigation, evidence documentation and collaboration with the technical team.',
    strategy: [
      'Prioritize critical workflows and business rules that may create higher delivery risk.',
      'Validate functional behavior, data consistency and regression-sensitive paths.',
      'Use API and integration-oriented thinking where it helps clarify defects.',
      'Document findings with enough context for developers to reproduce and resolve issues.'
    ],
    tools: ['Cypress', 'Postman', 'GitLab CI/CD', 'Jira', 'GitLab Issues', 'QA Documentation'],
    deliverables: [
      'Functional test scenarios for critical workflows.',
      'Regression-oriented validation of business rules.',
      'Evidence-based bug reports and technical notes.',
      'QA collaboration to support safer delivery decisions.'
    ],
    impact: [
      'Supports quality control in a federal environmental system context.',
      'Strengthens the connection between requirements, test evidence and technical follow-up.',
      'Shows practical QA work with complex public-sector workflows without exposing confidential information.'
    ],
    confidentialityNote:
      'Presented only at a safe portfolio level. Internal data, endpoints, operational procedures, environments and confidential project details are intentionally omitted.',
    repoUrl: null
  },
  {
    title: 'GaussFleet - Industrial Telemetry QA',
    category: 'Industrial',
    status: 'Completed',
    visual: 'DATA',
    shortSummary:
      'QA work for an industrial telemetry platform, focused on data reliability, integration behavior and clear defect traceability.',
    context:
      'GaussFleet is presented as an industrial telemetry QA case study where product value depends on dependable data flows, alerts and reporting behavior.',
    challenge:
      'Telemetry platforms require careful validation of data consistency, integrations, edge cases and regression risk across changing product behavior.',
    role:
      'I contributed to test strategy, scenario creation, automation support, API validation and analysis of defects related to data and product behavior.',
    strategy: [
      'Focus on data-oriented risks, integration behavior and high-value product flows.',
      'Combine functional testing with API validation and regression checks.',
      'Document defects with enough detail to make technical analysis faster.',
      'Iterate the QA process as the product and team needs evolved.'
    ],
    tools: ['Cypress', 'Postman', 'JavaScript', 'Python', 'Scrum', 'API Testing'],
    deliverables: [
      'QA process support for industrial telemetry workflows.',
      'Test scenarios for data and product behavior validation.',
      'Automation and API validation support.',
      'Defect documentation focused on traceability.'
    ],
    impact: [
      'Helped reduce delivery risk in data-driven product workflows.',
      'Improved the clarity of testing around telemetry behavior and integrations.',
      'Built experience in QA for industrial and operational systems.'
    ],
    confidentialityNote:
      'Specific implementation details, customer data, environments and internal processes are not disclosed.',
    repoUrl: null
  },
  {
    title: 'Environmental Licensing Systems',
    category: 'Environmental',
    status: 'Completed',
    visual: 'ENV',
    shortSummary:
      'QA for environmental licensing systems, focused on controlled processes, business rules, documentation and regression reliability.',
    context:
      'This case study covers QA work in environmental licensing platforms where workflows, documentation and data validation need to remain consistent.',
    challenge:
      'Licensing systems can involve complex process steps, regulatory expectations, data dependencies and regression risks across different workflows.',
    role:
      'I supported test strategy, scenario design, functional validation, regression checks, defect reporting and documentation practices.',
    strategy: [
      'Map business rules and process risks before writing scenarios.',
      'Validate critical steps, data consistency and expected workflow behavior.',
      'Use regression checks to protect stable flows over time.',
      'Keep evidence and bug reports clear for technical and non-technical stakeholders.'
    ],
    tools: ['Cypress', 'Selenium', 'Postman', 'Jira', 'GitLab', 'Regression Testing'],
    deliverables: [
      'Documented test scenarios for licensing workflows.',
      'Functional and regression validation support.',
      'API-oriented checks where relevant to the flow.',
      'Clear defect reports and evidence records.'
    ],
    impact: [
      'Supported more reliable validation of environmental licensing workflows.',
      'Improved QA organization around process-driven systems.',
      'Added practical experience with regulated and documentation-heavy products.'
    ],
    confidentialityNote:
      'The case study is intentionally generalized and does not expose internal data, clients, environments or sensitive workflows.',
    repoUrl: null
  }
];
