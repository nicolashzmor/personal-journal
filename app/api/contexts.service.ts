import {Appwrite, Models, Query} from 'appwrite';

import TasksService from './tasks.service';

const ContextsCollectionID = '620546c17622bbdd0cdf'

const GetAll = (api: Appwrite) => () => api.database.listDocuments(ContextsCollectionID)
    .then(async ({documents: contexts}) => {
        const mappers: Promise<any>[] = contexts.map(
            async (context: Models.Document) => {
                const tasks = await TasksService(api).getAll([Query.equal('context', context.$id)])
                return {
                    ...context,
                    tasks_q: tasks.length
                }
            }
        )
        contexts = await Promise.all(mappers)

        return contexts
    })

const GetDetail = (api: Appwrite) => (id: string) => api.database.getDocument(ContextsCollectionID, id).then(async context => {
    const tasks = await TasksService(api).getAll([Query.equal('context', context.$id)])
    return {
        ...context,
        tasks_q: tasks.length,
        tasks
    }
})

export const Service = (api: Appwrite) => ({
    getAll: GetAll(api),
    getDetail: GetDetail(api)
})

export default Service;