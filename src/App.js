import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import Loginpage from './pages/loginpage'; 
import RegisterPage from './pages/registerpage';
import Home from './pages/homepage';
import AboutPage from './pages/aboutpage';
import Services from './pages/servicepage';
import PropertiesPage from './pages/mainproperty';
import LuxuryVillaPageSection from './components/propertydetails';
import CozyApartmentPage from './components/propertydetails1';
import ModernHousePage from './components/propertydetails2';
import RentProperties from './components/rentproperties';
import SaleProperties from './components/saleproperties';
import PropertyDetails from './components/majorproperties';
import Profile from './components/profile';
import ContactusPage from './components/contactus';
import ModernPropertyCard from './components/listingsection';
import EntireAgentsPage from './components/entireagents';
import DetailPage from './components/listingdetailpage';
import EditProfile from './components/editprofile';
import AgentDetails from './components/entireagentdetails';
import ProtectedRoute from './routes/userprotected';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Loginpage />} /> 
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/property/:id" element={<PropertyDetails type="rent" />} />
        <Route path="/sale-property/:id" element={<PropertyDetails type="sale" />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/luxury-villa" element={<LuxuryVillaPageSection />} />
        <Route path="/cozy-apartment" element={<CozyApartmentPage />} />
        <Route path="/modern-house" element={<ModernHousePage />} />
        <Route path="/rent-properties" element={<RentProperties />} />
        <Route path="/sale-properties" element={<SaleProperties />} />
        <Route path="/listing" element={<ModernPropertyCard />} />
        <Route path="/entire-agents" element={<EntireAgentsPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/agentdetails/:id" element={<AgentDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
