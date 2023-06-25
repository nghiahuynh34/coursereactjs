
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes, authRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react";
import Modal from './components/Layout/components/Modal';
import Comment from './components/Layout/components/proper/Comment'
import { BarMenu } from "./components/Layout/components/proper";
import Loading from "./components/Layout/components/Loading";
import ChatBoxBody from "./components/Layout/components/ChatBox/ChatBoxbody";
import NewBlog from "./components/Layout/components/NewBlog";
import ConfigRoutes from './config/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <>
            {
              publicRoutes.map((route, index) => {
                const Page = route.component
                let Layout = DefaultLayout
                if (route.layout) {
                  Layout = route.layout
                } else if (route.layout === null) {
                  Layout = Fragment
                }
                return <Route key={index} path={route.path} element={
                  <Layout><Page /></Layout>}
                />
              })}
            {privateRoutes.map((route, index) => {
              let Page = route.component
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              return <Route key={index} path={route.path} element={localStorage.getItem('token') ?
                <Layout><Page /></Layout> : <Navigate to={ConfigRoutes.Login} />

              } />
            })}

            {authRoutes.map((route, index) => {
              let Page = route.component
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              return <Route key={index} path={route.path} element={localStorage.getItem('token') ?
                <Navigate to={ConfigRoutes.root} /> : <Layout><Page /></Layout>

              } />
            })}
          </>
        </Routes>
      </div>
      <Modal />
      <Comment />
      <BarMenu />
      <Loading />
      <ChatBoxBody />

      <NewBlog />
    </Router>

  );
}

export default App;
