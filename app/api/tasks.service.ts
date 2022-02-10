import {Appwrite} from 'appwrite';

const TasksCollectionID = '62054abc9af60b7e118b'

const GetAll = (api: Appwrite) => (...params: any[]) => api.database.listDocuments(TasksCollectionID, ...params).then(({documents: tasks}) => tasks)

const GetTask = (api: Appwrite) => (id: string) => api.database.getDocument(TasksCollectionID, id)

const Service = (api: Appwrite) => ({
    getAll: GetAll(api),
    getTask: GetTask(api)
})

export default Service;