import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Accommodations from './pages/Accommodations';
import Transportation from './pages/Transportation';
import Attractions from './pages/Attractions';
import DestinationDetail from './pages/DestinationDetail';
import AccommodationDetail from './pages/AccommodationDetail';
import AttractionDetail from './pages/AttractionDetail';
import TransportationDetail from './pages/TransportationDetail';
import Contact from './pages/Contact';
import Partner from './pages/Partner';
import ExploreArea from './pages/ExploreArea';
import TransportationSchedule from './pages/TransportationSchedule';

function PageTitleSetter() {
  const location = useLocation();

  React.useEffect(() => {
    const titleMap: { [key: string]: string } = {
      '/destinations': 'Destinations | AccessTravel',
      '/accommodations': 'Accommodations | AccessTravel',
      '/transportation': 'Transportation | AccessTravel',
      '/attractions': 'Attractions | AccessTravel',
      '/contact': 'Contact Us | AccessTravel',
      '/partner': 'Partner with Us | AccessTravel',
    };

    document.title = titleMap[location.pathname] || 'AccessTravel - Accessible Tourism Platform';
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTitleSetter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner" element={<Partner />} />

        <Route path="/explore" element={<ExploreWrapper />} />
        <Route path="/schedule" element={<ScheduleWrapper />} />

        <Route path="/destinations/:id" element={<DestinationDetailWrapper />} />
        <Route path="/accommodations/:id" element={<AccommodationDetailWrapper />} />
        <Route path="/attractions/:id" element={<AttractionDetailWrapper />} />
        <Route path="/transportation/:id" element={<TransportationDetailWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrappers to handle URL params
import { useParams, useSearchParams } from 'react-router-dom';

function DestinationDetailWrapper() {
  const { id } = useParams();
  return <DestinationDetail id={id!} />;
}
function AccommodationDetailWrapper() {
  const { id } = useParams();
  return <AccommodationDetail id={id!} />;
}
function AttractionDetailWrapper() {
  const { id } = useParams();
  return <AttractionDetail id={id!} />;
}
function TransportationDetailWrapper() {
  const { id } = useParams();
  return <TransportationDetail id={id!} />;
}

function ExploreWrapper() {
  const [params] = useSearchParams();
  return <ExploreArea location={params.get('name') || ''} address={params.get('address') || ''} />;
}

function ScheduleWrapper() {
  const [params] = useSearchParams();
  return <TransportationSchedule transportName={params.get('name') || ''} type={params.get('type') || ''} />;
}

export default App;
