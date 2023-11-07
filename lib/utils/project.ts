import { TProject } from "@/app/types/features/project";

/**
 * Get the URL of a project
 * @param project The project to get the URL of
 * @returns The URL of the project
 */
export const getProjectUrl = (project: TProject) => {
    return `/project/${project.username}`;
}