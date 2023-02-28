import Title from "../comps/Title";
import ImageGrid from "../comps/ImageGrid"

const Home = () => {
    
    return (
        <div className="wrapper">
            <header>
                <Title />
            </header>
            <main>
            <ImageGrid /> 
            </main>
        </div>
    )
}

export default Home;