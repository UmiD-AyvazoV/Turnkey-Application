import { useState } from 'react';


export default function Table() {

    const arr = [
        {
        taskId: 1,
        taskName: 'Cable Installation',
        taskStatus: 0,
        parentId: null,
        },
        {
        taskId: 2,
        taskName: 'Cable Tray Installation',
        taskStatus: 0,
        parentId: 1,
        },
        {
        taskId:3,
        taskName:'Tray Installation',
        taskStatus:0,
        parentId:2
        },
        {
        taskId:4,
        taskName:' Tray Connection',
        taskStatus:0,
        parentId:2
        },
        {
        taskId:5,
        taskName:'Cable Installation',
        taskStatus:0,
        parentId:1
        },
        {
        taskId: 6,
        taskName: 'Gaugeing',
        taskStatus: 0,
        parentId: null,
        },
    ]

    const [ data , setData ] = useState(arr);

    const del = (index) => {
        setData(data.filter( f => f.taskId !== index ));
    }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        { data.length === 0 && <h2>Empty</h2>}
        {data.map((data , index) => (
          <tr key={index}>
            <th scope="row">{data.taskId}</th>
            <td>{data.taskName}</td>
            <td>{data.taskStatus}</td>
            <td>
                <button type="button" class="btn btn-danger me-2" onClick={ () => del(data.taskId) }>Del</button>
                <button type="button" class="btn btn-success">Start</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
