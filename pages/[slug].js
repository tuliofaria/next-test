import React from 'react'

const AllPages = (props) => {
  return(
    <div>
      <h1>Testing</h1>
      {JSON.stringify(props)}
    </div>
  )
}

export async function getStaticProps({ preview = false, ...props}) {
  console.log('getStaticProps', props)

  return {
    props: {
      preview: preview,
      post: 'Page: ' + props.params.slug
    }
  }
}

export async function getStaticPaths() {
  console.log('getStaticPaths')
  const allPosts = [
    '/nice',
    '/another'
  ]
  return {
    paths: allPosts,
    fallback: true
  }
}

export default AllPages
