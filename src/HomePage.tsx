import React from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./store";
import { fetchDatAction, toggleFavAction } from "./Actions";
const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDatAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
