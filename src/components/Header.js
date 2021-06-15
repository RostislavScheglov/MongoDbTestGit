import axios from "axios"

const  TestMong = (props)=>{


   async function sendTask (){
       let task = document.querySelector('#inputField').value;
       await axios.post('http://localhost:5000/api/auth/createtask',
       {
           'taskBody': task ,
           'status': 'false'
       })
       console.log(task);
   }
    
    return(
        <div>
            <input id="inputField"  type = 'text' placeholder="Post Title"/>
            <button type='submit' id="createPost_button_submit" onClick = {sendTask}>Submit</button>
        </div>
    )

}

export default TestMong;