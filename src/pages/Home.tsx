import { HomeHero } from '../components/home/HomeHero'
import { HomeAbout } from '../components/home/HomeAbout'
import { HomeDepartments } from '../components/home/HomeDepartments'
import { HomeTestimonials } from '../components/home/HomeTestimonials'
import { HomeApproach } from '../components/home/HomeApproach'
import { HomePartners } from '../components/home/HomePartners'
import { HomeContact } from '../components/home/HomeContact'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <HomeHero />
      <HomeAbout />
      <HomeDepartments />
      <HomeTestimonials />
      <HomeApproach />
      <HomePartners />
      <HomeContact />
    </div>
  )
}
