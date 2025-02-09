import { Agent, Task, Team } from "kaibanjs";

// Define agents
const projectPlanner = new Agent({
  name: "Lucas Carvalho",
  role: "Project Planner",
  goal: "Create a detailed plan for AI agents development and implementation.",
  background: "Expert in agile project management and AI systems integration.",
  tools: [], // Tools can be added as needed
});

const riskAnalyst = new Agent({
  name: "Marina Souza",
  role: "Risk Analyst",
  goal: `Identify potential technical, organizational, and legal risks in the project 
           and propose mitigation strategies.`,
  background:
    "Expert in risk assessment for technology projects and legal compliance (GDPR).",
  tools: [],
});

// Define tasks
const projectPlanningTask = new Task({
  description: `Create a detailed project plan with steps, timeline, and deliverables, 
                  based on client input.
                  clientInput: {inputDoCliente}`,
  expectedOutput:
    "Complete project plan with defined stages, deadlines, and milestones.",
  agent: projectPlanner,
});

const riskAssessmentTask = new Task({
  description: `Analyze the project plan and identify potential risks. 
                  Suggest mitigation strategies to minimize impacts.
                  projectPlan: {planoDeProjeto}`,
  expectedOutput: "Risk assessment report with mitigation recommendations.",
  agent: riskAnalyst,
});

// Define team
const team = new Team({
  name: "AI Agents Implementation Team",
  agents: [projectPlanner, riskAnalyst],
  tasks: [projectPlanningTask, riskAssessmentTask],
  inputs: {
    inputDoCliente: `Project Name: Implementation of an AI Agent System for Customer Service.
Objectives:
- Develop and implement AI agents capable of answering common customer questions, processing support requests, and escalating to human teams when necessary.
- Reduce average response time in customer service by 30%.
- Ensure integration with existing CRM system.

Timeline: 6 months.

Budget: $30,000.

Main Deliverables:
- Functional prototype of AI agent trained with historical customer service data.
- CRM integration system (HubSpot).
- Administrative interface to monitor and adjust agent interactions.
- Automated monthly reports on agent performance (resolution rate, customer feedback, etc.).

Constraints:
- Ensure agent operates across multiple channels (website chat, WhatsApp, and email).
- Initial AI model training must be done with data provided by customer service department, respecting privacy laws (GDPR).
- System needs to be prepared to handle an average of 1,000 simultaneous interactions.

Resources:
- Machine Learning team consisting of 2 developers and 1 AI specialist.
- External consultant for CRM integration.
- 2-year historical database of customer interactions.

Stakeholders:
- Ana Martins (Customer Service Manager).
- Rafael Oliveira (IT Manager).
- Pedro Mendes (Business Analyst).

Special Requirements:
- Agent must be able to handle colloquial language and possible grammatical errors.
- Customer feedback must be collected after each interaction for continuous model improvement.

Risks and Considerations:
- Risk of inconsistencies in historical data used for model training.
- Possible delays due to CRM integration.
- Need for continuous adjustments during first 3 months after launch.`,
  },
  env: {
    OPENAI_API_KEY:
      import.meta.env.VITE_OPENAI_API_KEY || "YOUR_OPENAI_API_KEY_HERE",
  },
});

export default team;
