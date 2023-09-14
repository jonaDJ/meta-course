import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/header/Header";
import LandingSection from "./components/sections/LandingSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactMeSection from "./components/sections/ContactMeSection";
import Footer from "./components/footer/Footer";
import { AlertProvider } from "./context/alertContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Grid
          templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
        >
          <GridItem area={"header"}>
            <Header />
          </GridItem>
          <GridItem area={"main"}>
            <main className="main-container">
              <Routes>
                <Route path="/" element={<LandingSection />} />
                <Route path="/ProjectsSection" element={<ProjectsSection />} />
                <Route
                  path="/ContactMeSection"
                  element={<ContactMeSection />}
                />
              </Routes>
            </main>
          </GridItem>
          <GridItem area={"footer"}>
            <Footer />
          </GridItem>
        </Grid>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
