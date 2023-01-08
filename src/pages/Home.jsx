import { Title } from 'components/Title/Title';
import phonebook from '../images/Phonebook.jpg';

const Home = () => {
  return (
    <main>
      <Title>Phonebook</Title>
      <img src={phonebook} alt="phonebook" />
    </main>
  );
};

export default Home;
