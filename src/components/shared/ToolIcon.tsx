import React from 'react';
import { CSSProperties } from 'react';
import { Icon, Image } from 'semantic-ui-react';

interface ToolIconProps {
  url?: string;
  style?: CSSProperties;
}

const iconStyle = { fontSize: '1.2em', opacity: '0.4' };

export const ToolIcon = ({ url, style }: ToolIconProps) =>
  url ? (
    <Image alt="tool icon" src={`https://www.google.com/s2/favicons?domain=${url}`} style={style} />
  ) : (
    <Icon name="globe" color="grey" style={{ ...style, iconStyle }} />
  );
