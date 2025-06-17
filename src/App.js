import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Menu/DialogPage/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Menu/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Register from './components/Register/Register';
import { withAuthRedirect } from './Hoc/withAuthRedirect';
import Dialogs from './components/Menu/DialogPage/Dialogs/Dialogs';
import Timeline from './components/Timeline';
import CreatePostPage from './components/CreatePostPage'; // добавь импорт
import ExploreUsers from './components/ExploreUsers';
import DestinationComponent from './components/Destination'; // Переименуй импорт


const ProtectedTimeline = withAuthRedirect(Timeline);
const ProtectedProfile = withAuthRedirect(ProfileContainer);
const ProtectedDialogs = withAuthRedirect(DialogsContainer);
const ProtectedUsers = withAuthRedirect(UsersContainer);
const ProtectedExploreUsers = withAuthRedirect(ExploreUsers);
const ProtectedDestination = withAuthRedirect(DestinationComponent); // Оберни в защиту


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderContainer />
        <Routes>
          {/* 👇 Новая главная страница */}
          <Route path="/" element={<ProtectedTimeline />} />
          <Route path="/create-post" element={<CreatePostPage />} />

          {/* 👉 Профиль перенесён на /profile */}
          <Route path="/profile" element={<ProtectedProfile />} />

          {/* Страница диалогов */}
          <Route path="/dialogs/*" element={<Dialogs />} />

          <Route path="/explore" element={<ProtectedExploreUsers />} />

          <Route path="/destination" element={<ProtectedDestination />} />


          {/* Страница пользователей */}
          {/* <Route path="/users" element={<ProtectedUsers />} /> */}

          {/* Аутентификация */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
