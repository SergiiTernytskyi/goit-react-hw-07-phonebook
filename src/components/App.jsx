import { Contacts } from 'pages/Contacts';
import { CreateContact } from 'pages/CreateContact';
import { Home } from 'pages/Home';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/create-contact" element={<CreateContact />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
