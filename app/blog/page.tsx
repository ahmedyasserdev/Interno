import LatestBlog from "@/components/blog/LatestBlog"
import ArticlesAndNews from "@/components/shared/ArticlesAndNews"
import PageHeader from "@/components/shared/PageHeader"
import { articlesAndNews } from "@/constants"

const page = () => {
  return (
    <>
      <PageHeader 
        title="Articles & News"
        subTitle='Home / Blog'
        image = "/images/blog-banner.png"
      />
      <LatestBlog />
        <ArticlesAndNews 
          data={articlesAndNews}
          isBlog
        />
    
    </>
  )
}

export default page