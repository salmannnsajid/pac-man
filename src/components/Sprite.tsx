import React, { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import { SCALE_FACTOR } from '../model/Coordinates';
import './Sprite.css';
import RedPacmanImage from '../resources/arcade_pacman_sprites-red.png'
import BluePacmanImage from '../resources/arcade_pacman_sprites-blue.png'
import PinkPacmanImage from '../resources/arcade_pacman_sprites-pink.png'
import GreenPacmanImage from '../resources/arcade_pacman_sprites-green.png'
import YellowPacmanImage from '../resources/arcade_pacman_sprites-yellow.png'
import OrangePacmanImage from '../resources/arcade_pacman_sprites-orange.png'

const scale = `scale(${SCALE_FACTOR})`;

const images = {
  red: RedPacmanImage,
  blue: BluePacmanImage,
  pink: PinkPacmanImage,
  green: GreenPacmanImage,
  orange: OrangePacmanImage,
  yellow: YellowPacmanImage,
}

export const Sprite: FC<{
  name: string;
  x: number;
  y: number;
  className?: string | null;
  style?: CSSProperties;
}> = ({ name: spriteName, x, y, className, style = {} }) => {
  return (
    <div
      className={classNames('Sprite', 'Sprite-' + spriteName, className)}
      style={{
        ...style,
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: scale,
        transformOrigin: 'top left',
        backgroundImage: `url(${images.yellow})`,
      }}
    />
  );
};
