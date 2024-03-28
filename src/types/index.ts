import { string, z } from 'zod'

export const projectSchema = z.object({
    _id: string(),
    projectName: string(),
    clientName:  string(),
    description: string()
})

export type Project = z.infer<typeof projectSchema>
export type ProjectFormData = Pick<Project, 'clientName' | 'projectName' | 'description'>