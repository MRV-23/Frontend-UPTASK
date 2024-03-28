import api from "@/lib/axios";
import { ProjectFormData } from "../types";

export async function CreateProject(formData:ProjectFormData){
    console.log(formData)
    try {
        const { data } = await api.post('/project')
        console.log('respuesta-data: ',data)
        
    } catch (error) {
        
    }
}