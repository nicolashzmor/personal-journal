import {JournalContext, JournalContextDetail} from "./models/context.models";
import faker from '@faker-js/faker';
import {JournalTask} from "./models/tasks.models";


export const journalTaskGenerator: () => JournalTask = () => ({
    $id: faker.random.uuid(),
    description: faker.lorem.paragraph(5),
    title: faker.lorem.sentence(3),
    date: faker.date.future().toDateString()
})

export const journalContextsGenerator: (tasks_q?: number) => JournalContext = (tasks_q = 0) => ({
    name: faker.lorem.sentence(5),
    $id: faker.random.uuid(),
    tasks_q
})

export const journalContextDetailsGenerator: (tasks_q: number) => JournalContextDetail = (tasks_q) => ({
    ...journalContextsGenerator(tasks_q),
    tasks: listOf(journalTaskGenerator, tasks_q)
})

type ListGenerator = <T = any>(generator: (...args: any[]) => T, length: number, ...args: any[]) => T[]
export const listOf: ListGenerator = (generator, length, ...args: any[]) => Array.from({length: length}).map(() => generator(...args))