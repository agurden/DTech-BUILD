import { useNavigate } from 'react-router-dom';


function FindBuddy() {
    
    const navigate = useNavigate()

    return(
        <>
        <div className="buttonContainer">
            <input
              className="inputButton"
              type="button"
              onClick={() => {navigate("/preferences")}} /* edit button and navigation */
              value="Edit Preferences"
              style={{ fontSize: '3.0em', padding: '15px 25px', marginTop: '20px' }}
            />
          </div>
          </>
    )
}

export default FindBuddy