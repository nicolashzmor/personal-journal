export interface JournalTask {
    $id: string;
    context: string;
    title: string;
    description?: string;
    date?: string;
    completed?: boolean;
}