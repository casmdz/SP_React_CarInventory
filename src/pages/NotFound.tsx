import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate()

    // const error = useRouteError();
    // console.error(error)
    
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 4000)
    }, [] )

  return (
    // <>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
    // </>
  )
}
//code comes from WDS react router vid min: useNavigate Hook 