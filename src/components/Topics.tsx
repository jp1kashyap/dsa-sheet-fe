import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import api from '../api/api';
import { AxiosResponse } from 'axios';
import SubTopics from './SubTopics';
import { IProgress, ITopic } from './interface';
import axios from 'axios';
import toast from 'react-hot-toast';
import TopicProgress from './ProgressBar';
const Topics:React.FC=()=> {
    const [progress, setProgress] = useState<string[]>([]);
    const [topics, setTopics]=useState([])
    const fetchTopics = async ()=> {
    let result:AxiosResponse = await api.get("/topics");
    setTopics(result.data.data);
    }
    
    useEffect(()=>{
        const fetchProgress = async ()=> {
            try{
                const result = await api.get("/progress");
                const completed = result.data.progress.map((prog:IProgress)=>prog.completed ? prog.topicId : '');
                setProgress(completed);
                }catch(error){
                    if (axios.isAxiosError(error)) {
                        toast.error(error.response?.data.message)
                    }
                }
                fetchTopics();
        }
        fetchProgress();
    },[])

  return (
    <Accordion defaultActiveKey="0">
        {topics && topics.map((topic:ITopic,i)=>(
        <Accordion.Item eventKey={topic.chapter} key={i}>
            <Accordion.Header>{topic.chapter}  <TopicProgress subtopics={topic.subtopics} progress={progress} /></Accordion.Header>
            <Accordion.Body>
            <SubTopics subtopics={topic.subtopics} progress={progress} setProgress={setProgress} />
            </Accordion.Body>
        </Accordion.Item>
        ))}
    </Accordion>
  );
}

export default Topics;