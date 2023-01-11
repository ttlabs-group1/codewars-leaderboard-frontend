export interface UserDetail {
  username: string;
  name: string;
  honor: number;
  clan: string;
  ranks: {
    overall: {
      rank: string;
      name: string;
      color: string;
      score: number;
    };
    languages: {
      java: {
        rank: string;
        name: string;
        color: string;
        score: number;
      };
    };
  };
  comments: string[];
}
