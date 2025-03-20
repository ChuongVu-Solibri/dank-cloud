import PostBox from '../PostBox'

const Home = () => {
  return (
    <div>
      <PostBox
        title="Title 1"
        mediaUrl="https://source.unsplash.com/random/800x600"
        description="Description 1"
      />
      <PostBox
        title="Title 2"
        mediaUrl="https://source.unsplash.com/random/800x601"
        description="Description 2"
      />
      <PostBox
        title="Title 3"
        mediaUrl="https://source.unsplash.com/random/800x602"
        description="Description 3"
      />
    </div>
  )
}

export default Home