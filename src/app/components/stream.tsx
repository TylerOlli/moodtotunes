import "./stream.css";

import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { Track } from "../types";

interface Props {
  tracks: Track[];
}

function Stream({ tracks }: Props) {
  return (
    <div className="stream">
      {tracks.map((track) => (
        <div key={track.id} className="track">
          <div className="title">{track.title}</div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  tracks: state.tracks,
});

export default connect(mapStateToProps)(Stream);