interface MessageProps {
  greeting: string;
  color?: string;
}

function Message({ greeting, color }: MessageProps) {
  console.log('렌더링', greeting);
  return <p style={{ color }}>{greeting}</p>;
}

export default Message;
