export interface InitialStateTypes {
  actionInfo: InitialStateAction;
  tasks: {
    tasks: string[];
    answerTask: string[];
    showResultTask: boolean;
  };
}

export interface InitialStateAction {
  actionMark: string[];
  difficulty: string;
  count: string;
}
