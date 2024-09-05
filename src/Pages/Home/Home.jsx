import Banner from "../../Components/Banner/Banner";
import ExpertiseSlider from "../../Components/ExpertiseSlider/ExpertiseSlider";


function Home() {

    return <>
        <Banner></Banner>
        <section className="m-14 ">
            <h3 className="text-5xl text-white text-center mb-8">Expertise</h3>
            <ExpertiseSlider></ExpertiseSlider>
        </section>
    </>
}

export default Home;