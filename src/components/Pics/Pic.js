import React from "react"
import { useParams } from "react-router-dom"
import Flip from "../Util/Flip"
import Meta from "../Util/Meta"
import None from "../Util/None"

export default function Pic({ site, stuff }) {
  const { id } = useParams()

  const post = stuff.filter(p => p.slug === id).shift()

  if (!post) return <None />

  document.title = `${post.title} - ${site.metadata.section_labels.pics} (${site.metadata.section_taglines.pics}) - ${site.metadata.name}`

  return (
    <main id="main" tabIndex="-1" className="w-screen">
      <div className="pics-container max-w-screen-lg mx-auto my-0">
        <article className="pics-proper mb-12">
          <Meta site={site} post={post} />

          <Flip stuff={stuff} post={post} hidden="true" />

          {post.metadata.top_content && <div className="pics-head text-2xl text-center unreset my-12" dangerouslySetInnerHTML={{ __html: post.metadata.top_content }}></div>}

          <div className="pics-main">
            {post.metadata.image.map((image, index) => 
              <figure className="my-12" key={`${post.slug}-image-${index}`}>
                <img className="border-2 border-black" src={image.photo.url} alt="" />
                <figcaption className="mt-3 text-center text-xl">{image.caption}</figcaption>
              </figure>
            )}
          </div>

          {post.metadata.end_content && <div className="pics-tail text-2xl text-center unreset my-12" dangerouslySetInnerHTML={{ __html: post.metadata.end_content }}></div>}

          <Flip stuff={stuff} post={post} />
        </article>
      </div>
    </main>
  )
}
