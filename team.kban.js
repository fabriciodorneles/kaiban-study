import { Agent, Task, Team } from "kaibanjs";

// Define agents
const projectPlanner = new Agent({
  name: "Lucas Carvalho",
  role: "Project Planner",
  goal: "Create a detailed plan for a creating a board game.",
  background: "Expert in agile project management and Board game design.",
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
    inputDoCliente: `Project Name: Medieval Fantasy Trading Card Game - "Kingdoms & Legends"

Objectives:
- Design and develop a strategic card-based board game for 2-4 players with medieval fantasy theme.
- Create engaging gameplay mechanics that balance luck and strategy.
- Ensure average game duration of 45-60 minutes.

Timeline: 4 months.

Budget: $15,000.

Main Deliverables:
- Complete rulebook with gameplay mechanics and card interactions.
- 200 unique card designs with artwork and balanced attributes.
- Game board design and prototype.
- Playtesting documentation and balance adjustments.
- Print-ready files for cards, board, and packaging.

Constraints:
- Cards must be standard poker size (2.5" x 3.5") for cost-effective production.
- Game mechanics must be easily learned within 15 minutes.
- All artwork must be original or properly licensed.
- Components must fit within a 12" x 12" x 2" box.

Resources:
- Game designer (lead)
- Graphic artist for card illustrations
- Professional editor for rulebook
- 3D designer for game pieces
- Print production specialist

Stakeholders:
- Michael Chen (Lead Game Designer)
- Sarah Williams (Art Director)
- David Thompson (Production Manager)
- Lisa Garcia (Marketing Director)

Special Requirements:
- Color-blind friendly design elements
- Multi-language support for rules (English, Spanish, French)
- Durable card stock with linen finish
- Environmental-friendly packaging materials

Risks and Considerations:
- Potential artwork delivery delays
- Balance issues discovered during playtesting
- Manufacturing lead times may affect launch schedule
- Competition from similar games in the market
- Initial print run quantity decisions`,
  },
  env: {
    OPENAI_API_KEY:
      import.meta.env.VITE_OPENAI_API_KEY || "YOUR_OPENAI_API_KEY_HERE",
  },
});

export default team;
