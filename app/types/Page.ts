export interface IPage {
  type: 'flashcard' | 'mcq';
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user: IUser;
  image?: string;
  question?: string;
  options: IOption[];
}
export interface IUser {
  name: string;
  avatar: string;
}

export interface IOption {
  id: string;
  answer: string;
}
