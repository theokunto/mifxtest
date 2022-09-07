import { Container } from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import MainProductList from "./product/mainProductList";

const HomePage = () => {
    return (
        <MainLayout>
            <MainProductList />
        </MainLayout>
    )
}
export default HomePage;