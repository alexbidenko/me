export enum Category {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVOPS = 'devops',
}

type PeriodType = [string] | [string, string]

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  role: string;
  categories: Category[];
  stack: string[];
  tasks: string[];
  period: {
    from: PeriodType;
    to: PeriodType;
  };
};
