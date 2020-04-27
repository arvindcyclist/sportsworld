import React, {useState, useEffect} from 'react'
import RoadNav from '../component/RoadNav'
import roadEventData from '../assets/roadevents.json'
function RoadEvents(){
    useEffect(()=>{
        fetchItems()
    },[])
    
    const [items, setItems] = useState([])

    const fetchItems = async () =>{
       const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
       const items=await data.json()
       setItems(items)
    }

    const tableContent = items.map(item =>(
                
                    
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        </tr>
    ))

    const eventData = roadEventData.map((data, index) =>(
        <tr key={index}>
            <td>{data.date}</td>
            <td>{data.venue}</td>
            <td>{data.category}</td>
        </tr>

    ))
    
    
    const searchContent = () =>{
        let input, filter, table, tr, td, i, txtValue
        input = document.getElementById("searchInput")
        filter = input.value.toUpperCase();
        table = document.getElementById("searchTable")
        tr = document.getElementsByTagName("tr")
        for(i=0;i<tr.length; i++){
            td = tr[i].getElementsByTagName("td")[1];
            if(td){
                txtValue = td.textContent || td.innerText
                if(txtValue.toUpperCase().indexOf(filter) > -1){
                    tr[i].style.display = ""
                }else{
                    tr[i].style.display="none"
                }
            }
        }
    }
    return(
        <div>
            <h2>ROAD</h2>
            <div>
                <RoadNav></RoadNav>
            </div>
            <p></p>
            <div>
            <input id="searchInput" className="searchEvents" placeholder="Search by state , city or place." onKeyUp={searchContent}/>
            </div>
            
            <div>
                <table id="searchTable">
                    <tbody>
                        <tr>
                        <th>Date</th>
                        <th>venue</th>
                        <th>Category</th>
                        </tr>
                    {eventData}
                    </tbody>
                    
                </table>
            
            </div>
        </div>
    )
}

export default RoadEvents