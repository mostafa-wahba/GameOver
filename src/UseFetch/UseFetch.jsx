import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function UseFetch() {
  const [more, setMore] = useState(16);
  const [all, setAll] = useState([]);
  const [pc, setPc] = useState([]);
  const [browser, setBrower] = useState([]);
  const [releaseDate, setDeleaseDate] = useState([]);
  const [popularity, setPopularity] = useState([]);
  const [alphabetical, setAlphabetical] = useState([]);
  const [relevance, setRelevance] = useState([]);
  const [racing, setRacing] = useState([]);
  const [sports, setSports] = useState([]);
  const [social, setSocial] = useState([]);
  const [shooter, setShooter] = useState([]);
  const [openWorld, setOpenWorld] = useState([]);
  const [zombie, setZombie] = useState([]);
  const [fantasy, setFantasy] = useState([]);
  const [actionRpg, setActionRpg] = useState([]);
  const [action, setAction] = useState([]);
  const [fight, setFight] = useState([]);
  const [battleRoyale, setBattleRoyale] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2e6a2b934fmsh150821d5722b5d9p152729jsn443a6a698cc3",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  async function getGames(mediaItem, mediaData, callback) {
    let { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?${mediaItem}=${mediaData}`,
      options
    );
    callback(data);
  }
  useEffect(() => {
    getGames("", "", setAll);
    getGames("platform", "pc", setPc);
    getGames("platform", "browser", setBrower);
    getGames("sort-by", "releaseDate", setDeleaseDate);
    getGames("sort-by", "popularity", setPopularity);
    getGames("sort-by", "alphabetical", setAlphabetical);
    getGames("sort-by", "relevance", setRelevance);
    getGames("category", "racing", setRacing);
    getGames("category", "sports", setSports);
    getGames("category", "social", setSocial);
    getGames("category", "shooter", setShooter);
    getGames("category", "open-world", setOpenWorld);
    getGames("category", "zombie", setZombie);
    getGames("category", "fantasy", setFantasy);
    getGames("category", "action-rpg", setActionRpg);
    getGames("category", "action", setAction);
    getGames("category", "fight", setFight);
    getGames("category", "battle-royale", setBattleRoyale);
  }, []);
  function moreGames() {
    setMore(more + 20);
  }
  return {
    getGames,
    moreGames,
    more,
    all,
    pc,
    browser,
    releaseDate,
    popularity,
    alphabetical,
    relevance,
    racing,
    sports,
    social,
    shooter,
    openWorld,
    zombie,
    fantasy,
    actionRpg,
    action,
    fight,
    battleRoyale,
  };
}
