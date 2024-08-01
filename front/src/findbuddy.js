import { useNavigate } from 'react-router-dom';


function FindBuddy() {
    
    const navigate = useNavigate()

    return(
        <>
        <div className='mainContainer' style={{backgroundColor: "#003087"}}>
        <div className="buttonContainer">
            <input
              className="inputButton"
              type="button"
              onClick={() => {navigate("/userhome")}} /* edit button and navigation */
              value="Back Home"
              style={{ fontSize: '3.0em', padding: '15px 25px', marginTop: '20px' }}
            />
          </div>
        </div>
          </>
    )
}

export default FindBuddy