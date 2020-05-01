import React, {useState, useEffect} from 'react'
import RoadNav from '../NavLinkComponent/RoadNav'
import roadEventData from '../assets/roadevents.json'
import {Card, OverlayTrigger, Button} from 'react-bootstrap'
function RoadEvents(){
    useEffect(()=>{
        fetchItems()
    },[])
    
    const [items, setItems] = useState([])
    

    const fetchItems = async () =>{
       const data = await fetch('http://127.0.0.1:3004/road')
       const items=await data.json()
       setItems(items)
    }

    const tableContent = items.map(item =>(
        <tr key={item.id}>
        <td>{item.date}</td>
        <td>{item.title}</td>
        <td>{item.venue}</td>
        <td>{item.contact}</td>
        </tr>
    ))
    const showDetails =(venue)=>{
       //pop up login
       alert(`this is not ${venue}`)
    }
    const eventData = roadEventData.map((data, index) =>(
        <tr key={index}>
            <td>{data.date}</td>
            <td onClick={()=>showDetails(data.venue)}>{data.venue}</td>
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
                {/* <table id="searchTable">
                    <tbody>
                        <tr>
                        <th>Date</th>
                        <th>venue</th>
                        <th>Category</th>
                        </tr>
                        {eventData}
                    </tbody>
                </table>   */}
                {/* below table got updated based on api calls */}
                
                
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>title</th>
                            <th>Venue</th>
                            <th>Contact</th>
                        </tr>
                        {tableContent}
                    </tbody>
                </table>      
            </div>
            
        </div>
    )
}

export default RoadEvents