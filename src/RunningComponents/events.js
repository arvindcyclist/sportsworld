import React from 'react'
import RunNav from '../component/RunNav'
import runData  from '../assets/runningevents.json'

function RunEvents(){
   
    const runContent = runData.map((data)=>(
    
        <tr key={data.id}>
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
            <h2>RUNNING</h2>
            <div>
                <RunNav></RunNav>
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
                        {runContent}
                    </tbody>
                </table>        
            </div>
            
        </div>
    )
}

export default RunEvents