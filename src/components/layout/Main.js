import { useSelector } from "react-redux";

import ShareBox from "../widgets/ShareBox"
import ArticleCard from "../widgets/ArticleCard"
import PostModal from "../widgets/PostModal"

const Main = ({showModal, setShowModal}) => {
  const { loading } = useSelector(state => state.createPost);

  return (
    <main className='main'>
        <ShareBox setShowModal={setShowModal} loading={loading} />
        {loading && <div className='spinner'>
        <img src="/images/spinner-icon.svg" alt="Icon Spinner" />
    </div>}
        <ArticleCard />
        {showModal && <PostModal setShowModal={setShowModal} />}
    </main>
  )
}

export default Main