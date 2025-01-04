import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ISubtopic, ISubtopicListProps } from './interface';
import api from '../api/api';
import toast from 'react-hot-toast';
import axios from 'axios';
const SubTopics:React.FC<ISubtopicListProps> = ({subtopics,progress,setProgress}) => {
    const handleCheck = async (event:any,id:string)=>{
        const checked=event.target.checked;
        try{
            const result = await api.post("/progress",{topicId:id,completed:checked});
            toast.success(result.data.message)
            if(checked){
                setProgress([...progress,id]);
            }else{
                const newArr = progress.filter((item) => item !== id);
                setProgress(newArr)
            }
        }catch(error){
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message)
            }
        }
    }
    
  return (
    <div>
      <Table bordered responsive>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Youtube link</th>
          <th>Leetcode link</th>
          <th>Article link</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        {subtopics && subtopics.map((subtopic:ISubtopic,i)=>(
            <tr key={i}>
            <td><input type='checkbox' id={subtopic._id} defaultChecked={progress && progress.includes(subtopic._id)} onChange={(event)=>handleCheck(event,subtopic._id)} /></td>
            <td>{subtopic.title}</td>
            <td><Link to={subtopic.youtubeLink}>Youtube link</Link></td>
            <td><Link to={subtopic.leetcodeLink}>Leetcode link</Link></td>
            <td><Link to={subtopic.articleLink}>Article link</Link></td>
            <td>{subtopic.level}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default SubTopics
