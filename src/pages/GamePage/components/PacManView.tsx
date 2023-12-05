import React, { FC, CSSProperties } from "react";
import { Sprite } from "../../../components/Sprite";
import { Direction } from "../../../model/Types";
import { observer } from "mobx-react-lite";
import { useGame } from "../../../components/StoreContext";
import {
  SCREEN_TILE_SIZE,
  SCREEN_TILE_CENTER,
} from "../../../model/Coordinates";
import { PacMan } from "../../../model/PacMan";
import {
  PacManDyingPhase,
  getPacManDyingPhase,
} from "../../../model/pacManDyingPhase";

export type PacManAnimationPhase = 0 | 1 | 2;

export const PacManAnimationPhases: PacManAnimationPhase[] = [0, 1, 2];

const PAC_MAN_WIDTH = SCREEN_TILE_SIZE * 2;
const PAC_MAN_HEIGHT = SCREEN_TILE_SIZE * 2;

const PAC_MAN_OFFSET_X = PAC_MAN_WIDTH / 2 - 2;
const PAC_MAN_OFFSET_Y = PAC_MAN_HEIGHT / 2 - 2;

export const PacManView: FC = observer(() => {
  const game = useGame();
  const pacMan = game.pacMan;
  const { dead, alive, screenCoordinates, direction } = pacMan;
  const pacManAnimationPhase = getPacManAnimationPhase(pacMan);
  const dyingPhase = getPacManDyingPhase(pacMan);
  return (
    <>
      {alive && (
        <PacManSprite
          direction={direction}
          pacManAnimationPhase={pacManAnimationPhase}
          x={screenCoordinates.x + SCREEN_TILE_CENTER - PAC_MAN_OFFSET_X}
          y={screenCoordinates.y + SCREEN_TILE_CENTER - PAC_MAN_OFFSET_Y}
        />
      )}
      {dead && (
        <DyingPacManSprite
          dyingPacManAnimationPhase={dyingPhase}
          x={screenCoordinates.x + SCREEN_TILE_CENTER - PAC_MAN_OFFSET_X}
          y={screenCoordinates.y + SCREEN_TILE_CENTER - PAC_MAN_OFFSET_Y}
        />
      )}
    </>
  );
});

const getPacManAnimationPhase = (pacMan: PacMan): PacManAnimationPhase => {
  const step = Math.round(pacMan.game.timestamp / 200) % 4;
  const phase = step === 3 ? 1 : step;
  return phase as PacManAnimationPhase;
};

export const PacManSprite: FC<{
  direction: Direction;
  pacManAnimationPhase: PacManAnimationPhase;
  x: number;
  y: number;
  style?: CSSProperties;
}> = ({ direction, pacManAnimationPhase, x, y, style }) => (
  <Sprite
    className="Sprite-pacman"
    name={`pacman-direction-${direction}-phase-${pacManAnimationPhase}`}
    x={x}
    y={y}
    style={style}
  />
);

export const DyingPacManSprite: FC<{
  dyingPacManAnimationPhase: PacManDyingPhase;
  x: number;
  y: number;
  style?: CSSProperties;
}> = ({ dyingPacManAnimationPhase, x, y, style }) => (
  <Sprite
    className="Sprite-dying-pacman"
    name={`dying-pacman-phase-${dyingPacManAnimationPhase}`}
    x={x}
    y={y}
    style={style}
  />
);
