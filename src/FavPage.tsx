import React from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./store";
import { toggleFavAction } from "./Actions";
const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}
