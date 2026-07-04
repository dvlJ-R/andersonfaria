export const heroBadges = [
  'Playwright',
  'Cypress',
  'TypeScript',
  'Postman',
  'GitLab CI/CD',
  'API Testing',
  'Risk-based Testing'
];

export const footerSkills = [
  'Playwright',
  'Cypress',
  'TypeScript',
  'Postman',
  'GitLab CI/CD',
  'API Testing',
  'Regression Testing',
  'QA Documentation'
];

export const skillCategories = [
  {
    title: 'Testing Strategy',
    level: 'Strong experience',
    description:
      'Planning test coverage around product risks, regression needs, exploratory sessions and clear defect evidence.',
    skills: [
      'Functional Testing',
      'Regression Testing',
      'Exploratory Testing',
      'Risk-based Testing',
      'Defect Analysis',
      'Evidence Reporting'
    ]
  },
  {
    title: 'Automation',
    level: 'Hands-on experience',
    description:
      'Building maintainable E2E suites with readable structure, reusable flows and practical execution feedback.',
    skills: ['Playwright', 'Cypress', 'TypeScript', 'JavaScript', 'Page Objects', 'Fixtures']
  },
  {
    title: 'API & Backend Validation',
    level: 'Hands-on experience',
    description:
      'Validating endpoints, payloads, authentication flows and business rules beyond the browser UI.',
    skills: ['Postman', 'REST APIs', 'Payload Validation', 'Authentication Flows', 'Swagger/OpenAPI']
  },
  {
    title: 'CI/CD & Collaboration',
    level: 'Hands-on experience',
    description:
      'Working with agile teams, issue tracking, documentation and pipeline feedback to make quality visible.',
    skills: ['GitLab CI/CD', 'Git', 'GitHub', 'Jira', 'GitLab Issues', 'Scrum/Kanban']
  },
  {
    title: 'Data & Systems',
    level: 'Hands-on experience',
    description:
      'Testing complex systems where data, maps, files, integrations and workflows need careful validation.',
    skills: ['SQL', 'PostgreSQL', 'PostGIS context', 'DBeaver', 'Geospatial Systems', 'Logs Investigation']
  },
  {
    title: 'Future Focus',
    level: 'Currently improving',
    description:
      'Learning and researching modern QA directions without presenting them as production AI or game QA experience.',
    skills: [
      'AI-assisted QA Workflow',
      'Prompt-driven Technical Analysis',
      'Human-in-the-loop Validation',
      'AI-assisted Testing',
      'Synthetic Test Data',
      'AI-supported Bug Analysis',
      'Game QA Fundamentals'
    ]
  }
];

export const qualityApproach = {
  eyebrow: 'How I work',
  title: 'Quality approach built around product risk',
  subtitle:
    'I approach QA as a practical engineering discipline: understand the product, focus on the risks that matter, validate the system from API to UI and keep evidence clear for the whole team.',
  steps: [
    {
      title: 'Understand product risks',
      description:
        'Start from user flows, business rules, integrations and failure points before deciding what should be tested.'
    },
    {
      title: 'Define test strategy',
      description:
        'Choose the right balance between exploratory testing, regression coverage, API checks and E2E automation.'
    },
    {
      title: 'Design meaningful scenarios',
      description:
        'Create scenarios that reflect real product behavior, edge cases and acceptance criteria, not only happy paths.'
    },
    {
      title: 'Validate APIs and business rules',
      description:
        'Use API validation to check payloads, status codes, authentication flows and data consistency earlier.'
    },
    {
      title: 'Automate critical flows',
      description:
        'Prioritize automation where it reduces regression risk, improves feedback and stays maintainable over time.'
    },
    {
      title: 'Integrate tests into CI/CD',
      description:
        'Connect automated checks to pipeline feedback so teams can catch regressions closer to delivery.'
    },
    {
      title: 'Document evidence and defects',
      description:
        'Report bugs with context, reproduction steps, expected behavior, actual behavior and useful evidence.'
    },
    {
      title: 'Improve continuously',
      description:
        'Review flaky tests, gaps, repeated bugs and process bottlenecks to keep quality work evolving with the product.'
    }
  ]
};
