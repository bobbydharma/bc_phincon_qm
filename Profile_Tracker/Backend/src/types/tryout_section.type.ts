export interface TryoutSectionModel {
    id: string;
    code: string;
    description: string;
    title: string;
    order: number;
    tag: string;
    active: number;
    data?: JSON;
}