import { Dispatch, SetStateAction } from "react";

export interface ITopic {
    chapter: string;
    description: string;
    subtopics: Array<ISubtopic>;
  }

export interface ISubtopic {
    title: string;
    youtubeLink: string;
    leetcodeLink: string;
    articleLink: string;
    level: string;
    _id:string;
  }

export interface ISubtopicListProps {
    subtopics: ISubtopic[];
    progress:string[];
    setProgress:Dispatch<SetStateAction<string[]>>;
}

export interface ITopicProgress{
    subtopics: ISubtopic[];
    progress:string[];
}

export interface IProgress {
    topicId: string;
    completed: boolean;
    _id?:string;
  }