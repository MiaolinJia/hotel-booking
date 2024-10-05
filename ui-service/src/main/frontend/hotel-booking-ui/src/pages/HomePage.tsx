import HomePageExampleComponent from "../components/HomePageExampleComponent";
import SearchComponents from "../components/search-components/SearchComponent.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            <HomePageExampleComponent>
                <h1>"Here is a placeholder for homepage components"</h1>
            </HomePageExampleComponent>
            <SearchComponents></SearchComponents>
        </>
    );
};

export default HomePage;
