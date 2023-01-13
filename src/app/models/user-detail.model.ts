import { Comment } from './comment.model';

export interface UserDetail {
  id: string;
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
      [key: string]: {
        rank: string;
        name: string;
        color: string;
        score: number;
      };
    };
  };
  comments: Comment[];
}
