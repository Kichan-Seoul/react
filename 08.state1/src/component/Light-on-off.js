const LightOnOff = () => {
    const [light, setLight] = useState(false);
    return (
        <>
            전구ON, 전구OFF     <h1></h1>글씨로

            <button onClick={()=>{setLight(!light)}}>
                {light ? "끄기" : "켜기"}
            </button>
        </>
    )
}