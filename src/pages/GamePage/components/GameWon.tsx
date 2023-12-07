import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import "./GameOver.css";
import { useGame } from "../../../components/StoreContext";
import { Message } from "./Message";

export const GameWon: FC<{ className?: string }> = observer(({ className }) => {
  const game = useGame();
  const gameOverMessageVisible = game.gameWon;

  useEffect(() => {
    if (gameOverMessageVisible) {
      game.gamePaused = true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameOverMessageVisible]);

  return gameOverMessageVisible ? <Message text="Game Won" /> : null;
});
