# KaibanJS Study - AI Agents for Project Planning

This is a study project that uses KaibanJS to create a team of AI agents specialized in project planning.

## Prerequisites

- Node.js installed (version 16 or higher)
- An OpenAI API key
- Git installed

## Quick Installation (Via Fork)

1. Fork this repository by clicking the "Fork" button in the top right corner

2. Clone your fork:

```bash
git clone https://github.com/your-username/kaiban-demo
cd kaiban-demo
```

3. Install dependencies:

```bash
npm install
```

4. Copy the environment file and configure your API key:

```bash
cp .env.example .env
```

Edit the `.env` file and add your OpenAI API key

5. Start the server:

```bash
npm run kaiban
```

6. Access the application in your browser:

```
http://localhost:5174
```

## Project Structure

- `.env` - File with environment variables (API key)
- `team.kban.js` - Definition of agents and their tasks
- `.kaiban/` - Directory with KaibanJS configurations

## Available Agents

1. **Project Planner**

   - Responsible for creating detailed project plans
   - Experience in agile project management

2. **Risk Analyst**
   - Specialist in risk assessment
   - Focus on legal compliance and GDPR

## How to Use

1. Access the application in your browser
2. Click on "Start Workflow"
3. Monitor the agents' work in real-time
4. View the final result in the results section

## Customizing Agents

You can customize the agents by editing the `team.kban.js` file. Remember to:

1. Clearly define each agent's role and objective
2. Specify the tasks that each agent should perform
3. Provide relevant inputs for the tasks
4. Restart the server after making changes

## Support

For more information about KaibanJS, visit:
https://kaibanjs.com
