import "./style.css"
import banner from '../assets/Group.png'

const Banner = () => {
    return (
        <div className="banner__container">
            <div className="banner">
                <div className="text__heading">
                    <h1>Gain the knowledge by <br />solving these Amazing <br />Qzizes </h1>

                    <input type="text" placeholder="We help yor prepare for more bible queze" />
                </div>
                <div className="image__bar">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner
