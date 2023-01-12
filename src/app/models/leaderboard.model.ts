export interface Honor {
    codewarsId: string;
    username: string;
    name: string;
    honor: number;
}


export interface Filter {
    username: string;
    codewarsId: string;
    name: string;
    ranks: {
        overall: {
            rank: string;
            name: string;
            color: string;
            score: number;
        },
        languages: {
            [key: string]: {
                rank: string;
                name: string;
                color: string;
                score: number;
            }
        }
    }
}
