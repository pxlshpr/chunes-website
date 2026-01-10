import { LinearClient } from "@linear/sdk";

const linearClient = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY,
});

export interface TaskDetails {
  id: string;
  identifier: string;
  title: string;
  description: string | null;
  state: {
    name: string;
    type: string;
    color: string;
  } | null;
  priority: number;
  priorityLabel: string;
  estimate: number | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  assignee: {
    id: string;
    name: string;
    avatarUrl: string | null;
  } | null;
  labels: {
    id: string;
    name: string;
    color: string;
  }[];
  url: string;
}

export async function fetchTaskDetails(
  identifier: string
): Promise<TaskDetails | null> {
  try {
    const issue = await linearClient.issue(identifier);

    if (!issue) return null;

    const state = await issue.state;
    const assignee = await issue.assignee;
    const labelsConnection = await issue.labels();
    const labels = labelsConnection?.nodes || [];

    return {
      id: issue.id,
      identifier: issue.identifier,
      title: issue.title,
      description: issue.description || null,
      state: state
        ? {
            name: state.name,
            type: state.type,
            color: state.color,
          }
        : null,
      priority: issue.priority,
      priorityLabel: issue.priorityLabel,
      estimate: issue.estimate || null,
      dueDate: issue.dueDate || null,
      createdAt: issue.createdAt.toISOString(),
      updatedAt: issue.updatedAt.toISOString(),
      completedAt: issue.completedAt?.toISOString() || null,
      assignee: assignee
        ? {
            id: assignee.id,
            name: assignee.name,
            avatarUrl: assignee.avatarUrl || null,
          }
        : null,
      labels: labels.map((label) => ({
        id: label.id,
        name: label.name,
        color: label.color,
      })),
      url: issue.url,
    };
  } catch (error) {
    console.error(`Error fetching task ${identifier}:`, error);
    return null;
  }
}

export async function fetchLiveTaskStatuses(
  taskIds: string[]
): Promise<Map<string, { status: string; statusType: string; color: string }>> {
  const statusMap = new Map();

  try {
    for (const id of taskIds) {
      const issue = await linearClient.issue(id);
      if (issue) {
        const state = await issue.state;
        if (state) {
          statusMap.set(id, {
            status: state.name,
            statusType: state.type,
            color: state.color,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error fetching task statuses:", error);
  }

  return statusMap;
}

export { linearClient };
