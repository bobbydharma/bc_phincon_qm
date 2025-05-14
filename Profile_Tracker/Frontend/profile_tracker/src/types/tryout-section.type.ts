export interface TryoutSectionType {
    id: string;
    code: string;
    title: string;
    description: string | null;
    order: number;
    data: DataTryoutSectionType;
    tag: string;
    active: number;
    createdAt: string;
    updatedAt: string;
}

export interface DataTryoutSectionType {
    icon: string;
    type: string;
    telegram: {
        shortId: string;
    }
    startDate: string;
    endDate: string;
}

export interface TryoutSectionStateType {
    tryoutResponse: {
        tryoutSections: TryoutSectionType[] | null,
        progressTryourt: number
    }
    loading: boolean;
    error: string | null;
    message: string | null;
    status: number | null;
}