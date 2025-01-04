import ProgressBar from 'react-bootstrap/ProgressBar';
import { ISubtopic, ITopicProgress } from './interface';

const TopicProgress:React.FC<ITopicProgress>=({subtopics,progress})=> {
    let completed=0;
    subtopics.forEach((topic:ISubtopic)=>{
        if(progress.includes(topic._id)){
            completed++;
        }
    });
  const now =subtopics.length?Math.floor((completed*100)/subtopics.length):0;

  return <ProgressBar now={now} label={`${now}%`} />;
}

export default TopicProgress;