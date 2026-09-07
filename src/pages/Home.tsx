import { HomeHero } from '../components/home/HomeHero'
import { HomeAbout } from '../components/home/HomeAbout'
import { HomeApproach } from '../components/home/HomeApproach'
import { HomePartners } from '../components/home/HomePartners'
import { HomeContact } from '../components/home/HomeContact'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <HomeAbout />
      <HomeApproach />
      <HomePartners />
      <HomeContact />
    </div>
  )
}
