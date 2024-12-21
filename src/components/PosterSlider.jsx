import React, { useEffect } from "react";
import GlobalApi from "../services/GlobalApi.jsx";
function PosterSlider() {
  const [posterList, setPosterList] = useState([]);
  useEffect(() => {
    getPoserList();
  }, []);
  const getPoserList = () => {
    GlobalApi.getTrendingMovies.then((resp) =>
      setPosterList(resp.data.results),
    );
  };
  return (
    <div>
      <div>
        <h3 className="text-white"> Top 10 Movies Today</h3>
        <div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterSlider;
