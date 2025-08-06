import { useParams } from "react-router-dom"

const User = () => {
    let { id } = useParams();
  return (
      <div>
          <h2> Your id is :{id}</h2>
    </div>
  )
}

export default User