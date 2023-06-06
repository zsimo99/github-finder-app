import PropTypes from "prop-types"
import RepoItem from "./RepoItem"


function ReposList({repos}) {

  return (
    <div className="card shadow-lg rounded-lg bg-base-100">
        <div className="card-body">
            <h2 className="text-3xl card-title font-bold my-4">Latest Repositoris</h2>
            {repos.map(repo=>(
                <RepoItem key={repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}
ReposList.propTypes={
    repos:PropTypes.array.isRequired,
}

export default ReposList