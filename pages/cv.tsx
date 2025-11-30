import type { NextPage } from 'next'
import styles from '../styles/home.module.css'
import Header from '../components/Header'
import useMediaQuery from '../hooks/useMediaQuery'

const Contact: NextPage = () => {
  const isMobile = useMediaQuery(768);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          <div className={styles.cv}>
            <span>Exhibitions</span>
            <div>
                <span><a href="https://newenglandbookartists.org/small-impressions/" target="_blank">Small Impressions</a> / Museum of Printing</span>
                <span>OCT 2025, HAVERHILLE, MA</span>
            </div>
            <div>
                <span><a href="https://mnbookarts.org/new-editions" target="_blank">New Editions</a> / Minnesota Center for Book Arts</span>
                <span>OCT 2025, MINNEAPOLIS, MN</span>
            </div>
            <div>
                <span><a href="https://www.wpunj.edu/articles/news/2025-08-21/william-paterson-university-galleries-presents-ink-press-repeat-national-juried-printmaking-and-book-arts-exhibition" target="_blank">Ink, Press, Repeat</a> / William Paterson University Galleries</span>
                <span>SEP 2025 - DEC 2025, WAYNE, NJ</span>
            </div>
            <div>
                <span><a href="https://www.biartmuseum.org/events/dogear-festival-2025/" target="_blank">DogEar Festival</a> / Bainbridge Island Museum of Art</span>
                <span>APR 2025, BAINBRIDGE, WA</span>
            </div>
            <div>
                <span>Featured Artist / Jubilee Farm</span>
                <span>APR  2025 - SEP 2025, CARNATION, WA</span>
            </div>

            <span>Fairs</span>
            <div>Finnriver Book Fair 2025</div>
            <div>Seattle Art Book Fair 2025</div>
            <div>Finnriver Book Fair 2024</div>
            <div>San Francisco Zine Fest 2024</div>
            <div>Seattle Art Book Fair 2024</div>
            <div>San Francisco Zine Fest 2023</div>
            <div>Portland Zine Symposium 2023</div>
            <div>Olympia Zine Fest 2023</div>
            <div>Short Run Comix Festival 2022</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
