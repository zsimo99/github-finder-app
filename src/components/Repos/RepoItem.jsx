import PropTypes from "prop-types"
import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from "react-icons/fa"

function RepoItem({repo}) {
    const {
        name,description,html_url,forks,open_issues,watchers_count,stargazers_count
    }=repo
  return (
    <div className="card mb-2 rounded-md bg-gray-800 hover:bg-gray-900">
        <div className="card-body">
            <h3 className="font-semibold mb-2 text-xl"><a href={html_url} target="_blank" rel="noreferrer"><FaLink className="inline mr-1"/> {name}</a></h3>
            <p>{description}</p>
            <div>
                <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className="mr-1"/> {watchers_count}
                </div>
                <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className="mr-1"/> {stargazers_count}
                </div>
                <div className="mr-2 badge badge-error badge-lg">
                    <FaInfo className="mr-1"/> {open_issues}
                </div>
                <div className="mr-2 badge badge-warning badge-lg">
                    <FaUtensils className="mr-1"/> {forks}
                </div>
            </div>
        </div>
    </div>
  )
}
RepoItem.propTypes={
    repo:PropTypes.object.isRequired,
}

export default RepoItem