import HomePageExampleComponent from "../components/HomePageExampleComponent";
import SearchHotelComponent from "../components/search-components/SearchComponent.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            <HomePageExampleComponent>
                <h1>"Here is a placeholder for homepage components"</h1>
            </HomePageExampleComponent>
            <SearchHotelComponent/>
        </>
    );
};

export default HomePage;
