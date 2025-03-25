import PostBox from '../PostBox'

const Home = () => {
  return (
    <div>
      <PostBox
        title="Title 1"
        mediaUrl="https://picsum.photos/800/600"
        description="Description 1"
      />
      <PostBox
        title="Title 2"
        mediaUrl="https://picsum.photos/800/600"
        description="Description 2"
      />
      <PostBox
        title="Title 3"
        mediaUrl="https://picsum.photos/800/600"
        description="Description 3"
      />
    </div>
  )
}

export default Home