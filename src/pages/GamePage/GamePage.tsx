import { Button, Row } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Board } from "../../components/Board";
import { ExtraLives } from "./components/ExtraLives";
import { GameOver } from "./components/GameOver";
import { GhostsGameView } from "./components/GhostsView";
import { MazeView } from "./components/MazeView";
import { PacManView } from "./components/PacManView";
import { PillsView } from "./components/PillsView";
import { Score } from "./components/Score";
import { useStore } from "../../components/StoreContext";
import { useKeyboardActions } from "./components/useKeyboardActions";
import { VSpace } from "../../components/Spacer";
import { useGameLoop } from "../../model/useGameLoop";
import { GameWon } from "./components/GameWon";

export const GamePage: React.FC = observer(() => {
  const store = useStore();
  useEffect(() => {
    store.resetGame();
    return () => {
      store.game.gamePaused = true;
    };
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  useGameLoop();
  useKeyboardActions();

  return (
    <Layout data-testid="GamePage">
      <div>
        <Row justify="center">
          <Score />
        </Row>
        <Row style={{ gap: "1rem", justifyContent: "center" }}>
          {!store.game.gameOver && !store.game.gameWon && (
            <Button
              size="large"
              type="primary"
              style={{ fontSize: "1rem", fontFamily: "Joystix" }}
              onClick={() => (store.game.gamePaused = !store.game.gamePaused)}
            >
              {store.game.gamePaused ? "Start" : "Pause"}
            </Button>
          )}
          <Button
            size="large"
            type="primary"
            onClick={() => window.location.reload()}
            style={{ fontSize: "1rem", fontFamily: "Joystix" }}
          >
            Restart
          </Button>
        </Row>
        <VSpace size="small" />
      </div>

      <div />

      <div>
        <Board>
          <MazeView />
          <PillsView />
          <PacManView />
          <GhostsGameView />
          <GameOver />
          <GameWon />
        </Board>
        <VSpace size="large" />
        <Row justify="center">
          <ExtraLives />
        </Row>
      </div>
    </Layout>
  );
});

const Layout = styled.div`
  margin-left: 16px;
  margin-right: 16px;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;
