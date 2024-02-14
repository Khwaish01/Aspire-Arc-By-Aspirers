import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DESKTOPVIEW from "./pages/DESKTOPVIEW";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "Aspire Arc By Aspirers";
    let metaDescription = "Aspire Arc By Aspirers";

    switch (pathname) {
      case "/":
        title = "Aspire Arc By Aspirers";
        metaDescription = "Aspire Arc By Aspirers";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DESKTOPVIEW />} />
    </Routes>
  );
}
export default App;
