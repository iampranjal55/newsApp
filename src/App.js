// function based:
// function App() {
//   return (
//    <>
//    <h1>News App</h1>
//    </>
//   );
// }

// export default App;

// class based:
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Everything from "./components/Everything";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //You use state to manage and update the dynamic data within your React component, enabling it to react to changes and render UI accordingly.
      mode: "light",
      progress:0,
      totalApiReq:0,
    };
  }
  toggleMode = () => {
    this.setState(
      (prevState) => ({
        mode: prevState.mode === "light" ? "dark" : "light",
      }),
      () => {
        // Callback function to perform additional tasks after state has been updated
        const { mode } = this.state;
        document.body.style.backgroundColor =
          mode === "dark" ? "rgb(33 37 41 / 97%)" : "white";
        document.body.style.color = mode === "dark" ? "white" : "black";
      }
    );
  };
  incrementApiReq = () => {
    this.setState(prevState => ({
      totalApiReq: prevState.totalApiReq + 1
    }));
  }
  state = {
    progress:0
  }
setProgress=(progress)=>{
  this.setState({progress:progress})
}
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
            <Everything incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq} setProgress={this.setProgress}></Everything>
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
            <Everything incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq} setProgress={this.setProgress}></Everything>
          </>
        ),
      },
      {
        path: "/business",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="business"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"business"}
              toggleMode={this.toggleMode}
            />
          </>
        ),
      },
      {
        path: "/general",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />{" "}
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="general"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"general"}
              toggleMode={this.toggleMode}
            />
          </>
        ),
      },
      {
        path: "/health",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />{" "}
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="health"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"health"}
            />
          </>
        ),
      },
      {
        path: "/science",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />{" "}
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="science"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"science"}
            />
          </>
        ),
      },
      {
        path: "/sports",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />{" "}
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="sports"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"sports"}
            />
          </>
        ),
      },
      {
        path: "/technology",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />{" "}
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="technology"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"technology"}
            />
          </>
        ),
      },
      {
        path: "/entertainment",
        element: (
          <>
            <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />{" "}
            <LoadingBar
              height={4}
              color="#f11946"
              progress={this.state.progress}
            />
             <News incrementApiReq={this.incrementApiReq} totalApiReq={this.state.totalApiReq}
              setProgress={this.setProgress}
              key="entertainment"
              mode={this.state.mode}
              pageSize={10}
              country={"in"}
              category={"entertainment"}
              toggleMode={this.toggleMode}
            />
          </>
        ),
      },
    ]);
    return (
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    );
  }
}

