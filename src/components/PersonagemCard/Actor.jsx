function Actor(props) {
    return(
        <div className="flex">
            <div className="flex flex-col gap-2.5 items-center justify-center bg-[#300000] border border-black hover:scale-120 ">
                <img className="w-[200px]" src={props.imgActor} alt={props.altActor} />
                <div>
                    <h4>{props.actor}</h4>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center bg-[#300000] border border-black hover:scale-120 ">
                <img className="w-[200px]" src={props.imgPersona} alt={props.altPersona} />
                <div>
                    <h4>{props.persona}</h4>
                </div>
            </div>
          </div>
    )
}

export default Actor;