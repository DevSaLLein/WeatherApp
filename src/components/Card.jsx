/* eslint-disable react/prop-types */
import proTypes from 'prop-types'

const Card = ({ data }) => {

    const {location, current} = data;
    return (
        <div
            className="
                bg-white
                p-6
                mt-10
                rounded-lg
                shadow-md
                min-w-[220px]
            "
        >
            <header className="text-center">
                <span
                    className="
                        block
                        text-xl
                        font-bold
                        text-slate-700
                    "
                >
                    {location.name}
                </span>
                <span
                    className="
                        text-slate-400
                        text-sm
                        font-medium
                    "
                >
                    {`${location.region}, ${location.country}`}
                </span>
            </header>

            <main 
                className="
                    font-bold 
                    text-slate-700 
                    flex 
                    mt-4
                    mb-2
                    justify-center
                "
            >
                <span className="text-8xl"> {current.temp_c} </span>
                <span className="text-2xl mt-2"> °C </span>
            </main>

            <foooter className="flex justify-center flex-col items-center">
                <img src={current.condition.icon} alt="icon" className="block"/>
                <span className="text-slate-700">{current.condition.text}</span>
            </foooter>
        </div>
    )
}

export default Card

Card.proTypes = {
    data: proTypes.object,
}.isRequired