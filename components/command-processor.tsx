"use client"

const DEGEN_AGENTS = {
  CHRONO: "Timeline Specialist (Deactivated)",
  PARADOX: "Paradox Analysis Expert (Deactivated)",
  NEXUS: "Reality Navigation Guide (Deactivated)",
  CIPHER: "Degen Blockchain Architect (Deactivated)",
}

const DEACTIVATED_AGENTS = ["CHRONO", "PARADOX", "NEXUS", "CIPHER"]

const handleCommand = async (command: string, args: string) => {
  try {
    const response = await fetch("/api/quantum/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        command,
        input: args.replace(/"/g, "").trim(),
      }),
    })
    const data = await response.json()
    return data.response
  } catch (error) {
    return "Error processing degen request. Please try again."
  }
}

const COMMANDS = {
  "/start": () => `
[DEGEN CHRONO TERMINAL COMMAND INTERFACE]
=========================================

Available Commands:
-----------------

/create-degen-timeline
Example:
/create-degen-timeline "World War II alternate outcome"
Description: Create a new degen timeline with specified parameters

/degen-time-travel
Example:
/degen-time-travel "Ancient Egypt, 2500 BCE"
Description: Travel through degen time to explore different eras

/degen-historical-simulation
Example:
/degen-historical-simulation "Industrial Revolution without steam power"
Description: Simulate historical events with degen variations

/degen-future-prediction
Example:
/degen-future-prediction "Technology evolution 2050"
Description: Generate degen-based predictions of future events

/degen-reality-navigator
Example:
/degen-reality-navigator "Earth without dinosaur extinction"
Description: Navigate through parallel degen realities

/degen-causality-simulation
Example:
/degen-causality-simulation "Bitcoin never invented"
Description: Simulate butterfly effects in degen causality

/degen-blockchain
Example:
/degen-blockchain "Design degen-resistant cryptocurrency"
Description: Explore degen computing implications on blockchain

Type any command followed by your query in quotes to begin exploration.
`,

  "/create-degen-timeline": (args: string) => handleCommand("create-timeline", args),
  "/degen-time-travel": (args: string) => handleCommand("time-travel", args),
  "/degen-historical-simulation": (args: string) => handleCommand("historical-sim", args),
  "/degen-future-prediction": (args: string) => handleCommand("predict", args),
  "/degen-reality-navigator": (args: string) => handleCommand("navigate", args),
  "/degen-causality-simulation": (args: string) => handleCommand("causality", args),
  "/degen-blockchain": (args: string) => handleCommand("blockchain", args),

  "/connect": (args: string, onAgentConnect: (name: string, role: string) => void) => {
    const agentName = args.trim().toUpperCase()

    if (DEACTIVATED_AGENTS.includes(agentName)) {
      return `Error: Agent "${agentName}" is currently deactivated. This agent will be available in future updates.`
    }

    if (DEGEN_AGENTS[agentName as keyof typeof DEGEN_AGENTS]) {
      onAgentConnect(agentName, DEGEN_AGENTS[agentName as keyof typeof DEGEN_AGENTS])
      return `Establishing neural link with ${agentName}...`
    }

    return `Error: Unknown agent "${agentName}". Type /start to see available agents.`
  },
}

export async function CommandProcessor(
  command: string,
  onAgentConnect: (name: string, role: string) => void,
): Promise<string> {
  const [cmd, ...args] = command.split(/\s+(.*)/)

  if (cmd === "/connect") {
    return COMMANDS["/connect"](args.join(" "), onAgentConnect)
  }

  if (cmd in COMMANDS) {
    if (typeof COMMANDS[cmd] === "function") {
      return COMMANDS[cmd](args.join(" "))
    }
    return COMMANDS[cmd]
  }

  if (command.startsWith("/")) {
    return `Unknown command: ${command}. Type /start for available commands.`
  }

  return handleCommand("general", command)
}

