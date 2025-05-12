import '../styles/style.css'


function Alpaca ({ image }) {
    return (
        
        <>
        <div className='col-md-6 col-12 justify-content-md-end justify-content-center' id="alpaca-div">
            <img src={`alpaca/backgrounds/${image.backgrounds}`} alt="" />
            <img src={`alpaca/ears/${image.ears}`} alt="" />
            <img src={`alpaca/neck/${image.neck}`} alt="" />
            <img src="alpaca/nose.png" alt="" />
            <img src={`alpaca/mouth/${image.mouth}`} alt="" />
            <img src={`alpaca/hair/${image.hair}`} alt="" />
            <img src={`alpaca/accessories/${image.accessories}`} alt="" />
            <img src={`alpaca/eyes/${image.eyes}`} alt="" />
            <img src={`alpaca/leg/${image.leg}`} alt="" />
        </div>
        </>
    )
}

export {Alpaca}