import Banner from "../../Components/Banner/Banner";
import ExpertiseSlider from "../../Components/ExpertiseSlider/ExpertiseSlider";
import Services from "../Services/Services";
import './Home.css'


function Home() {

    return <>
        <Banner></Banner>
        <section className="my-20 mx-14 rounded-3xl expertise-section">
            <div className="expertise-div rounded-3xl">
                <h3 className="text-5xl text-white text-center mb-8">Expertise</h3>
                <ExpertiseSlider></ExpertiseSlider>
            </div>
        </section>
        <Services></Services>
    </>
}

export default Home;