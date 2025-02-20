interface MessageProps {
  greeting: string;
}

function Message({ greeting }: MessageProps) {
  console.log('렌더링', greeting);
  return <p>{greeting}</p>;
}

export default Message;
