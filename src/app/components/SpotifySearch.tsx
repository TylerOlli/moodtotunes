import { SearchResults, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

interface Props {
  sdk: SpotifyApi;
}

export default function SpotifySearch({ sdk }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResults>({} as SearchResults);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      searchSpotify(searchTerm, sdk, setResults);
    }
  }, [sdk, searchTerm]);

  // generate a table for the results
  const tableRows = results.artists?.items.map((artist) => {
    return (
      <tr key={artist.id}>
        <td>{artist.name}</td>
        <td>{artist.popularity}</td>
        <td>{artist.followers.total}</td>
      </tr>
    );
  });

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (searchTerm) {
          searchSpotify(searchTerm, sdk, setResults);
          setShowTable(true);
        }
      }}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
        <button type="button" onClick={() => {
          setSearchTerm("");
          setResults({} as SearchResults);
          setShowTable(false);
        }}>Clear</button>
      </form>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Popularity</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      )}
    </>
  );
}

async function searchSpotify(searchTerm: string, sdk: SpotifyApi, setResults: React.Dispatch<React.SetStateAction<SearchResults>>) {
  const results = await sdk.search(searchTerm, ["artist"]);
  setResults(() => results);
}