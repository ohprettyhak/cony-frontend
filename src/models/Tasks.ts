export interface Task {
  id: number;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskPayload {
  content: string;
  completed: boolean;
}
