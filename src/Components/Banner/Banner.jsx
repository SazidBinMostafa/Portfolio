import { useEffect, useState } from "react";
import astronaut from "../../assets/img/banner-img.svg"
import './Banner.css'


function Banner() {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = () => {
        const i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        }
        else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => { tick() }, delta);
        return () => clearInterval(ticker)
    }, [text])

    return <>
        <section className="banner flex flex-col-reverse lg:flex-row items-center justify-between p-5 py-14">
            <div className="text-white font-semibold text-center max-w-96">
                <h3 className="text-xl">Hey there!</h3>
                <h3 className="text-5xl my-3">I am Sazid</h3>
                <h3 className="text-3xl">{`<${text.toUpperCase()}>`}</h3>
                <p>{"I create dynamic and magical web experiences that blend creativity with functionality. Dive into my work and let's build something amazing!"}</p>
            </div>
            <div>
                <img src={astronaut} alt="" />
            </div>
        </section>
    </>
}

export default Banner;