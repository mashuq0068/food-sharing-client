

const OneFood = ({food}) => {
    const {foodImage , foodQuantity} = food
    return (
        <div>
            <img src={foodImage} className="w-full h-[40vh]" alt="" />
            <p>{foodQuantity}</p>
        </div>
    );
};

export default OneFood;