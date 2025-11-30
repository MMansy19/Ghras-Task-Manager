import {
  Project,
  TaskLink,
  CreateProjectInput,
  UpdateProjectInput,
  ProjectSchema,
} from '../types';

// Mock Projects Data
export let MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'موقع الأكاديمية الرسمي',
    description: 'بناء وتطوير الموقع الرسمي للأكاديمية',
    active: true,
    team_id: 3,
    created_by: 1,
    created_at: '2025-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'دورة التسويق الرقمي',
    description: 'إنتاج محتوى وتطوير منصة الدورة',
    active: true,
    team_id: 2,
    created_by: 1,
    created_at: '2025-02-01T00:00:00Z',
  },
  {
    id: 3,
    name: 'تطبيق إدارة المشاريع',
    description: 'تطوير تطبيق ويب لإدارة مشاريع الأكاديمية',
    active: true,
    team_id: 3,
    created_by: 1,
    created_at: '2025-03-01T00:00:00Z',
  },
  {
    id: 4,
    name: 'حملة توعية الخصوصية',
    description: 'إعداد محتوى توعوي حول الخصوصية الرقمية',
    active: true,
    team_id: 5,
    created_by: 1,
    created_at: '2025-04-01T00:00:00Z',
  },
];

// Mock Task Links Data
export let MOCK_TASK_LINKS: TaskLink[] = [
  { id: 1, source_task_id: 1, linked_task_id: 7, created_at: '2025-11-20T00:00:00Z' },
  { id: 2, source_task_id: 2, linked_task_id: 8, created_at: '2025-11-21T00:00:00Z' },
];

let nextProjectId = 5;
let nextTaskLinkId = 3;

const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Project API Functions
export const fetchProjects = async (): Promise<Project[]> => {
  await delay();
  return MOCK_PROJECTS.map(project => ProjectSchema.parse(project));
};

export const fetchProjectById = async (id: number): Promise<Project> => {
  await delay();
  const project = MOCK_PROJECTS.find(p => p.id === id);
  if (!project) throw new Error('المشروع غير موجود');
  return ProjectSchema.parse(project);
};

export const createProject = async (input: CreateProjectInput & { created_by: number }): Promise<Project> => {
  await delay();
  const newProject: Project = {
    id: nextProjectId++,
    name: input.name,
    description: input.description || null,
    active: true,
    team_id: input.team_id || null,
    created_by: input.created_by,
    created_at: new Date().toISOString(),
  };
  const parsed = ProjectSchema.parse(newProject);
  MOCK_PROJECTS.push(parsed);
  return parsed;
};

export const updateProject = async (id: number, input: UpdateProjectInput): Promise<Project> => {
  await delay();
  const index = MOCK_PROJECTS.findIndex(p => p.id === id);
  if (index === -1) throw new Error('المشروع غير موجود');

  MOCK_PROJECTS[index] = { ...MOCK_PROJECTS[index], ...input };
  return ProjectSchema.parse(MOCK_PROJECTS[index]);
};

export const deleteProject = async (id: number): Promise<void> => {
  await delay();
  const index = MOCK_PROJECTS.findIndex(p => p.id === id);
  if (index === -1) throw new Error('المشروع غير موجود');
  MOCK_PROJECTS.splice(index, 1);
};

// Task Link API Functions
export const fetchTaskLinks = async (sourceTaskId: number): Promise<TaskLink[]> => {
  await delay();
  // Return links where task is either source or target (bidirectional)
  return MOCK_TASK_LINKS.filter(link => 
    link.source_task_id === sourceTaskId || link.linked_task_id === sourceTaskId
  ).map(link => {
    // If current task is the linked_task_id, swap the direction for display
    if (link.linked_task_id === sourceTaskId) {
      return {
        ...link,
        source_task_id: link.linked_task_id,
        linked_task_id: link.source_task_id,
      };
    }
    return link;
  });
};

export const createTaskLink = async (sourceTaskId: number, linkedTaskId: number): Promise<TaskLink> => {
  await delay();
  
  // Prevent self-linking
  if (sourceTaskId === linkedTaskId) {
    throw new Error('لا يمكن ربط المهمة بنفسها');
  }

  // Prevent duplicate links (check both directions)
  if (MOCK_TASK_LINKS.some(link => 
    (link.source_task_id === sourceTaskId && link.linked_task_id === linkedTaskId) ||
    (link.source_task_id === linkedTaskId && link.linked_task_id === sourceTaskId)
  )) {
    throw new Error('هذا الربط موجود بالفعل');
  }

  const newLink: TaskLink = {
    id: nextTaskLinkId++,
    source_task_id: sourceTaskId,
    linked_task_id: linkedTaskId,
    created_at: new Date().toISOString(),
  };

  MOCK_TASK_LINKS.push(newLink);
  return newLink;
};

export const deleteTaskLink = async (linkId: number): Promise<void> => {
  await delay();
  const index = MOCK_TASK_LINKS.findIndex(link => link.id === linkId);
  if (index === -1) throw new Error('الرابط غير موجود');
  MOCK_TASK_LINKS.splice(index, 1);
  // Note: Since we show bidirectional links, deleting one link removes it from both tasks
};
