import react, { useEffect, useState } from 'react';



const Test = props => {
    const [studentState, setStudentState] = useState([]);

    useEffect(() => {
        let studentState = [
            {
                id:1,firstname:"stone", lastname: "cold"
            },
            {
                id:2,firstname:"stone", lastname: "cold"
            },
            {
                id:3,firstname:"stone", lastname: "cold"
            },
            {
                id:4,firstname:"stone", lastname: "cold"
            },
        ];
        setStudentState(
            studentState.map(d => {
                return{
                    id: d.id,
                    select:false,
                    firstname:d.firstname,
                    lastname:d.lastname,
                    major:d.major
                }
            })
        );
    },[]);



    return(
        <div>
            {studentState.map((item, i) => {
                return(
                    <div key={i}>
                        <span>
                            <input type="checkbox" checked={item.select} onChange={(event)=> {
                                let checked=event.target.checked;
                                setStudentState(studentState.map((data)=>{
                                    if( item.id === data.id) {
                                        data.select=!data.select;
                                    }
                                    return data;
                                }))
                            }}/>
                        </span>
                        <span>firstname: {item.firstname}</span>
                        <span>lastname: {item.lastname}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Test;