import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getSortedPostsData} from '../lib/posts'
import homeStyles from '../styles/Home.module.css'

const Home = ({allPostsData} : {
  allPostsData : {
    date : string
    title : string
    id : string
  }[]
}) => {
  return (
    <div>
      <Head>
        <title>Kyuwon Kim</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Kyuwon Kim Introduction]</p>
        <p>
          (This is a website)
        </p>

      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map( ({ id, title, date }) => 
          <li className={homeStyles.listItem} key = {id}>
            <Link href = {`/posts/${id}`} >
              <a>{title}</a>
            </Link>
            <br />
            <small className={homeStyles.lightText}>
              {date}
            </small>
          </li>
          )}
        </ul>
      </section>
      
    </div>
  )
}

export default Home

export const getStaticProps : GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props : {allPostsData}
  }
}